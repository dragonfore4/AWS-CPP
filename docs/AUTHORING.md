# AUTHORING.md — Topic content authoring guide

Everything you need to add or modify a topic in `data/topics/<slug>.ts` — article body, quiz pool, or both.

---

## Read this first (priority order)

Before writing or modifying any topic file:

1. **Read [`AUDIT.md`](../AUDIT.md)** — so you don't reintroduce issues that were just removed (Snowmobile, CodeStar, pipe-separator violations, etc.).
2. **Check [`SERVICES.md`](./SERVICES.md)** — the live Discontinued / Renamed / Partial-EoL tables. If a service is on those tables, do not add it (or add it with the prescribed disclaimer).
3. **Verify against the official CLF-C02 exam guide** using the 4-step check in [`../AGENTS.md`](../AGENTS.md) (the URL table lives there). The exam guide is authoritative for what is testable.
4. Only then start editing.

If AWS source material disagrees with Stephane's lectures or third-party prep, **follow AWS**.

---

## Adding a new topic

1. Create `data/topics/<slug>.ts` — export a `TopicData` object (use an existing file as the template).
2. In `data/index.ts`: import the new topic and add it to the `topics` array, placed according to Stephane's section order.
3. Add a slug → category override in `lib/categoryAccents.ts` (`slugOverrides`) so the UI buckets the topic into the right accent group.
4. Done. The navbar (Stephane row + Category rows), homepage list, footer counts, breadcrumb, and topic page are all generated automatically.

You do not need to touch pages, components, or the navbar — everything reads from the `topics` array.

---

## TopicData interface

```typescript
interface TopicData {
  slug: string;          // URL slug, e.g. "iam"
  title: string;         // Short title shown in navbar/header, e.g. "IAM"
  subtitle: string;      // Full name, e.g. "Identity and Access Management"
  /** @deprecated UI no longer reads this — accents come from category. */
  accent: string;
  category: string;      // AWS service category, e.g. "Compute", "Storage"
  description: string;   // Thai description, rendered as the lead paragraph (HTML — supports <strong>, <em>)
  keyPoints: string[];   // 3–6 bullets used to derive tags on the homepage card (HTML allowed)
  tags?: string[];       // Optional editorial tags. If omitted, derived from keyPoints[0..n].
  sections: Section[];   // Content sections
  quiz: QuizQuestion[];  // ~25 English exam questions per topic; UI samples 10 at random per session
}
```

The `accent` field is deprecated but kept on the TypeScript type because every existing topic still sets it. The UI ignores it and reads accents from the category instead — see `lib/categoryAccents.ts` and [`ARCHITECTURE.md`](./ARCHITECTURE.md#category-accent-system).

---

## Section types

Each section contains an array of content items. **All text fields render HTML** — you can use `<strong>`, `<em>`, `<br>`, `<code>`, `<span class="...">`, etc.

| Type | Renders to |
|---|---|
| `paragraph` | Text with `dangerouslySetInnerHTML`, max-width `max-w-[68ch]` |
| `list` | Bullet list with category-accent dot bullets |
| `code` | Code block with optional caption + accent-coloured left border (no syntax highlighting) |
| `grid` | Grid of `{ title, description }` cards rendered as filled boxes (`bg-elev` + `ring-1`); titles in the category accent |
| `callout` | `info` (accent), `warning` (rose), or `tip` (emerald), each with a lucide icon (Info, AlertTriangle, Lightbulb) on the label |

### `<strong>` is special inside articles

The topic page tags its `<main>` with `data-strong-highlight` and inline `--shl-light` / `--shl-dark` CSS variables. Globals.css then renders every `<strong>` inside that subtree (excluding headings) with a soft marker-pen highlight in the category accent. Outside the article (navbar, footer, headings) `<strong>` stays plain bold.

### `<em>` is not italic

Italic is disabled because Thai italic is poorly designed everywhere. `<em>` renders with a **dotted underline** to denote "term being defined". Use it for that purpose.

---

## Authoring rules

These rules came out of the 2026-05-30 audit and are enforced by code review:

### No pipe-separator violations

Never use ` | ` to cram multiple bullet points into a single `description:` or `text:` field. Pipes get lost in word-wrap and become unreadable. Instead:

- Use `type: "list"` for multi-bullet content
- Use multiple `grid` items (one concept per card) instead of one card with pipe-dumps
- Use `<br>` line breaks inside a `callout` for short multi-line mnemonics

ASCII tables inside `code:` blocks are exempt — those use ` | ` legitimately as table separators.

### No emoji in user-facing content

Use `lucide-react` icons via `<CategoryIcon>` for visual cues. The legacy `emoji` field on `TopicData` was removed in the May 2026 audit.

### Use stable phrasing for numeric facts

AWS revises some numbers frequently. Prefer `"hundreds of edge locations (600+)"` over `"216+"` so the content stays correct through the next AWS expansion. Specific numbers are OK when they're stable (e.g. Lambda max execution = 15 minutes, S3 max object = 5 TB, Aurora storage auto-scales to 128 TiB).

### No agent-comment leakage

Never write meta-commentary like `"Stephane updates AGENTS.md"`, `"TODO"`, or `"FIXME"` into a quiz `explanation` or article `text`. The audit removed one such leak from `deployment.ts` quiz q3.

### Use current service names

Always use the current AWS service name, not the old one. See [`SERVICES.md`](./SERVICES.md) for the rename table. On a first reference inside a topic you may use `(formerly X)` to help exam takers; subsequent references should use the current name only.

---

## Quiz authoring

Each topic has a **pool of ~25 English-language CLF-C02 exam-style questions** stored in the `quiz` array of its `data/topics/<slug>.ts` file. The UI samples **10 questions at random** from the pool per session — every visit and every retry produces a different subset.

### Pool conventions

- **Pool size** — 25–27 questions per topic (501+ total across the 20 topics)
- **Session size** — 10 random questions, drawn fresh on mount and on retry
- **Language** — questions, options, and explanations are all in **English** (the topic article body content remains Thai)
- **Question shape** — 4 options (A/B/C/D), `correct` is the 0-based index of the right answer, `explanation` is shown after the user picks. All text fields support HTML (`<strong>`, `<em>`, `<code>`, `<br>`, etc.)
- **IDs** — follow `<slug>-q<n>` (e.g. `iam-q27`).
- **Sources used historically** — AWS sample questions, exam guides, and reputable CLF-C02 prep material — never copy-pasted verbatim.

### Adding more questions

Open `data/topics/<slug>.ts`, find the `quiz: [...]` array near the bottom, and append more `QuizQuestion` objects. Run `npm run lint && npm run build` to verify the static export still emits cleanly.

### Why randomization is hydration-safe

The quiz randomization is gated by a `useSyncExternalStore` mounted-boolean pattern so that SSR and the first client render produce byte-identical HTML. The implementation lives in `components/QuizSection.tsx`; the design rationale and the project-wide React lint rules that influence it are documented in [`ARCHITECTURE.md`](./ARCHITECTURE.md#hydration-safe-randomization).

---

## Verification after authoring

Run from the repository root:

```bash
npm run lint     # ESLint check (must pass with 0 errors)
npm run build    # TypeScript compile + static export to out/
```

Manual smoke test on `/topics/<slug>`:

- Topic page renders at `/topics/<slug>`.
- TOC right-rail lists every new section.
- HTML tags inside content (`<strong>`, `<em>`, etc.) render properly — they should NOT appear as literal text.
- Inside the article, `<strong>` shows a soft marker-pen highlight in the topic's category accent (light + dark themes).
- Quiz is interactive (click answers, see explanation, score saves to localStorage); each visit / retry shows a different random 10-question subset; no hydration warnings in the browser console.
- Print preview reveals every quiz question + answer + explanation.
