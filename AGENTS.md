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
- Fonts: Inter + Noto Sans Thai (via `next/font/google`)
- Language: Thai + English mixed content
- Dark theme: `bg-slate-950` base, `bg-slate-900` cards, `border-slate-800`
- No backend, no API routes — pure static HTML output

## Project location

```
next-app/          ← Next.js project root (run commands here)
*.html             ← legacy static HTML files (reference only, not maintained)
```

## File structure

```
next-app/
├── app/
│   ├── layout.tsx                 ← root layout (fonts, metadata)
│   ├── page.tsx                   ← homepage (card grid with progress)
│   ├── globals.css                ← Tailwind + custom CSS (font sizes, typography, strong/em styling)
│   └── topics/
│       └── [slug]/
│           └── page.tsx           ← dynamic topic page (server component, adaptive width)
├── components/
│   ├── Navbar.tsx                 ← sticky 2-row navbar: logo + flex-wrap topic buttons (server)
│   ├── HomepageCards.tsx          ← topic card grid with quiz progress (client)
│   ├── TopicSection.tsx           ← renders a content section (paragraph/list/code/grid/callout)
│   ├── QuizSection.tsx            ← interactive quiz with localStorage progress (client)
│   ├── ReadingProgress.tsx        ← scroll progress bar (client, useSyncExternalStore)
│   ├── FontSizeToggle.tsx         ← S/M/L font size toggle (client, useSyncExternalStore)
│   └── Footer.tsx                 ← site footer (server)
├── data/
│   ├── index.ts                   ← topic registry (imports all topics in Stephane order)
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
│   ├── progress.ts                ← localStorage helpers (quiz progress, font size)
│   └── accentClasses.ts           ← static Tailwind class lookup map for 18 accent colors
├── types/
│   └── topic.ts                   ← TypeScript interfaces (TopicData, Section, QuizQuestion, etc.)
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Topic outline (Stephane Maarek's Udemy CLF-C02 course mapping)

| # | Slug | Title | Stephane Sec | Accent |
|---|------|-------|--------------|--------|
| 1 | `cloud-concepts` | Cloud Concepts | sec 3 | sky |
| 2 | `iam` | IAM | sec 4 | orange |
| 3 | `ec2` | EC2 | sec 5 | blue |
| 4 | `ec2-storage` | EC2 Storage | sec 6 | cyan |
| 5 | `elb-asg` | ELB & ASG | sec 7 | green |
| 6 | `s3` | Amazon S3 | sec 8 | yellow |
| 7 | `databases` | Databases & Analytics | sec 9 | sky |
| 8 | `other-compute` | Other Compute | sec 10 | amber |
| 9 | `deployment` | Deployment & IaC | sec 11 | rose |
| 10 | `global-infrastructure` | Global Infrastructure | sec 12 | purple |
| 11 | `cloud-integration` | Cloud Integration | sec 13 | fuchsia |
| 12 | `cloud-monitoring` | Cloud Monitoring | sec 14 | teal |
| 13 | `vpc` | VPC & Networking | sec 15 | indigo |
| 14 | `security` | Security & Compliance | sec 16 | red |
| 15 | `machine-learning` | Machine Learning | sec 17 | violet |
| 16 | `account-management` | Account Management & Billing | sec 18 | yellow |
| 17 | `advanced-identity` | Advanced Identity | sec 19 | pink |
| 18 | `other-services` | Other Services | sec 20 | slate |
| 19 | `well-architected` | Well-Architected Framework | sec 21 | emerald |
| 20 | `exam-tips` | Exam Tips & Strategy | sec 22 | lime |

## Adding a new topic

1. Create `data/topics/<slug>.ts` — export a `TopicData` object (follow existing files as template)
2. In `data/index.ts`: import the new topic and add it to the `topics` array (place it according to Stephane's section order)
3. If the topic uses a new accent color, add the corresponding entry to `lib/accentClasses.ts` (see "Accent colors" below)
4. Done! The navbar, homepage card, and topic page are generated automatically.

No need to touch pages, components, or the navbar — everything reads from the `topics` array.

## TopicData interface

```typescript
interface TopicData {
  slug: string;          // URL slug, e.g. "iam"
  title: string;         // Short title shown in navbar/header, e.g. "IAM"
  subtitle: string;      // Full name, e.g. "Identity and Access Management"
  accent: string;        // Tailwind color name: "orange", "blue", "cyan", etc.
  emoji: string;         // Emoji shown in card and page header
  category: string;      // AWS service category, e.g. "Compute"
  description: string;   // Thai description (rendered as HTML — supports <strong>, <em>)
  keyPoints: string[];   // 3-4 bullets for the homepage card (HTML allowed)
  sections: Section[];   // Content sections
  quiz: QuizQuestion[];  // 5-10 exam questions per topic
}
```

## Content section types

Each section contains an array of content items. **All text fields render HTML** — you can use `<strong>`, `<em>`, `<br>`, `<code>`, `<span class="...">`, etc.

- `paragraph` — text (rendered with `dangerouslySetInnerHTML`, max-width `max-w-3xl`)
- `list` — bullet list of strings
- `code` — code block with optional caption (no syntax highlighting)
- `grid` — grid of `{ title, description }` cards (auto 2-col, or 3-col on lg when ≥6 items)
- `callout` — highlighted box (variants: `info`, `warning`, `tip`)

**Authoring rule — avoid pipe-separators:**
Do NOT use ` | ` to cram multiple bullet points into a single `description` or `text` field. Pipes get lost in word-wrap and become unreadable. Instead:
- Use `type: "list"` for multi-bullet content
- Use multiple `grid` items (one concept per card) instead of one card with pipe-dumps
- Use `<br>` line breaks inside a callout if you really need a short multi-line mnemonic

## Accent colors

`lib/accentClasses.ts` maps each accent name to a set of literal Tailwind class strings (text/bg/border/hover variants). This is required because Tailwind v4 JIT cannot detect dynamic class names like `text-${accent}-400` — the lookup map ensures every variant is visible to the scanner and ends up in the CSS bundle.

Currently supported accents (18): `amber`, `blue`, `cyan`, `emerald`, `fuchsia`, `green`, `indigo`, `lime`, `orange`, `pink`, `purple`, `red`, `rose`, `sky`, `slate`, `teal`, `violet`, `yellow`.

To add a new accent, append an entry to `accentClasses` in `lib/accentClasses.ts` using the existing entries as a template — the keys (`text300`, `text400`, `bg500`, `bg500_10`, `bg500_20`, `border500_30`, `border500_50`, `hoverBorder500_50`, `hoverText300`, `hoverBg500`, `shadow500_10`) must remain identical so consuming components keep working.

## Navbar

`components/Navbar.tsx` is a server component with a 2-row layout:
- **Row 1** — logo "☁️ AWS CLF-C02" linking to home
- **Row 2** — all 20 topic buttons rendered with `flex flex-wrap gap-2` so they wrap onto multiple rows on narrow viewports (no horizontal scroll, no dropdown)

The active topic gets the accent background; other topics get `bg-slate-800`. The topic order in the navbar is controlled by the order of the `topics` array in `data/index.ts`.

## Quiz format

Each topic has multiple-choice questions styled for CLF-C02 exam practice:
- **5 questions** for focused topics (iam, ec2, vpc, machine-learning, etc.)
- **7-10 questions** for merged/large topics (databases, account-management, security, other-compute, global-infrastructure, cloud-integration, cloud-monitoring, ec2-storage, s3)
- 4 options (A/B/C/D) — option text supports HTML (`<strong>`, `<em>`, etc.)
- `correct` = 0-based index of correct answer
- `explanation` = Thai explanation of why the answer is correct (HTML supported)
- Interactive: one question at a time, reveal answer on click, score saved to localStorage per slug

Total quiz questions across all 20 topics: ~125+ exam-style questions.

## Build & verification

```bash
cd next-app
npm run lint          # ESLint check (must pass with 0 errors)
npm run build         # TypeScript compile + static export to out/
npm run dev           # Dev server at localhost:3000
```

Verify:
- `npm run build` completes without errors and emits 24 static pages (homepage + 20 topic pages + system pages)
- All 20 topic pages render at `/topics/<slug>`
- Navbar shows all 20 topics with the active one highlighted in the topic's accent color
- HTML tags inside content (e.g., `<strong>`) render properly — they should NOT appear as literal text
- Quiz is interactive (click answers, see explanation, score saves to localStorage)
- Font size toggle (S/M/L) updates body class and persists across reloads
- Reading progress bar shows scroll percentage
- Homepage shows quiz progress per topic when a quiz has been completed

## Design principles

- **Readability first** — body 18px (`1.125rem`), line-height `1.85`, slight letter-spacing for Thai legibility
- **Adaptive width** — paragraph/list/callout content sits inside `max-w-3xl` for comfortable reading; grids span the full `max-w-5xl` page width and use 3 columns on lg
- **Easy on the eyes** — `slate` palette (not `gray`), softer contrasts, white `<strong>`/light slate `<em>` (italic disabled — Thai italic is hard to read)
- **Thai-friendly** — `Noto Sans Thai` next to Inter, antialiased + `optimizeLegibility`
- **Stephane-aligned** — topic order, structure, and exam tips track Stephane Maarek's Udemy course one-to-one
- **Static-first** — no SSR, no API routes, deployable as plain HTML/CSS/JS
