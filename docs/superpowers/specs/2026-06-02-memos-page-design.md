# Memos Page — Design Spec

**Status:** Approved
**Date:** 2026-06-02
**Owner:** Site author (single user)

A new standalone `/memos` page for personal study notes, backed by Supabase Postgres. Reading is open to anyone with the URL; an in-browser passphrase modal unlocks add/edit/delete in the current tab. The passphrase is a UX gate, not a security boundary.

---

## 1. Goals & non-goals

### Goals
- Quick-capture personal notes (memos) while studying, accessible from any device with the URL.
- CRUD operations from the browser without redeploying the site.
- Tag-based filtering.
- Markdown body with live preview.
- Visual + typographic consistency with the existing editorial style of the site.

### Non-goals (v1)
- Real authentication, RLS-enforced authorization, multi-user, sharing, collaboration.
- Full-text search across memos (tag filter only).
- Syntax highlighting in code blocks.
- Image / file attachments.
- Offline mode, PWA caching.
- Linking memos to specific CLF-C02 topic pages.
- Bilingual labels beyond the page header (reuse existing Thai+English convention only there).

---

## 2. Accepted risks

The user explicitly accepted the following tradeoffs during brainstorming. Do not silently re-litigate them during implementation.

1. **World-writable Supabase table.** RLS is disabled (or fully permissive). Anyone who finds the URL and inspects the JS bundle can use the anon key to read or write the `memos` table directly, bypassing the UI passphrase modal entirely.
2. **Passphrase exists in the JS bundle.** It is read from `NEXT_PUBLIC_MEMO_PASSPHRASE` and inlined at build time. It is cosmetic — it gates the UI, nothing else.
3. **Public deployment.** The site is deployed to the public internet. Mitigations: Supabase free-tier 7-day automatic backups + a manual `data/memos-seed.ts` snapshot the user can re-import.

---

## 3. Architecture

```
Browser (static HTML + hydrated client component)
   │
   │  fetch / insert / update / delete  (via @supabase/supabase-js)
   ▼
Supabase Postgres
  └── table: memos
   ▲
   │  (manual)  export → data/memos-seed.ts ;  restore → SQL editor
   ▼
Git repo
```

- Static export (`output: "export"` in `next.config.ts`) stays unchanged.
- No Next.js API routes, no server-side data fetches at build time.
- `app/memos/page.tsx` is a thin server-component shell that mounts a client component (`MemosPageClient`). The client component fetches on mount.
- Supabase client is a module-level singleton in `lib/supabase.ts`.

---

## 4. Supabase schema

Single table, paste-runnable from `supabase/schema.sql`:

```sql
create table if not exists memos (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  body        text not null default '',
  tags        text[] not null default '{}',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists memos_created_at_idx on memos (created_at desc);
create index if not exists memos_tags_idx on memos using gin (tags);

-- updated_at trigger
create or replace function set_memos_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists memos_set_updated_at on memos;
create trigger memos_set_updated_at
  before update on memos
  for each row execute function set_memos_updated_at();

-- RLS: explicitly disabled to match accepted risk #1
alter table memos disable row level security;
```

The `supabase/schema.sql` file is documentation/setup-script only. It is not consumed by the build.

---

## 5. File layout

Additions (no existing files restructured):

```
app/
  memos/
    page.tsx                    # server-component shell, renders <Navbar/> + <MemosPageClient/> + <Footer/>
components/
  memos/
    MemosPageClient.tsx         # "use client"; owns top-level fetch state + unlock state
    MemoList.tsx                # renders cards, owns tag-filter state
    MemoCard.tsx                # one memo, view + delete + open-editor button
    MemoEditor.tsx              # add/edit form (textarea + markdown preview, modal-style)
    MemoMarkdown.tsx            # thin react-markdown wrapper with project styles
    PassphraseGate.tsx          # modal that unlocks edit mode
    TagFilter.tsx               # tag chips above the list
    EmptyState.tsx              # zero-memos placeholder
    DisabledNotice.tsx          # rendered when env vars missing
lib/
  supabase.ts                   # createClient() singleton; exports `supabase` and `isSupabaseConfigured()`
  memos.ts                      # typed CRUD helpers: list / create / update / remove
  passphrase.ts                 # check(input) + isUnlocked() + unlock() + lock() (sessionStorage-backed)
types/
  memo.ts                       # Memo + MemoInput interfaces
data/
  memos-seed.ts                 # snapshot file (initially empty array, user updates manually)
supabase/
  schema.sql                    # paste-into-SQL-editor setup script
.env.example                    # documents the 3 env vars
```

Existing files modified:
- `components/Footer.tsx` — add a single discreet `<Link href="/memos">บันทึก</Link>` entry.
- `package.json` — add `@supabase/supabase-js`, `react-markdown`, `remark-gfm`.
- `.gitignore` — confirm `.env.local` is ignored (verify, do not duplicate).

---

## 6. Environment variables

Three vars, all read from `process.env` at build time so they inline into the bundle:

| Var | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | yes | Supabase project URL. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | yes | Anon key. |
| `NEXT_PUBLIC_MEMO_PASSPHRASE` | yes | Cosmetic UI gate string. |

`.env.example` is committed with placeholder values. `.env.local` is git-ignored. If any of the three is missing at build time, the `/memos` page renders a `DisabledNotice` ("Memos disabled — Supabase not configured") instead of attempting to fetch.

---

## 7. Data flow

### Read path (anyone)

1. `MemosPageClient` mounts → calls `lib/memos.ts → list()` → `supabase.from('memos').select('*').order('created_at', { ascending: false })`.
2. Loading state: 4 skeleton cards.
3. Error state: inline message + `Retry` button.
4. Success: passes memos to `<MemoList>`.
5. `TagFilter` derives the union of all tags from the loaded memos. Selecting a tag filters the in-memory list (no refetch).

### Write path (passphrase-unlocked tab)

1. User clicks `+ New memo`, or `Edit` / `Delete` on a card.
2. If `passphrase.isUnlocked()` returns false, `<PassphraseGate>` modal appears. The pending action is held in component state until unlock succeeds or the user cancels.
3. Modal compares `input` to `process.env.NEXT_PUBLIC_MEMO_PASSPHRASE` byte-for-byte. On success: `passphrase.unlock()` sets `sessionStorage.memos_unlocked = '1'`, modal dismisses, pending action proceeds.
4. CRUD calls go through `lib/memos.ts`. The local list is optimistically updated; on error, the change reverts and an inline error message appears.
5. A `Lock` button in the page toolbar (visible only when unlocked) calls `passphrase.lock()` and removes the editor controls.
6. Closing the tab clears the unlock automatically (sessionStorage scope).

---

## 8. UI / styling

Conventions follow the existing editorial style of the site (see `UI-style.md` and `docs/ARCHITECTURE.md`).

### Page shell
- `<Navbar />` (no `activeSlug`, so no breadcrumb row).
- `<main>` with `mx-auto max-w-3xl px-4 sm:px-6` matching the homepage.
- `<Footer />`.

### Header block
- Eyebrow: `MEMOS · บันทึกส่วนตัว` — uppercase, tracked, `text-[var(--ink-faint)]`.
- `<h1>` in serif, identical sizing to homepage h1.
- One short paragraph in `text-[var(--ink-muted)]` describing the page in Thai (e.g. "บันทึกย่อส่วนตัวระหว่างทบทวน CLF-C02").

### Toolbar row
- Left: `+ New memo` button (lucide `Plus` icon).
- Center: `<TagFilter>` — horizontally scrollable chip row.
- Right: `Lock` button (lucide `LockOpen` icon, visible only when unlocked).

### Memo card
- Border: `border-[var(--rule)]`, hairline rule between cards (mimic existing topic list rhythm).
- Title: serif, same scale as topic-list titles.
- Body preview: rendered markdown, `line-clamp-3`.
- Tags: small chips, neutral stone fill.
- `updated_at`: `font-mono tabular-nums text-[var(--ink-faint)]`, formatted as `YYYY-MM-DD HH:mm` (24h).
- Actions (only when unlocked): `Edit` (lucide `Pencil`), `Delete` (lucide `Trash2`), text + icon, faint until hovered.

### Editor (MemoEditor)
- Modal-style overlay (full-screen on mobile, centered card on `sm:` and up).
- Title input (single-line) at top.
- Body: textarea on the left, live markdown preview on the right at `sm:` breakpoint; stacked on mobile with a `Preview` toggle.
- Tags input: single text field, comma-separated; on save, split + trim + dedupe + lowercase.
- Buttons: `Cancel` (ghost), `Save` (primary). Disabled `Save` while title is empty or a request is in flight.

### PassphraseGate
- Centered card, `bg-[var(--bg-elev)]`, `border-[var(--rule)]`.
- Single password input + `Unlock` button + `Cancel`.
- On wrong passphrase: shake animation (CSS keyframes) + inline error.

### Icons
lucide-react only: `Plus`, `Pencil`, `Trash2`, `Lock`, `LockOpen`, `Tag`, `X`, `Eye`, `EyeOff` (for the password field). **No emoji.**

### Color
Page accent: **indigo** (one of the six existing category accents). It is already in the palette but not used as a *primary* topic accent for any of the 20 topics in a way that would conflict; if the implementation finds a clash, fall back to a neutral stone-only treatment for the toolbar buttons.

### Theme + font size
No new CSS variables. Reuse `var(--bg)`, `var(--bg-elev)`, `var(--ink)`, `var(--ink-muted)`, `var(--ink-faint)`, `var(--rule)`, `var(--rule-strong)`. Light/dark/system + S/M/L font size already handled by existing scripts in `app/layout.tsx`.

### Tailwind v4 reminder
All CSS-variable arbitrary values use the `var(...)` form: `bg-[var(--bg-elev)]`, never `bg-[--bg-elev]`. (See `AGENTS.md` § Tailwind v4.)

---

## 9. Markdown rendering

- `react-markdown` + `remark-gfm` (tables, strikethrough, task lists).
- No raw HTML passthrough (default — do not pass `rehype-raw`).
- No syntax highlighting in v1.
- Imports live only inside `components/memos/MemoMarkdown.tsx`, so the dependency only loads on `/memos`. Other pages stay lean.

---

## 10. Error handling

| Scenario | Handling |
|---|---|
| Any of the 3 env vars missing at build | `<DisabledNotice>` instead of fetching. No console errors. |
| Network/Supabase error on initial fetch | Inline error block + `Retry` button. |
| Network/Supabase error on create/update/delete | Optimistic update reverts; toast-style inline error inside the editor or on the affected card. |
| Wrong passphrase | Shake animation + inline error. No rate limiting (it's cosmetic). |
| Empty state (zero memos) | `<EmptyState>` with a `+ New memo` CTA. |
| Memo with empty title attempted | Save button disabled; inline validation hint. |

---

## 11. Testing & verification

The codebase has no automated test suite. Verification is manual against this checklist (executed before each commit during implementation):

1. `npm run lint` → zero errors.
2. `npm run build` → exits 0, emits **25 pages** (24 existing + `/memos`).
3. With env vars unset: `/memos` shows `DisabledNotice`.
4. With env vars set + empty table: `/memos` shows `EmptyState`.
5. Unlock → create memo → appears in list, newest first.
6. Edit memo → preview updates, save persists, `updated_at` advances.
7. Delete memo → removed from list, gone after refresh.
8. Tag filter: clicking a tag filters; clicking again clears.
9. Theme toggle (light/dark/system) and font-size toggle (S/M/L) both work on `/memos`.
10. Mobile breakpoint: editor stacks; toolbar wraps cleanly.
11. Print stylesheet: editor controls hidden, memo cards print legibly.
12. Page works in a fresh tab (sessionStorage isolation).

---

## 12. Implementation order (high-level — full plan in writing-plans output)

1. Dependencies + env scaffolding + types.
2. `lib/supabase.ts`, `lib/memos.ts`, `lib/passphrase.ts`.
3. `app/memos/page.tsx` shell + `MemosPageClient` with read path only.
4. `MemoList` + `MemoCard` + `TagFilter` + `EmptyState` + `DisabledNotice` (read-only UI).
5. `PassphraseGate` + unlock state wiring.
6. `MemoEditor` + create/update/delete write paths with optimistic UI.
7. `MemoMarkdown` integration on cards + editor preview.
8. `Footer` link.
9. `supabase/schema.sql` + `.env.example` + `data/memos-seed.ts` stub.
10. Manual verification checklist § 11.
