# Memos Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/memos` page backed by Supabase Postgres, with a passphrase-gated edit UI for personal study notes.

**Architecture:** Static-export Next.js 16 site fetches memos at runtime from Supabase via `@supabase/supabase-js`. Page is a client component. Tag filter, markdown body (`react-markdown` + `remark-gfm`), passphrase gate stored in `sessionStorage`. No backend code — Supabase anon key + table are world-writable per accepted risk. Spec: `docs/superpowers/specs/2026-06-02-memos-page-design.md`.

**Tech Stack:** Next.js 16 (App Router, static export), TypeScript, React 19, Tailwind CSS v4, `@supabase/supabase-js`, `react-markdown`, `remark-gfm`, `lucide-react`.

**Note: This codebase has no automated test suite.** Tasks use *manual verification steps* (browser smoke tests + `npm run lint` + `npm run build`) instead of TDD. Each task lists explicit expected output to confirm before committing.

---

## File map

**Created:**
- `types/memo.ts` — `Memo` and `MemoInput` interfaces.
- `lib/supabase.ts` — Supabase client singleton + `isSupabaseConfigured()`.
- `lib/memos.ts` — typed CRUD helpers: `listMemos`, `createMemo`, `updateMemo`, `deleteMemo`.
- `lib/passphrase.ts` — `isUnlocked`, `unlock`, `lock`, `checkPassphrase`.
- `app/memos/page.tsx` — server-component shell (Navbar + client component + Footer).
- `components/memos/MemosPageClient.tsx` — `"use client"`, top-level fetch + unlock state.
- `components/memos/MemoList.tsx` — list of cards + tag-filter integration.
- `components/memos/MemoCard.tsx` — single memo display with edit/delete actions.
- `components/memos/MemoEditor.tsx` — modal create/edit form with split textarea + preview.
- `components/memos/MemoMarkdown.tsx` — `react-markdown` wrapper with project styles.
- `components/memos/PassphraseGate.tsx` — unlock modal.
- `components/memos/TagFilter.tsx` — chip row.
- `components/memos/EmptyState.tsx` — zero-memos placeholder.
- `components/memos/DisabledNotice.tsx` — env-vars-missing notice.
- `data/memos-seed.ts` — manual snapshot file (initially empty array).
- `supabase/schema.sql` — SQL setup script for the `memos` table.
- `.env.example` — env-var documentation (must be force-added because `.env*` is in `.gitignore`).

**Modified:**
- `package.json` — add `@supabase/supabase-js`, `react-markdown`, `remark-gfm`.
- `components/Footer.tsx` — add a single `<Link href="/memos">บันทึก</Link>` entry in the existing footer columns.

---

## Task 1: Install dependencies and add type definitions

**Files:**
- Modify: `package.json`
- Create: `types/memo.ts`

- [ ] **Step 1: Install npm packages**

Run from repo root:

```bash
npm install @supabase/supabase-js react-markdown remark-gfm
```

Expected: three packages added to `dependencies` in `package.json`. No errors. Versions resolved by npm; do not pin manually.

- [ ] **Step 2: Verify install**

```bash
npm ls @supabase/supabase-js react-markdown remark-gfm
```

Expected: all three resolve with concrete versions, no `UNMET DEPENDENCY` warnings.

- [ ] **Step 3: Create `types/memo.ts`**

Write file:

~~~typescript
/**
 * One memo record as stored in the Supabase `memos` table.
 *
 * `id`, `created_at`, `updated_at` are managed by Postgres (defaults +
 * trigger). The client never writes them.
 */
export interface Memo {
  id: string;
  title: string;
  body: string;
  tags: string[];
  created_at: string; // ISO 8601 timestamp from Postgres
  updated_at: string; // ISO 8601 timestamp from Postgres
}

/**
 * Shape sent to Supabase on insert / update. Tags are normalised
 * (trimmed, lowercased, deduped) by the caller before being passed in.
 */
export interface MemoInput {
  title: string;
  body: string;
  tags: string[];
}
~~~

- [ ] **Step 4: Lint passes**

Run:

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json types/memo.ts
git commit -m "feat(memos): add deps and Memo types"
```

---

## Task 2: Supabase schema script and `.env.example`

**Files:**
- Create: `supabase/schema.sql`
- Create: `.env.example`

These are documentation/setup artifacts. They are not consumed by the build but are the source of truth for the database shape and required env vars.

- [ ] **Step 1: Create `supabase/schema.sql`**

Write file:

~~~sql
-- Memos table for the /memos page.
-- Paste this into the Supabase SQL editor to provision the schema.
-- RLS is intentionally DISABLED — see docs/superpowers/specs/2026-06-02-memos-page-design.md
-- accepted risks for the rationale.

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

alter table memos disable row level security;
~~~

- [ ] **Step 2: Create `.env.example`**

Write file:

~~~bash
# Memos page — Supabase configuration.
#
# Copy this file to `.env.local` and fill in real values. `.env.local` is
# git-ignored. If any of these three vars is missing at build time, the
# /memos page renders a "Memos disabled" notice instead of fetching.

NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Cosmetic UI gate. NOT a security boundary — the value is inlined into
# the JS bundle and visible to anyone who views source. See the design
# spec for the full set of accepted risks.
NEXT_PUBLIC_MEMO_PASSPHRASE=change-me
~~~

- [ ] **Step 3: Force-add `.env.example` (it matches `.env*` in .gitignore)**

```bash
git add -f .env.example
git add supabase/schema.sql
git status
```

Expected: `git status` shows both files staged ("new file: .env.example", "new file: supabase/schema.sql").

- [ ] **Step 4: Commit**

```bash
git commit -m "feat(memos): add Supabase schema and env example"
```

---

## Task 3: Supabase client singleton (`lib/supabase.ts`)

**Files:**
- Create: `lib/supabase.ts`

- [ ] **Step 1: Write the file**

~~~typescript
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Single Supabase client for the whole app, lazily instantiated on first
 * access. Returns `null` when env vars are missing so callers can render a
 * disabled-state UI instead of throwing.
 *
 * The anon key is intentionally embedded in the client bundle. The memos
 * table has RLS disabled — see the design spec's accepted-risk section.
 */

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let cached: SupabaseClient | null | undefined;

export function getSupabase(): SupabaseClient | null {
  if (cached !== undefined) return cached;
  if (!url || !anonKey) {
    cached = null;
    return cached;
  }
  cached = createClient(url, anonKey, {
    auth: {
      // We don't use Supabase Auth — disable session persistence so the
      // client doesn't write to localStorage unnecessarily.
      persistSession: false,
      autoRefreshToken: false,
    },
  });
  return cached;
}

export function isSupabaseConfigured(): boolean {
  return Boolean(url) && Boolean(anonKey);
}
~~~

- [ ] **Step 2: Lint passes**

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 3: Commit**

```bash
git add lib/supabase.ts
git commit -m "feat(memos): add Supabase client singleton"
```

---

## Task 4: Memo CRUD helpers (`lib/memos.ts`)

**Files:**
- Create: `lib/memos.ts`

- [ ] **Step 1: Write the file**

~~~typescript
import { getSupabase } from "./supabase";
import type { Memo, MemoInput } from "@/types/memo";

const TABLE = "memos";

/**
 * Thrown by every helper when Supabase env vars are missing. Callers should
 * gate on `isSupabaseConfigured()` first; this exists only as a defensive
 * fallback.
 */
export class MemosNotConfiguredError extends Error {
  constructor() {
    super("Supabase is not configured");
    this.name = "MemosNotConfiguredError";
  }
}

function client() {
  const c = getSupabase();
  if (!c) throw new MemosNotConfiguredError();
  return c;
}

/**
 * Normalise tags before sending to Supabase: trim each, lowercase each,
 * drop empties, dedupe while preserving first-seen order.
 */
export function normaliseTags(raw: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const t of raw) {
    const v = t.trim().toLowerCase();
    if (!v || seen.has(v)) continue;
    seen.add(v);
    out.push(v);
  }
  return out;
}

/** List all memos, newest first. */
export async function listMemos(): Promise<Memo[]> {
  const { data, error } = await client()
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Memo[];
}

/** Insert one memo. Returns the persisted row. */
export async function createMemo(input: MemoInput): Promise<Memo> {
  const payload = {
    title: input.title.trim(),
    body: input.body,
    tags: normaliseTags(input.tags),
  };
  const { data, error } = await client()
    .from(TABLE)
    .insert(payload)
    .select()
    .single();
  if (error) throw error;
  return data as Memo;
}

/** Update one memo by id. Returns the persisted row. */
export async function updateMemo(id: string, input: MemoInput): Promise<Memo> {
  const payload = {
    title: input.title.trim(),
    body: input.body,
    tags: normaliseTags(input.tags),
  };
  const { data, error } = await client()
    .from(TABLE)
    .update(payload)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data as Memo;
}

/** Delete one memo by id. */
export async function deleteMemo(id: string): Promise<void> {
  const { error } = await client().from(TABLE).delete().eq("id", id);
  if (error) throw error;
}
~~~

- [ ] **Step 2: Lint passes**

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 3: Commit**

```bash
git add lib/memos.ts
git commit -m "feat(memos): add CRUD helpers"
```

---

## Task 5: Passphrase helpers (`lib/passphrase.ts`)

**Files:**
- Create: `lib/passphrase.ts`

- [ ] **Step 1: Write the file**

~~~typescript
/**
 * Passphrase gate for the /memos editor.
 *
 * This is a UX gate, not a security boundary. The expected value is read
 * from `NEXT_PUBLIC_MEMO_PASSPHRASE`, which is inlined into the JS bundle.
 * Anyone willing to open DevTools can read it, and the Supabase anon key
 * lets them bypass the UI entirely. See the design spec for the full set
 * of accepted risks.
 *
 * Unlock state is stored in `sessionStorage` so it lasts only for the
 * current tab.
 */

const STORAGE_KEY = "memos_unlocked";
const expected = process.env.NEXT_PUBLIC_MEMO_PASSPHRASE ?? "";

export function isPassphraseConfigured(): boolean {
  return expected.length > 0;
}

/**
 * Check user input against the configured passphrase. Returns true on
 * match. Does not mutate unlock state.
 */
export function checkPassphrase(input: string): boolean {
  if (!expected) return false;
  return input === expected;
}

export function isUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function unlock(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* sessionStorage may be locked (Safari private mode etc.). Ignore. */
  }
}

export function lock(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
~~~

- [ ] **Step 2: Lint passes**

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 3: Commit**

```bash
git add lib/passphrase.ts
git commit -m "feat(memos): add passphrase helpers"
```

---

## Task 6: Markdown renderer (`components/memos/MemoMarkdown.tsx`)

**Files:**
- Create: `components/memos/MemoMarkdown.tsx`

- [ ] **Step 1: Write the file**

~~~tsx
"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Project-styled markdown renderer for memo bodies and editor previews.
 *
 * - GFM enabled (tables, strikethrough, task lists).
 * - No raw HTML passthrough (default — do not add rehype-raw).
 * - No syntax highlighting in v1.
 *
 * Heading sizes are deliberately small — memos are short notes, not
 * articles. h1 inside a memo should not compete with the page title.
 */
export default function MemoMarkdown({ source }: { source: string }) {
  return (
    <div className="memo-md text-[var(--ink)]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) => (
            <h2
              {...props}
              className="mt-4 mb-2 font-serif text-lg text-[var(--ink)]"
            />
          ),
          h2: (props) => (
            <h3
              {...props}
              className="mt-4 mb-2 font-serif text-base text-[var(--ink)]"
            />
          ),
          h3: (props) => (
            <h4
              {...props}
              className="mt-3 mb-2 text-sm font-semibold text-[var(--ink)]"
            />
          ),
          p: (props) => (
            <p
              {...props}
              className="my-2 text-[var(--ink-muted)] leading-relaxed"
            />
          ),
          ul: (props) => (
            <ul
              {...props}
              className="my-2 list-disc pl-5 text-[var(--ink-muted)]"
            />
          ),
          ol: (props) => (
            <ol
              {...props}
              className="my-2 list-decimal pl-5 text-[var(--ink-muted)]"
            />
          ),
          li: (props) => <li {...props} className="my-1" />,
          a: (props) => (
            <a
              {...props}
              className="text-[var(--ink)] underline decoration-[var(--rule-strong)] underline-offset-4 hover:decoration-[var(--ink)]"
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
          code: ({ className, children, ...rest }) => {
            const isBlock = /\blanguage-/.test(className ?? "");
            if (isBlock) {
              return (
                <code
                  className="block overflow-x-auto rounded border border-[var(--rule)] bg-[var(--bg-soft)] p-3 font-mono text-xs text-[var(--ink)]"
                  {...rest}
                >
                  {children}
                </code>
              );
            }
            return (
              <code
                className="rounded bg-[var(--bg-soft)] px-1 py-0.5 font-mono text-[0.9em] text-[var(--ink)]"
                {...rest}
              >
                {children}
              </code>
            );
          },
          pre: (props) => (
            <pre {...props} className="my-3 overflow-x-auto" />
          ),
          blockquote: (props) => (
            <blockquote
              {...props}
              className="my-3 border-l-2 border-[var(--rule-strong)] pl-3 text-[var(--ink-muted)] italic"
            />
          ),
          hr: () => (
            <hr className="my-4 border-0 border-t border-[var(--rule)]" />
          ),
          table: (props) => (
            <div className="my-3 overflow-x-auto">
              <table
                {...props}
                className="min-w-full border-collapse text-sm"
              />
            </div>
          ),
          th: (props) => (
            <th
              {...props}
              className="border-b border-[var(--rule-strong)] px-2 py-1 text-left font-semibold text-[var(--ink)]"
            />
          ),
          td: (props) => (
            <td
              {...props}
              className="border-b border-[var(--rule)] px-2 py-1 text-[var(--ink-muted)]"
            />
          ),
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
~~~

- [ ] **Step 2: Lint passes**

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 3: Commit**

```bash
git add components/memos/MemoMarkdown.tsx
git commit -m "feat(memos): add markdown renderer"
```

---

## Task 7: Disabled / empty-state components

**Files:**
- Create: `components/memos/DisabledNotice.tsx`
- Create: `components/memos/EmptyState.tsx`

- [ ] **Step 1: Create `components/memos/DisabledNotice.tsx`**

~~~tsx
/**
 * Rendered when one or more of the three required env vars
 * (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY,
 * NEXT_PUBLIC_MEMO_PASSPHRASE) is missing at build time.
 */
export default function DisabledNotice() {
  return (
    <div className="rounded border border-[var(--rule)] bg-[var(--bg-elev)] p-6">
      <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
        Memos disabled
      </div>
      <p className="mt-2 text-sm text-[var(--ink-muted)]">
        ยังไม่ได้ตั้งค่า Supabase — กรอก{" "}
        <code className="font-mono text-[var(--ink)]">.env.local</code>{" "}
        ด้วยค่าจาก <code className="font-mono text-[var(--ink)]">.env.example</code>{" "}
        แล้ว build ใหม่อีกครั้ง
      </p>
    </div>
  );
}
~~~

- [ ] **Step 2: Create `components/memos/EmptyState.tsx`**

~~~tsx
import { Plus } from "lucide-react";

interface Props {
  unlocked: boolean;
  onNew: () => void;
}

/** Shown when the memos list is empty. */
export default function EmptyState({ unlocked, onNew }: Props) {
  return (
    <div className="rounded border border-dashed border-[var(--rule-strong)] bg-[var(--bg-elev)] p-10 text-center">
      <p className="text-[var(--ink-muted)]">ยังไม่มีบันทึก</p>
      {unlocked && (
        <button
          type="button"
          onClick={onNew}
          className="mt-4 inline-flex items-center gap-1.5 rounded border border-[var(--rule-strong)] bg-[var(--bg)] px-3 py-1.5 text-sm text-[var(--ink)] hover:bg-[var(--bg-soft)]"
        >
          <Plus size={14} strokeWidth={1.7} aria-hidden />
          เพิ่มบันทึกใหม่
        </button>
      )}
    </div>
  );
}
~~~

- [ ] **Step 3: Lint passes**

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 4: Commit**

```bash
git add components/memos/DisabledNotice.tsx components/memos/EmptyState.tsx
git commit -m "feat(memos): add disabled and empty state components"
```

---

## Task 8: Tag filter (`components/memos/TagFilter.tsx`)

**Files:**
- Create: `components/memos/TagFilter.tsx`

- [ ] **Step 1: Write the file**

~~~tsx
"use client";

interface Props {
  tags: string[];
  selected: string | null;
  onSelect: (tag: string | null) => void;
}

/**
 * Horizontally scrollable chip row. Clicking a chip filters the list to
 * memos with that tag. Clicking the active chip again clears the filter.
 */
export default function TagFilter({ tags, selected, onSelect }: Props) {
  if (tags.length === 0) return null;

  return (
    <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto py-0.5">
      {tags.map((tag) => {
        const active = tag === selected;
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onSelect(active ? null : tag)}
            className={
              active
                ? "shrink-0 rounded-full border border-[var(--ink)] bg-[var(--ink)] px-2.5 py-0.5 text-xs text-[var(--bg)]"
                : "shrink-0 rounded-full border border-[var(--rule)] bg-[var(--bg-elev)] px-2.5 py-0.5 text-xs text-[var(--ink-muted)] hover:border-[var(--rule-strong)] hover:text-[var(--ink)]"
            }
          >
            #{tag}
          </button>
        );
      })}
    </div>
  );
}
~~~

- [ ] **Step 2: Lint passes**

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 3: Commit**

```bash
git add components/memos/TagFilter.tsx
git commit -m "feat(memos): add tag filter chip row"
```

---

## Task 9: Passphrase modal (`components/memos/PassphraseGate.tsx`)

**Files:**
- Create: `components/memos/PassphraseGate.tsx`

- [ ] **Step 1: Write the file**

~~~tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Lock, X } from "lucide-react";
import { checkPassphrase, unlock } from "@/lib/passphrase";

interface Props {
  open: boolean;
  onUnlocked: () => void;
  onCancel: () => void;
}

/**
 * Modal that asks for the passphrase before unlocking edit mode.
 *
 * On success: calls `unlock()` (sessionStorage), then `onUnlocked()`.
 * On wrong input: shakes + shows inline error. No rate limiting (the
 * gate is cosmetic anyway — see design spec accepted risks).
 */
export default function PassphraseGate({ open, onUnlocked, onCancel }: Props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setValue("");
      setError(false);
      setShake(false);
      // Focus on the next paint so the input is mounted.
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (checkPassphrase(value)) {
      unlock();
      onUnlocked();
      return;
    }
    setError(true);
    setShake(true);
    setTimeout(() => setShake(false), 400);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.45)] p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="passphrase-title"
    >
      <form
        onSubmit={handleSubmit}
        className={
          shake
            ? "memo-shake w-full max-w-sm rounded border border-[var(--rule)] bg-[var(--bg-elev)] p-5"
            : "w-full max-w-sm rounded border border-[var(--rule)] bg-[var(--bg-elev)] p-5"
        }
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock size={16} strokeWidth={1.7} aria-hidden />
            <h2
              id="passphrase-title"
              className="font-serif text-base text-[var(--ink)]"
            >
              ปลดล็อคเพื่อแก้ไข
            </h2>
          </div>
          <button
            type="button"
            onClick={onCancel}
            className="rounded p-1 text-[var(--ink-faint)] hover:text-[var(--ink)]"
            aria-label="ปิด"
          >
            <X size={16} strokeWidth={1.7} aria-hidden />
          </button>
        </div>

        <input
          ref={inputRef}
          type="password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError(false);
          }}
          autoComplete="off"
          className="mt-4 w-full rounded border border-[var(--rule-strong)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--ink)] outline-none focus:border-[var(--ink)]"
          placeholder="passphrase"
        />
        {error && (
          <p className="mt-2 text-xs text-[var(--ink-muted)]">
            รหัสไม่ถูกต้อง
          </p>
        )}

        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="rounded border border-[var(--rule)] px-3 py-1.5 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            ยกเลิก
          </button>
          <button
            type="submit"
            className="rounded border border-[var(--ink)] bg-[var(--ink)] px-3 py-1.5 text-sm text-[var(--bg)] hover:opacity-90"
          >
            ปลดล็อค
          </button>
        </div>
      </form>
    </div>
  );
}
~~~

- [ ] **Step 2: Add the shake keyframe to `app/globals.css`**

Append to the bottom of `app/globals.css`:

~~~css
/* ---------------------------------------------------------------------------
   Memo passphrase gate — wrong-input shake animation.
   --------------------------------------------------------------------------- */
@keyframes memo-shake {
  0%, 100% { transform: translateX(0); }
  20%      { transform: translateX(-6px); }
  40%      { transform: translateX(6px); }
  60%      { transform: translateX(-4px); }
  80%      { transform: translateX(4px); }
}
.memo-shake {
  animation: memo-shake 0.4s ease-in-out;
}
~~~

- [ ] **Step 3: Lint passes**

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 4: Commit**

```bash
git add components/memos/PassphraseGate.tsx app/globals.css
git commit -m "feat(memos): add passphrase gate modal"
```

---

## Task 10: Memo card (`components/memos/MemoCard.tsx`)

**Files:**
- Create: `components/memos/MemoCard.tsx`

- [ ] **Step 1: Write the file**

~~~tsx
"use client";

import { Pencil, Trash2 } from "lucide-react";
import type { Memo } from "@/types/memo";
import MemoMarkdown from "./MemoMarkdown";

interface Props {
  memo: Memo;
  unlocked: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

function formatTimestamp(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function MemoCard({ memo, unlocked, onEdit, onDelete }: Props) {
  return (
    <article className="border-b border-[var(--rule)] py-6 first:pt-0 last:border-b-0">
      <header className="flex items-baseline justify-between gap-3">
        <h2 className="font-serif text-xl text-[var(--ink)]">{memo.title}</h2>
        <span className="shrink-0 font-mono text-xs tabular-nums text-[var(--ink-faint)]">
          {formatTimestamp(memo.updated_at)}
        </span>
      </header>

      {memo.body.trim().length > 0 && (
        <div className="mt-2">
          <MemoMarkdown source={memo.body} />
        </div>
      )}

      {(memo.tags.length > 0 || unlocked) && (
        <footer className="mt-3 flex items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 flex-wrap gap-1.5">
            {memo.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--rule)] bg-[var(--bg-soft)] px-2 py-0.5 text-xs text-[var(--ink-muted)]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {unlocked && (
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={onEdit}
                className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs text-[var(--ink-muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]"
              >
                <Pencil size={12} strokeWidth={1.7} aria-hidden />
                แก้ไข
              </button>
              <button
                type="button"
                onClick={onDelete}
                className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs text-[var(--ink-muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]"
              >
                <Trash2 size={12} strokeWidth={1.7} aria-hidden />
                ลบ
              </button>
            </div>
          )}
        </footer>
      )}
    </article>
  );
}
~~~

- [ ] **Step 2: Lint passes**

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 3: Commit**

```bash
git add components/memos/MemoCard.tsx
git commit -m "feat(memos): add memo card"
```

---

## Task 11: Memo editor (`components/memos/MemoEditor.tsx`)

**Files:**
- Create: `components/memos/MemoEditor.tsx`

- [ ] **Step 1: Write the file**

~~~tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { Memo, MemoInput } from "@/types/memo";
import MemoMarkdown from "./MemoMarkdown";

interface Props {
  open: boolean;
  initial: Memo | null; // null = create new, Memo = edit existing
  saving: boolean;
  errorMessage: string | null;
  onCancel: () => void;
  onSave: (input: MemoInput) => void;
}

/**
 * Modal-style editor for creating or editing one memo.
 *
 * Layout:
 *   - Title input at top
 *   - Body textarea (left) + live markdown preview (right) on `sm:`+
 *   - Body stacked on mobile with a Preview toggle
 *   - Tags input (comma-separated) below body
 *   - Cancel / Save buttons
 */
export default function MemoEditor({
  open,
  initial,
  saving,
  errorMessage,
  onCancel,
  onSave,
}: Props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tagsRaw, setTagsRaw] = useState("");
  const [mobilePreview, setMobilePreview] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTitle(initial?.title ?? "");
      setBody(initial?.body ?? "");
      setTagsRaw((initial?.tags ?? []).join(", "));
      setMobilePreview(false);
      requestAnimationFrame(() => titleRef.current?.focus());
    }
  }, [open, initial]);

  if (!open) return null;

  const trimmedTitle = title.trim();
  const canSave = trimmedTitle.length > 0 && !saving;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSave) return;
    onSave({
      title: trimmedTitle,
      body,
      tags: tagsRaw.split(",").map((t) => t.trim()).filter(Boolean),
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-[rgba(0,0,0,0.45)] p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="memo-editor-title"
    >
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-3xl flex-col overflow-hidden border border-[var(--rule)] bg-[var(--bg-elev)] sm:rounded sm:max-h-[90vh]"
      >
        <header className="flex items-center justify-between border-b border-[var(--rule)] px-5 py-3">
          <h2
            id="memo-editor-title"
            className="font-serif text-base text-[var(--ink)]"
          >
            {initial ? "แก้ไขบันทึก" : "บันทึกใหม่"}
          </h2>
          <button
            type="button"
            onClick={onCancel}
            className="rounded p-1 text-[var(--ink-faint)] hover:text-[var(--ink)]"
            aria-label="ปิด"
          >
            <X size={16} strokeWidth={1.7} aria-hidden />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              หัวเรื่อง
            </span>
            <input
              ref={titleRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded border border-[var(--rule-strong)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--ink)] outline-none focus:border-[var(--ink)]"
              placeholder="title"
            />
          </label>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                เนื้อหา (Markdown)
              </span>
              <button
                type="button"
                onClick={() => setMobilePreview((v) => !v)}
                className="rounded border border-[var(--rule)] px-2 py-0.5 text-xs text-[var(--ink-muted)] hover:text-[var(--ink)] sm:hidden"
              >
                {mobilePreview ? "แก้ไข" : "ดูตัวอย่าง"}
              </button>
            </div>

            <div className="mt-1 grid gap-3 sm:grid-cols-2">
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={12}
                className={
                  mobilePreview
                    ? "hidden h-72 w-full resize-y rounded border border-[var(--rule-strong)] bg-[var(--bg)] p-3 font-mono text-sm text-[var(--ink)] outline-none focus:border-[var(--ink)] sm:block"
                    : "h-72 w-full resize-y rounded border border-[var(--rule-strong)] bg-[var(--bg)] p-3 font-mono text-sm text-[var(--ink)] outline-none focus:border-[var(--ink)]"
                }
                placeholder="# heading&#10;- bullet&#10;**bold**"
              />
              <div
                className={
                  mobilePreview
                    ? "min-h-72 rounded border border-[var(--rule)] bg-[var(--bg)] p-3"
                    : "hidden min-h-72 rounded border border-[var(--rule)] bg-[var(--bg)] p-3 sm:block"
                }
                aria-label="Preview"
              >
                {body.trim().length > 0 ? (
                  <MemoMarkdown source={body} />
                ) : (
                  <p className="text-sm text-[var(--ink-faint)]">
                    ตัวอย่างจะปรากฏที่นี่
                  </p>
                )}
              </div>
            </div>
          </div>

          <label className="mt-4 block">
            <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              แท็ก (คั่นด้วยคอมมา)
            </span>
            <input
              value={tagsRaw}
              onChange={(e) => setTagsRaw(e.target.value)}
              className="mt-1 w-full rounded border border-[var(--rule-strong)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--ink)] outline-none focus:border-[var(--ink)]"
              placeholder="iam, networking, exam-tip"
            />
          </label>

          {errorMessage && (
            <p className="mt-3 rounded border border-[var(--rule-strong)] bg-[var(--bg-soft)] p-2 text-xs text-[var(--ink-muted)]">
              {errorMessage}
            </p>
          )}
        </div>

        <footer className="flex justify-end gap-2 border-t border-[var(--rule)] px-5 py-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded border border-[var(--rule)] px-3 py-1.5 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            ยกเลิก
          </button>
          <button
            type="submit"
            disabled={!canSave}
            className="rounded border border-[var(--ink)] bg-[var(--ink)] px-3 py-1.5 text-sm text-[var(--bg)] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "กำลังบันทึก..." : "บันทึก"}
          </button>
        </footer>
      </form>
    </div>
  );
}
~~~

- [ ] **Step 2: Lint passes**

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 3: Commit**

```bash
git add components/memos/MemoEditor.tsx
git commit -m "feat(memos): add memo editor modal"
```

---

## Task 12: Memo list (`components/memos/MemoList.tsx`)

**Files:**
- Create: `components/memos/MemoList.tsx`

- [ ] **Step 1: Write the file**

~~~tsx
"use client";

import { useMemo } from "react";
import type { Memo } from "@/types/memo";
import MemoCard from "./MemoCard";
import TagFilter from "./TagFilter";

interface Props {
  memos: Memo[];
  unlocked: boolean;
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  onEdit: (memo: Memo) => void;
  onDelete: (memo: Memo) => void;
}

export default function MemoList({
  memos,
  unlocked,
  selectedTag,
  onSelectTag,
  onEdit,
  onDelete,
}: Props) {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    for (const m of memos) for (const t of m.tags) set.add(t);
    return Array.from(set).sort();
  }, [memos]);

  const visible = useMemo(() => {
    if (!selectedTag) return memos;
    return memos.filter((m) => m.tags.includes(selectedTag));
  }, [memos, selectedTag]);

  return (
    <div>
      {allTags.length > 0 && (
        <div className="mb-2">
          <TagFilter
            tags={allTags}
            selected={selectedTag}
            onSelect={onSelectTag}
          />
        </div>
      )}

      {visible.length === 0 ? (
        <p className="py-10 text-center text-sm text-[var(--ink-muted)]">
          ไม่มีบันทึกที่ตรงกับแท็กนี้
        </p>
      ) : (
        <div>
          {visible.map((memo) => (
            <MemoCard
              key={memo.id}
              memo={memo}
              unlocked={unlocked}
              onEdit={() => onEdit(memo)}
              onDelete={() => onDelete(memo)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
~~~

- [ ] **Step 2: Lint passes**

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 3: Commit**

```bash
git add components/memos/MemoList.tsx
git commit -m "feat(memos): add memo list with tag filter"
```

---

## Task 13: Top-level page client (`components/memos/MemosPageClient.tsx`)

**Files:**
- Create: `components/memos/MemosPageClient.tsx`

- [ ] **Step 1: Write the file**

~~~tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import { Plus, LockOpen } from "lucide-react";
import type { Memo, MemoInput } from "@/types/memo";
import { isSupabaseConfigured } from "@/lib/supabase";
import {
  isPassphraseConfigured,
  isUnlocked as readUnlocked,
  lock as lockSession,
} from "@/lib/passphrase";
import {
  listMemos,
  createMemo,
  updateMemo,
  deleteMemo,
} from "@/lib/memos";
import MemoList from "./MemoList";
import MemoEditor from "./MemoEditor";
import PassphraseGate from "./PassphraseGate";
import EmptyState from "./EmptyState";
import DisabledNotice from "./DisabledNotice";

type EditTarget =
  | { kind: "create" }
  | { kind: "edit"; memo: Memo }
  | null;

type PendingAction =
  | { kind: "create" }
  | { kind: "edit"; memo: Memo }
  | { kind: "delete"; memo: Memo }
  | null;

export default function MemosPageClient() {
  const configured = isSupabaseConfigured() && isPassphraseConfigured();

  const [memos, setMemos] = useState<Memo[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [editTarget, setEditTarget] = useState<EditTarget>(null);
  const [saving, setSaving] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);
  const [pendingAction, setPendingAction] = useState<PendingAction>(null);

  // Sync unlock flag from sessionStorage on mount.
  useEffect(() => {
    setUnlocked(readUnlocked());
  }, []);

  const refresh = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      const data = await listMemos();
      setMemos(data);
    } catch (e) {
      setLoadError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!configured) {
      setLoading(false);
      return;
    }
    void refresh();
  }, [configured, refresh]);

  // Run a pending action once unlock succeeds.
  const runPendingAction = useCallback(
    async (action: PendingAction) => {
      if (!action) return;
      if (action.kind === "create") {
        setEditTarget({ kind: "create" });
      } else if (action.kind === "edit") {
        setEditTarget({ kind: "edit", memo: action.memo });
      } else if (action.kind === "delete") {
        const ok = window.confirm(`ลบ "${action.memo.title}" ?`);
        if (!ok) return;
        const prev = memos;
        setMemos((cur) => cur.filter((m) => m.id !== action.memo.id));
        try {
          await deleteMemo(action.memo.id);
        } catch (e) {
          setMemos(prev);
          window.alert(
            "ลบไม่สำเร็จ: " + (e instanceof Error ? e.message : "unknown"),
          );
        }
      }
    },
    [memos],
  );

  function gate(action: NonNullable<PendingAction>) {
    if (unlocked) {
      void runPendingAction(action);
    } else {
      setPendingAction(action);
    }
  }

  function handleUnlocked() {
    setUnlocked(true);
    const action = pendingAction;
    setPendingAction(null);
    void runPendingAction(action);
  }

  function handleCancelGate() {
    setPendingAction(null);
  }

  function handleLock() {
    lockSession();
    setUnlocked(false);
  }

  async function handleSave(input: MemoInput) {
    setSaving(true);
    setEditError(null);
    try {
      if (editTarget?.kind === "create") {
        const created = await createMemo(input);
        setMemos((cur) => [created, ...cur]);
      } else if (editTarget?.kind === "edit") {
        const id = editTarget.memo.id;
        const updated = await updateMemo(id, input);
        setMemos((cur) => {
          const next = cur.map((m) => (m.id === id ? updated : m));
          // Re-sort newest first by created_at (created_at is unchanged on
          // edit, so order is stable, but safe to re-sort).
          next.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
          return next;
        });
      }
      setEditTarget(null);
    } catch (e) {
      setEditError(e instanceof Error ? e.message : "บันทึกไม่สำเร็จ");
    } finally {
      setSaving(false);
    }
  }

  if (!configured) {
    return <DisabledNotice />;
  }

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => gate({ kind: "create" })}
          className="inline-flex items-center gap-1.5 rounded border border-[var(--rule-strong)] bg-[var(--bg-elev)] px-3 py-1.5 text-sm text-[var(--ink)] hover:bg-[var(--bg-soft)]"
        >
          <Plus size={14} strokeWidth={1.7} aria-hidden />
          บันทึกใหม่
        </button>

        <div className="min-w-0 flex-1">
          {/* tag filter chips render inside MemoList; this spacer keeps
              the toolbar aligned when the list mounts later */}
        </div>

        {unlocked && (
          <button
            type="button"
            onClick={handleLock}
            className="inline-flex items-center gap-1.5 rounded border border-[var(--rule)] px-3 py-1.5 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
            aria-label="Lock"
          >
            <LockOpen size={14} strokeWidth={1.7} aria-hidden />
            ล็อค
          </button>
        )}
      </div>

      {loading ? (
        <p className="py-10 text-center text-sm text-[var(--ink-muted)]">
          กำลังโหลด...
        </p>
      ) : loadError ? (
        <div className="rounded border border-[var(--rule-strong)] bg-[var(--bg-soft)] p-5">
          <p className="text-sm text-[var(--ink)]">โหลดบันทึกไม่สำเร็จ</p>
          <p className="mt-1 text-xs text-[var(--ink-muted)]">{loadError}</p>
          <button
            type="button"
            onClick={() => void refresh()}
            className="mt-3 rounded border border-[var(--rule-strong)] px-3 py-1 text-xs text-[var(--ink)] hover:bg-[var(--bg)]"
          >
            ลองใหม่
          </button>
        </div>
      ) : memos.length === 0 ? (
        <EmptyState
          unlocked={unlocked}
          onNew={() => gate({ kind: "create" })}
        />
      ) : (
        <MemoList
          memos={memos}
          unlocked={unlocked}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
          onEdit={(memo) => gate({ kind: "edit", memo })}
          onDelete={(memo) => gate({ kind: "delete", memo })}
        />
      )}

      <PassphraseGate
        open={pendingAction !== null}
        onUnlocked={handleUnlocked}
        onCancel={handleCancelGate}
      />

      <MemoEditor
        open={editTarget !== null}
        initial={editTarget?.kind === "edit" ? editTarget.memo : null}
        saving={saving}
        errorMessage={editError}
        onCancel={() => {
          setEditTarget(null);
          setEditError(null);
        }}
        onSave={handleSave}
      />
    </>
  );
}
~~~

- [ ] **Step 2: Lint passes**

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 3: Commit**

```bash
git add components/memos/MemosPageClient.tsx
git commit -m "feat(memos): add top-level page client"
```

---

## Task 14: Page route (`app/memos/page.tsx`) and seed file

**Files:**
- Create: `app/memos/page.tsx`
- Create: `data/memos-seed.ts`

- [ ] **Step 1: Create `data/memos-seed.ts`**

~~~typescript
import type { Memo } from "@/types/memo";

/**
 * Manual offline snapshot of the Supabase `memos` table.
 *
 * The site does NOT read from this file at runtime. It exists so the user
 * can paste an `INSERT` script back into the Supabase SQL editor if the
 * table is wiped (accepted risk in the design spec).
 *
 * Update by running a Supabase export and replacing the array below.
 */
export const memosSeed: Memo[] = [];
~~~

- [ ] **Step 2: Create `app/memos/page.tsx`**

~~~tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MemosPageClient from "@/components/memos/MemosPageClient";

export const metadata: Metadata = {
  title: "Memos · บันทึกย่อ — AWS CLF-C02",
  description: "บันทึกส่วนตัวระหว่างทบทวนสอบ AWS Cloud Practitioner",
};

export default function MemosPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 pt-16 pb-8 sm:px-6 sm:pt-20">
          <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
            Memos · บันทึกส่วนตัว
          </div>
          <h1 className="mt-3 font-serif text-3xl leading-[1.15] text-[var(--ink)] sm:text-[2.5rem]">
            บันทึกย่อ
            <span className="block text-[var(--ink-muted)]">
              — โน้ตส่วนตัวระหว่างทบทวน
            </span>
          </h1>
          <p className="mt-5 max-w-[60ch] text-[var(--ink-muted)]">
            พื้นที่จดเทคนิคและจุดที่ต้องจำสำหรับสอบ CLF-C02 อ่านได้ทุกคน
            แต่การเพิ่ม/แก้ไข/ลบต้องใส่รหัสก่อน
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
          <MemosPageClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
~~~

- [ ] **Step 3: Lint passes**

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 4: Commit**

```bash
git add app/memos/page.tsx data/memos-seed.ts
git commit -m "feat(memos): add /memos route and seed file"
```

---

## Task 15: Footer link

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Add a "Memos" link**

Open `components/Footer.tsx`. Locate the third footer column (the one with the heading "อ้างอิง"). The footer currently has three columns: about, topics, references. Add a fourth small section *inside the references column* (to avoid changing the grid columns and breaking layout). Specifically, after the closing `</p>` of the "อ้างอิง" paragraph and before its closing `</div>`, append:

~~~tsx
          <div className="mt-6">
            <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              อื่น ๆ
            </div>
            <ul className="mt-2 text-sm">
              <li>
                <Link
                  href="/memos"
                  className="text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                >
                  บันทึก
                </Link>
              </li>
            </ul>
          </div>
~~~

- [ ] **Step 2: Lint passes**

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat(memos): add footer link to /memos"
```

---

## Task 16: Build verification

**Files:** none modified — verification only.

- [ ] **Step 1: Build the site without env vars set**

From the repo root, ensure no `.env.local` is present (or that the three vars are unset):

```bash
unset NEXT_PUBLIC_SUPABASE_URL NEXT_PUBLIC_SUPABASE_ANON_KEY NEXT_PUBLIC_MEMO_PASSPHRASE
npm run build
```

Expected: build exits 0, output mentions **25 routes** (homepage + 20 topics + 3 system pages + new `/memos`).

- [ ] **Step 2: Inspect `out/memos/index.html`**

```bash
ls out/memos/
```

Expected: directory contains `index.html`. Open the file in a browser via `npx serve out` or any static server; the `/memos` page should display the "Memos disabled" notice (because env vars are unset).

- [ ] **Step 3: Build with env vars set**

Create `.env.local` with placeholder values that resemble real ones:

```bash
cat > .env.local <<'EOF'
NEXT_PUBLIC_SUPABASE_URL=https://example.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-anon-key
NEXT_PUBLIC_MEMO_PASSPHRASE=test123
EOF

npm run build
```

Expected: build exits 0. Open `/memos` — page now attempts a fetch (which will fail against `example.supabase.co`); the loading state should appear briefly, followed by an inline error block with a Retry button. This confirms the env-var detection logic works.

- [ ] **Step 4: Clean up the test `.env.local`**

```bash
rm .env.local
```

(The user will create their real `.env.local` from `.env.example` separately.)

- [ ] **Step 5: Final lint pass**

```bash
npm run lint
```

Expected: `0 errors`.

- [ ] **Step 6: Manual smoke test (only meaningful with a real Supabase project)**

When the user has a real Supabase project:
1. Run `supabase/schema.sql` in the Supabase SQL editor.
2. Fill `.env.local` with real credentials.
3. `npm run dev`.
4. Visit `http://localhost:3000/memos`.
5. Confirm: empty-state visible, `+ New memo` opens passphrase modal, correct passphrase unlocks, can create / edit / delete a memo, tag filter works, lock button re-locks.
6. Toggle theme (light/dark/system), font size (S/M/L) — both apply on `/memos`.
7. Resize to mobile — editor stacks; preview toggle works.

This step does not have a code change to commit — it is a sign-off step.

---

## Self-review notes

This plan was self-reviewed against the spec at `docs/superpowers/specs/2026-06-02-memos-page-design.md`:

- All 14 file additions in the spec's § 5 are covered by Tasks 1–15.
- All accepted risks (§ 2) are surfaced in code comments where relevant.
- All env vars (§ 6) are documented in `.env.example` (Task 2) and read consistently across `lib/supabase.ts` and `lib/passphrase.ts`.
- All UI requirements (§ 8) are implemented in Tasks 7–14, including the Tailwind v4 `var(...)` reminder (followed throughout — no bare `--` tokens).
- All error-handling requirements (§ 10) are implemented: disabled notice (Task 7), loading + retry on fetch error (Task 13), shake on wrong passphrase (Task 9), optimistic-revert on delete (Task 13), title-empty disabled save (Task 11).
- All testing/verification items (§ 11) are covered by Task 16.
- Function names are consistent across tasks: `listMemos`, `createMemo`, `updateMemo`, `deleteMemo`, `normaliseTags`, `getSupabase`, `isSupabaseConfigured`, `isPassphraseConfigured`, `checkPassphrase`, `isUnlocked`, `unlock`, `lock`. No mismatches.

---

## Execution

The plan is complete. Two execution options:

1. **Subagent-Driven (recommended)** — fresh subagent per task with review between tasks.
2. **Inline Execution** — run tasks here in order with checkpoints for review.

The user invoked build mode after a `do` instruction, so execution should proceed inline unless the user redirects.
