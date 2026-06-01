# ARCHITECTURE.md — site internals

Reference for anyone changing components, hooks, build, or anything that's not a topic file. Topic-content authoring is in [`AUTHORING.md`](./AUTHORING.md); visual design language is in [`../UI-style.md`](../UI-style.md).

---

## Repo layout

The Next.js project lives at the **repository root** — there is no `next-app/` subdirectory. Run all commands (`npm run dev`, `npm run lint`, `npm run build`) from the repo root.

```
.
├── app/
│   ├── layout.tsx                 ← root layout (5 fonts, theme + nav-layout + font-size scripts, metadata)
│   ├── page.tsx                   ← homepage (editorial hero + indexed topic list)
│   ├── globals.css                ← Tailwind + theme tokens (light/dark via [data-theme]) + typography + strong highlight + print
│   └── topics/
│       └── [slug]/
│           └── page.tsx           ← dynamic topic page (server, sets --shl-light/--shl-dark per article)
├── components/
│   ├── Navbar.tsx                 ← server, sticky brand row + Stephane-order row + Category-grouped rows + breadcrumb
│   ├── StephaneNavRow.tsx         ← server, 1-row flex-wrap, course-section number prefix
│   ├── CategoryNavRows.tsx        ← server, 6 rows grouped by AWS category, fixed-width label column
│   ├── SearchBox.tsx              ← client, command-palette modal — trigger pill in navbar + centered <dialog>; ⌘K shortcut
│   ├── SettingsPopover.tsx        ← client, anchored menu wrapping ThemeToggle + FontSizeToggle
│   ├── ThemeToggle.tsx            ← client, light/dark/system, useSyncExternalStore + 'theme-change' event
│   ├── FontSizeToggle.tsx         ← client, S/M/L, useSyncExternalStore + 'font-size-change' event
│   ├── HomepageTopicList.tsx      ← server, indexed list grouped by category, embeds <HomepageProgress>
│   ├── HomepageProgress.tsx       ← client, cached snapshot getter to avoid infinite render in useSyncExternalStore
│   ├── TopicSection.tsx           ← server, h2 in accent + section-number chip, dot bullets in accent, grid cards as filled boxes, callouts with lucide icons
│   ├── TopicTOC.tsx               ← client, sticky right-rail TOC + IntersectionObserver
│   ├── TopicNav.tsx               ← server, prev/next links in Stephane order, rendered after Quiz
│   ├── QuizSection.tsx            ← client, interactive one-at-a-time quiz; samples 10 random questions per session via useSyncExternalStore (hydration-safe)
│   ├── QuizPrintBlock.tsx         ← server, hidden on screen, reveals all ~25 questions + answers in print
│   ├── PrintButton.tsx            ← client, calls window.print()
│   ├── ReadingProgress.tsx        ← client, fixed 2px solid bar tinted by topic accent
│   ├── Icon.tsx                   ← lucide-react re-exports + <CategoryIcon> wrapper
│   └── Footer.tsx                 ← server, 3-column editorial (about / topics by category / Udemy credit)
├── data/
│   ├── index.ts                   ← topic registry (single source of truth for the 20 topics in Stephane order)
│   └── topics/
│       └── <20 *.ts files>        ← one TopicData per topic; see AUTHORING.md
├── lib/
│   ├── categoryAccents.ts         ← 6-category accent system (text/tint/border/code/bullet/numberBg/highlight tokens) — UI reads from here
│   ├── accentClasses.ts           ← legacy 18-color map, kept only so Tailwind v4 JIT scanner has prior class strings on file
│   ├── progress.ts                ← localStorage helpers (quiz progress, font size) + custom event dispatch
│   ├── navLayout.ts               ← localStorage helper for nav-layout preference (current build shows both layouts; helper retained for future switching)
│   ├── readingTime.ts             ← word count + min/page estimate (Thai+English aware)
│   ├── extractTags.ts             ← derive editorial-style tags from keyPoints[0] for the homepage list
│   ├── searchIndex.ts             ← builds flat SearchEntry[] (topics + sections; no quiz) at module load with stripHtml + normalize helpers
│   ├── search.ts                  ← token-based scorer; title-hit / word-boundary / exact-phrase boosts; Stephane-order tie-break
│   ├── highlightMatch.tsx         ← wraps matched query tokens in <mark> with regex-escape + longest-first sort
│   └── themeScript.ts             ← inline blocking scripts (themeScript, fontSizeScript, navLayoutScript) injected before paint
├── types/
│   └── topic.ts                   ← shared TypeScript interfaces (TopicData, Section, QuizQuestion, etc.)
├── public/                        ← static assets served as-is
├── out/                           ← static export output (created by `npm run build`)
├── next.config.ts                 ← `output: "export"` for static HTML export
├── package.json
└── tsconfig.json
```

There are no legacy `*.html` files — the site is generated entirely from the React/TypeScript sources above.

---

## Routing

- App Router with TypeScript.
- Homepage at `/` (`app/page.tsx`).
- Topic pages at `/topics/<slug>` (`app/topics/[slug]/page.tsx`, dynamic).
- Static export via `output: "export"` in `next.config.ts`.
- 24 pages total: 1 home + 20 topics + 3 system (`_not-found`, etc.).
- Topic slugs come from `data/index.ts`'s `topics` array; `generateStaticParams()` reads from there.

---

## Theme system

Three tokens drive the look:

- **Theme** — `light` / `dark` / `system` — written to `<html data-theme>` by `themeScript` before paint, and to localStorage by `ThemeToggle`.
- **Font size** — `sm` / `md` / `lg` — class on `<body>` (`font-sm` / `font-md` / `font-lg`); server renders `font-md` so React hydrates cleanly.
- **Nav layout preference** — currently both layouts render simultaneously, but the `nav_layout` localStorage key + `navLayoutScript` are still wired in for future switching.

`<body suppressHydrationWarning>` and `<html suppressHydrationWarning>` are set so React tolerates the inline scripts mutating attributes/classes before hydration.

---

## Navbar

`components/Navbar.tsx` is a server component composed of three rows + an optional breadcrumb:

1. **Sticky brand strip** — logo "AWS CLF-C02 บันทึกย่อ" (no emoji) + `<SettingsPopover>` (theme + font-size). Only this row is sticky.
2. **`<StephaneNavRow>`** under a `ตามคอร์ส` label — every topic in course order, with a `01 02 ...` mono prefix.
3. **`<CategoryNavRows>`** under a `ตามหมวด` label — six rows, one per AWS category, each with a fixed-width label column + flex-wrapped topic chips.
4. **Breadcrumb** (topic pages only) — `Topics › Category › 03 EC2` with a chevron between segments.

Active topic styling in both layouts: `font-semibold` + accent text + accent tint background + accent ring. Inactive topics use muted ink with a hover swap.

---

## Category accent system

`lib/categoryAccents.ts` maps each of the 6 AWS categories to a literal Tailwind class set + a hex value + marker-highlight RGBA pair. UI components import `getCategoryAccent(slug, category)` and read class strings directly — JIT-safe.

The 6 categories and their accents:

| Category key | Topics | Accent |
|---|---|---|
| `compute` | ec2, elb-asg, other-compute | indigo |
| `storage` | ec2-storage, s3 | amber |
| `networking` | vpc, global-infrastructure, cloud-integration | violet |
| `database` | databases, machine-learning | emerald |
| `security` | iam, security, advanced-identity | rose |
| `management` | cloud-concepts, deployment, cloud-monitoring, account-management, other-services, well-architected, exam-tips | sky |

To change a topic's category, edit the `slugOverrides` map in `lib/categoryAccents.ts`. To recolour an entire category, edit the corresponding entry in the `accents` object — keep all token keys present so consuming components keep working.

The legacy `lib/accentClasses.ts` 18-colour map is no longer read by UI; it's kept only so the Tailwind v4 JIT scanner has prior class strings on file in case a future change wants to reintroduce them.

---

## Quiz system

Each topic has a pool of ~25 English questions; the UI samples 10 random per session. Authoring conventions are in [`AUTHORING.md`](./AUTHORING.md). The internals below are about why the implementation looks the way it does.

### Hydration-safe randomization

Because the site is statically exported, every topic page is server-rendered at build time. The quiz randomization must NOT cause a server/client HTML mismatch on hydration. `QuizSection.tsx` solves this with `useSyncExternalStore`:

```tsx
// True after mount on the client; false during SSR + first client paint.
const isMounted = useSyncExternalStore(
  subscribeNoop,
  () => true,    // client snapshot
  () => false,   // server snapshot
);

// Saved progress: null during SSR, populated from localStorage after mount.
// Subscribes to 'quiz-progress-change' + 'storage' for live updates.
const previousProgress = useSyncExternalStore<QuizProgress | null>(
  subscribeProgress,
  () => readProgress(slug),
  () => null,
);

const activeQuestions = useMemo(() => {
  if (!isMounted) return deterministicSample(questions, 10);  // first 10
  return sampleQuestions(questions, 10);                       // random 10
}, [isMounted, questions, retryToken]);
```

Why it works:

1. SSR + first client render → `isMounted=false` → both produce `questions.slice(0, 10)` → byte-identical HTML, no mismatch.
2. After hydration commits, `useSyncExternalStore` re-reads → `isMounted=true` → `useMemo` re-runs with `Math.random()` → swaps in a fresh shuffle.
3. Retry button bumps `retryToken` → `useMemo` re-runs → fresh shuffle.

### Project-wide React lint rules influencing this design

- `react-hooks/set-state-in-effect` — disallows `setState` calls inside `useEffect` for client-only initialization. Use derived state (`useMemo` + `useSyncExternalStore`) instead.
- `react-hooks/refs` — disallows reading `ref.current` during render. Use `useState` + `useMemo` instead of caching the shuffle in a `useRef`.

This pattern (mounted boolean via `useSyncExternalStore`) is the canonical way to gate any client-only / non-deterministic / browser-API-dependent rendering in this codebase. The same pattern is used by `HomepageProgress.tsx` for reading saved scores.

### Print rendering

`<QuizPrintBlock>` is a server component that renders the entire pool of questions + answers + explanations, hidden on screen via `hidden print:block` and revealed only when printing. Useful for offline study.

---

## Tailwind v4 — CSS-variable arbitrary values

When referencing CSS custom properties from utility classes use the `var(...)` form, not bare double-dashes:

- ✅ `bg-[var(--bg-elev)]`, `text-[var(--ink)]`, `border-[var(--rule)]`
- ❌ `bg-[--bg-elev]` — Tailwind v4 emits `background-color: --bg-elev` which is not a valid CSS value, so the property silently fails.

The custom dark variant is declared as `@custom-variant dark (&:where([data-theme="dark"] *, [data-theme="dark"]))` in `globals.css`, which lets `dark:` prefixes target the manual theme attribute set by JS instead of the OS preference.

---

## Static export

- `output: "export"` in `next.config.ts` produces plain HTML/CSS/JS in `out/`.
- Deployable to any static host (S3 + CloudFront, Netlify, Vercel static, GitHub Pages).
- No SSR at runtime, no API routes.

---

## Build & verify

Run from the repository root:

```bash
npm run lint     # ESLint check (must pass with 0 errors)
npm run build    # TypeScript compile + static export to out/
npm run dev      # Dev server at localhost:3000
```

Verify after a change:

- `npm run build` completes without errors and emits 24 static pages (homepage + 20 topic pages + 3 system pages).
- All 20 topic pages render at `/topics/<slug>`.
- Navbar shows both Stephane-order row and Category-grouped rows on every page; the active topic is highlighted in both.
- HTML tags inside content (e.g. `<strong>`) render properly — they should NOT appear as literal text.
- Inside topic articles, `<strong>` shows a soft marker-pen highlight in the topic's category accent (light + dark).
- Quiz is interactive (click answers, see explanation, score saves to localStorage); each visit / retry shows a different random 10-question subset, with no hydration warnings in the browser console.
- Theme toggle (Light / Dark / System) and font-size toggle (S / M / L) both persist across reloads with no FOUC and no hydration warnings.
- Reading progress bar tints to the topic's category accent.
- Print preview hides nav/footer/TOC/settings, forces light theme, and reveals every quiz question + answer + explanation.

---

## Adding a new topic — code-side checklist

The content side is in [`AUTHORING.md`](./AUTHORING.md#adding-a-new-topic). The code side:

1. Create `data/topics/<slug>.ts` exporting a `TopicData`.
2. Import it in `data/index.ts` and add to the `topics` array (Stephane order).
3. Add a `slugOverrides` entry in `lib/categoryAccents.ts` if the category mapping isn't obvious from the `category` string.

No need to touch pages, components, or the navbar — they all read from the registry.
