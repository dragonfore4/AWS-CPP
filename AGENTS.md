<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


# AGENTS.md

AWS Cloud Practitioner (CLF-C02) study notes — Next.js static site, structured by **Stephane Maarek's Ultimate AWS Cloud Practitioner course on Udemy**.

## Stack

- **Next.js 16** with App Router + TypeScript
- **Tailwind CSS v4** via npm (postcss plugin, `@import "tailwindcss"`)
- **Static export** (`output: "export"` in next.config.ts)
- Fonts: Inter + Noto Sans Thai (body), IBM Plex Serif + Noto Serif Thai (h1/h2), Geist Mono (code)
- Icons: `lucide-react` (outline, stroke 1.6–1.9)
- Language: Thai + English mixed content
- Themes: light + dark + system, switchable via popover, persisted in localStorage
- Palette: `stone` (warm neutral) base + 6 category accents (sky, rose, indigo, amber, violet, emerald)
- No backend, no API routes — pure static HTML output

## Project location

The Next.js project lives at the repository root — there is no `next-app/` subdirectory. Run all commands (`npm run dev`, `npm run lint`, `npm run build`) from the repo root.

```
/Users/sirasith/work/AWS-CPP/   ← repo root = Next.js project root
├── app/                        ← App Router pages and layouts
├── components/                 ← React components (server + client)
├── data/                       ← topic registry + per-topic content modules
├── lib/                        ← shared helpers (theme, accents, progress, etc.)
├── types/                      ← shared TypeScript interfaces
├── public/                     ← static assets served as-is
├── out/                        ← static export output (created by `npm run build`)
├── AGENTS.md                   ← this file
├── README.md
├── next.config.ts              ← `output: "export"` for static HTML export
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── package.json
```

There are no legacy `*.html` files — the site is generated entirely from the React/TypeScript sources above.

## File structure

The tree below is rooted at the repository root (`/Users/sirasith/work/AWS-CPP/`).

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
│   ├── index.ts                   ← topic registry (imports all 20 topics in Stephane order)
│   └── topics/
│       ├── cloud-concepts.ts      ← sec 3  Cloud Computing Concepts
│       ├── iam.ts                 ← sec 4  IAM
│       ├── ec2.ts                 ← sec 5  EC2
│       ├── ec2-storage.ts         ← sec 6  EC2 Storage (EBS, EFS, FSx, Instance Store, AMI)
│       ├── elb-asg.ts             ← sec 7  ELB & ASG
│       ├── s3.ts                  ← sec 8  Amazon S3 (+ Snow Family)
│       ├── databases.ts           ← sec 9  Databases & Analytics
│       ├── other-compute.ts       ← sec 10 Other Compute (Lambda, ECS, Fargate, etc.)
│       ├── deployment.ts          ← sec 11 Deployment & IaC
│       ├── global-infrastructure.ts ← sec 12 Global Infrastructure
│       ├── cloud-integration.ts   ← sec 13 Cloud Integration (SQS, SNS, Kinesis, MQ)
│       ├── cloud-monitoring.ts    ← sec 14 Cloud Monitoring (CloudWatch, CloudTrail, Config)
│       ├── vpc.ts                 ← sec 15 VPC & Networking
│       ├── security.ts            ← sec 16 Security & Compliance
│       ├── machine-learning.ts    ← sec 17 Machine Learning
│       ├── account-management.ts  ← sec 18 Account Management & Billing
│       ├── advanced-identity.ts   ← sec 19 Advanced Identity (STS, Cognito, etc.)
│       ├── other-services.ts      ← sec 20 Other Services
│       ├── well-architected.ts    ← sec 21 Well-Architected Framework
│       └── exam-tips.ts           ← sec 22 Exam Tips & Strategy
├── lib/
│   ├── categoryAccents.ts         ← 6-category accent system (text/tint/border/code/bullet/numberBg/highlight tokens) — UI reads from here
│   ├── accentClasses.ts           ← legacy 18-color map, kept for backward compat (no longer read by UI)
│   ├── progress.ts                ← localStorage helpers (quiz progress, font size) + custom event dispatch
│   ├── navLayout.ts               ← localStorage helper for nav-layout preference (current build shows both layouts; helper retained for future switching)
│   ├── readingTime.ts             ← word count + min/page estimate (Thai+English aware)
│   ├── extractTags.ts             ← derive editorial-style tags from keyPoints[0] for the homepage list
│   └── themeScript.ts             ← inline blocking scripts (themeScript, fontSizeScript, navLayoutScript) injected before paint
├── types/
│   └── topic.ts                   ← TypeScript interfaces (TopicData, Section, QuizQuestion, etc.)
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Topic outline (Stephane Maarek's Udemy CLF-C02 course mapping)

| # | Slug | Title | Stephane Sec | Category | Accent |
|---|------|-------|--------------|----------|--------|
| 1 | `cloud-concepts` | Cloud Concepts | sec 3 | Management & Foundations | sky |
| 2 | `iam` | IAM | sec 4 | Security & Identity | rose |
| 3 | `ec2` | EC2 | sec 5 | Compute | indigo |
| 4 | `ec2-storage` | EC2 Storage | sec 6 | Storage | amber |
| 5 | `elb-asg` | ELB & ASG | sec 7 | Compute | indigo |
| 6 | `s3` | Amazon S3 | sec 8 | Storage | amber |
| 7 | `databases` | Databases & Analytics | sec 9 | Database & Analytics | emerald |
| 8 | `other-compute` | Other Compute | sec 10 | Compute | indigo |
| 9 | `deployment` | Deployment & IaC | sec 11 | Management & Foundations | sky |
| 10 | `global-infrastructure` | Global Infrastructure | sec 12 | Networking | violet |
| 11 | `cloud-integration` | Cloud Integration | sec 13 | Networking | violet |
| 12 | `cloud-monitoring` | Cloud Monitoring | sec 14 | Management & Foundations | sky |
| 13 | `vpc` | VPC & Networking | sec 15 | Networking | violet |
| 14 | `security` | Security & Compliance | sec 16 | Security & Identity | rose |
| 15 | `machine-learning` | Machine Learning | sec 17 | Database & Analytics | emerald |
| 16 | `account-management` | Account Management & Billing | sec 18 | Management & Foundations | sky |
| 17 | `advanced-identity` | Advanced Identity | sec 19 | Security & Identity | rose |
| 18 | `other-services` | Other Services | sec 20 | Management & Foundations | sky |
| 19 | `well-architected` | Well-Architected Framework | sec 21 | Management & Foundations | sky |
| 20 | `exam-tips` | Exam Tips & Strategy | sec 22 | Management & Foundations | sky |

## Adding a new topic

1. Create `data/topics/<slug>.ts` — export a `TopicData` object (follow existing files as template)
2. In `data/index.ts`: import the new topic and add it to the `topics` array (place it according to Stephane's section order)
3. Add a slug → category override entry in `lib/categoryAccents.ts` (`slugOverrides`) so the UI buckets the topic into the right accent group
4. Done! The navbar (both Stephane row and Category rows), homepage list, footer counts, breadcrumb, and topic page are generated automatically.

No need to touch pages, components, or the navbar — everything reads from the `topics` array.

## TopicData interface

```typescript
interface TopicData {
  slug: string;          // URL slug, e.g. "iam"
  title: string;         // Short title shown in navbar/header, e.g. "IAM"
  subtitle: string;      // Full name, e.g. "Identity and Access Management"
  /** @deprecated UI no longer reads this — accents come from category. */
  accent: string;
  /** @deprecated UI no longer renders emoji. */
  emoji: string;
  category: string;      // AWS service category, e.g. "Compute", "Storage"
  description: string;   // Thai description, rendered as the lead paragraph (HTML — supports <strong>, <em>)
  keyPoints: string[];   // 3-4 bullets used to derive tags on the homepage card (HTML allowed)
  tags?: string[];       // Optional editorial tags. If omitted, derived from keyPoints[0..n].
  sections: Section[];   // Content sections
  quiz: QuizQuestion[];  // ~25 English exam questions per topic; UI samples 10 at random per session
}
```

## Content section types

Each section contains an array of content items. **All text fields render HTML** — you can use `<strong>`, `<em>`, `<br>`, `<code>`, `<span class="...">`, etc.

- `paragraph` — text (rendered with `dangerouslySetInnerHTML`, max-width `max-w-[68ch]`)
- `list` — bullet list with category-accent dot bullets
- `code` — code block with optional caption + accent-coloured left border (no syntax highlighting)
- `grid` — grid of `{ title, description }` cards rendered as filled boxes with `bg-elev` + `ring-1`; titles in the category accent
- `callout` — `info` (accent), `warning` (rose), `tip` (emerald) — each with a lucide icon (Info, AlertTriangle, Lightbulb) on the label

**Authoring rule — avoid pipe-separators:**
Do NOT use ` | ` to cram multiple bullet points into a single `description` or `text` field. Pipes get lost in word-wrap and become unreadable. Instead:
- Use `type: "list"` for multi-bullet content
- Use multiple `grid` items (one concept per card) instead of one card with pipe-dumps
- Use `<br>` line breaks inside a callout if you really need a short multi-line mnemonic

**`<strong>` is special inside topic articles:** the topic page tags its `<main>` with `data-strong-highlight` and inline `--shl-light` / `--shl-dark` CSS variables. Globals.css then renders every `<strong>` inside that subtree (excluding headings) with a soft marker-pen highlight in the category accent. Outside the article (navbar, footer, headings) `<strong>` stays plain bold.

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

To change a topic's category, edit the `slugOverrides` map in `lib/categoryAccents.ts`. To recolour an entire category, edit the corresponding entry in the `accents` object (keep all token keys present so consuming components keep working).

The legacy `lib/accentClasses.ts` 18-colour map is no longer read by UI; it's kept around so the Tailwind v4 JIT scanner has prior class strings on file in case a future change wants to reintroduce them.

## Theme system

Three tokens drive the look:
- **Theme** — `light` / `dark` / `system` — written to `<html data-theme>` by `themeScript` before paint, and to localStorage by `ThemeToggle`
- **Font size** — `sm` / `md` / `lg` — class on `<body>` (`font-sm` / `font-md` / `font-lg`); server renders `font-md` so React hydrates cleanly
- **Nav layout preference** — currently both layouts render simultaneously, but the `nav_layout` localStorage key + `navLayoutScript` are still wired in for future use

`<body suppressHydrationWarning>` and `<html suppressHydrationWarning>` are set so React tolerates the inline scripts mutating attributes/classes before hydration.

## Navbar

`components/Navbar.tsx` is a server component composed of three rows + an optional breadcrumb:

1. **Sticky brand strip** — logo "AWS CLF-C02 บันทึกย่อ" (no emoji) + `<SettingsPopover>` (theme + font-size). Only this row is sticky.
2. **`<StephaneNavRow>`** under a `ตามคอร์ส` label — every topic in course order, with a `01 02 ...` mono prefix.
3. **`<CategoryNavRows>`** under a `ตามหมวด` label — six rows, one per AWS category, each with a fixed-width label column + flex-wrapped topic chips.
4. **Breadcrumb** (topic pages only) — `Topics › Category › 03 EC2` with a chevron between segments.

Active topic styling in both layouts: `font-semibold` + accent text + accent tint background + accent ring. Inactive topics use muted ink with a hover swap.

## Quiz format

Each topic has a **pool of ~25 English-language CLF-C02 exam-style questions** stored in the `quiz` array of its `data/topics/<slug>.ts` file. The UI samples **10 questions at random** from the pool per session — every visit and every retry produces a different subset.

- **Pool size** — 25–26 questions per topic (501 total across the 20 topics)
- **Session size** — 10 random questions, drawn fresh on mount and on retry
- **Language** — questions, options, and explanations are all in **English** (the topic article body content remains Thai)
- **Question shape** — 4 options (A/B/C/D), `correct` is the 0-based index of the right answer, `explanation` is shown after the user picks. All text fields support HTML (`<strong>`, `<em>`, `<code>`, `<br>`, etc.)
- **Interactive flow** — one question at a time; clicking an option locks in the answer, reveals the explanation, and advances to the next on the user's click. The final score is saved to localStorage per slug under the key `quiz_progress_<slug>`.
- **Retry** — bumps a `retryToken` state which forces `useMemo` to re-shuffle the pool. The previous-result panel is hidden until the new session completes (even though the old score still lives in localStorage until the new one overwrites it).
- **Print** — `<QuizPrintBlock>` is a server component that renders the **entire pool** of questions + answers + explanations, hidden on screen via `hidden print:block` and revealed only when printing. Useful for offline study.

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

Two project-wide lint rules influence this design:

- `react-hooks/set-state-in-effect` — disallows `setState` calls inside `useEffect` for client-only initialization. We use derived state (`useMemo` + `useSyncExternalStore`) instead.
- `react-hooks/refs` — disallows reading `ref.current` during render. We use `useState` + `useMemo` instead of caching the shuffle in a `useRef`.

This pattern (mounted boolean via `useSyncExternalStore`) is the canonical way to gate any client-only / non-deterministic / browser-API-dependent rendering in this codebase. The same pattern is used by `HomepageProgress.tsx` for reading saved scores.

### Authoring more questions

Open `data/topics/<slug>.ts`, find the `quiz: [...]` array near the bottom, and append more `QuizQuestion` objects. IDs follow `<slug>-q<n>` (e.g. `iam-q27`). Keep questions in English so they're consistent with the existing pool. Sources used historically: AWS sample questions, exam guides, and reputable CLF-C02 prep material — not copy-pasted verbatim.

After editing, run `npm run lint && npm run build` to verify the static export still emits cleanly (24 pages: 1 home + 20 topics + 3 system).

## Build & verification

Run all commands from the repository root:

```bash
npm run lint          # ESLint check (must pass with 0 errors)
npm run build         # TypeScript compile + static export to out/
npm run dev           # Dev server at localhost:3000
```

Verify:
- `npm run build` completes without errors and emits 24 static pages (homepage + 20 topic pages + 3 system pages)
- All 20 topic pages render at `/topics/<slug>`
- Navbar shows both Stephane-order row and Category-grouped rows on every page; the active topic is highlighted in both
- HTML tags inside content (e.g., `<strong>`) render properly — they should NOT appear as literal text
- Inside topic articles, `<strong>` shows a soft marker-pen highlight in the topic's category accent (light + dark)
- Quiz is interactive (click answers, see explanation, score saves to localStorage); each visit / retry shows a different random 10-question subset drawn from the topic's full pool of ~25 questions, with no hydration warnings in the browser console
- Theme toggle (Light / Dark / System) and font-size toggle (S / M / L) both persist across reloads with no FOUC and no hydration warnings
- Reading progress bar tints to the topic's category accent
- Print preview hides nav/footer/TOC/settings, forces light theme, and reveals every quiz question + its answer + explanation

## Tailwind v4 — CSS-variable arbitrary values

When referencing CSS custom properties from utility classes use the **`var(...)`** form, not bare double-dashes:

- ✅ `bg-[var(--bg-elev)]`, `text-[var(--ink)]`, `border-[var(--rule)]`
- ❌ `bg-[--bg-elev]` — Tailwind v4 emits `background-color: --bg-elev` which is not a valid CSS value, so the property silently fails

The custom dark variant is declared as `@custom-variant dark (&:where([data-theme="dark"] *, [data-theme="dark"]))` in `globals.css`, which lets `dark:` prefixes target the manual theme attribute set by JS instead of the OS preference.

## Design principles

- **Editorial restraint** — no emoji, no gradients, no decorative shadows; chrome stays neutral and accents do real work (heading colour, strong-highlight, list bullets, callout label, code-block edge, reading-progress bar)
- **Readability first** — body 17px (`1.0625rem`), line-height `1.7`, slight letter-spacing for Thai legibility, `text-wrap: pretty` on body and `text-wrap: balance` on headings
- **Adaptive width** — paragraph/list/callout content sits inside `max-w-[68ch]`; grid spans the full article column and uses 3 columns on lg when ≥6 items
- **Easy on the eyes** — `stone` palette base (warm neutral), six low-saturation category accents (sky, rose, indigo, amber, violet, emerald), italic disabled (Thai italic is poorly designed everywhere) and replaced with dotted underline on `<em>` to denote "term being defined"
- **Thai-friendly** — `Noto Sans Thai` next to Inter, antialiased + `optimizeLegibility`; `Noto Serif Thai` paired with IBM Plex Serif for headings
- **Stephane-aligned** — topic order, structure, and exam tips track Stephane Maarek's Udemy course one-to-one
- **Static-first** — no SSR, no API routes, deployable as plain HTML/CSS/JS
