# AWS CLF-C02 บันทึกย่อ

Bilingual (Thai + English) study notes site for the **AWS Certified Cloud Practitioner (CLF-C02)** exam, structured one-to-one with [Stephane Maarek's *Ultimate AWS Certified Cloud Practitioner* course](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/) on Udemy.

- **20 topics** organised in Stephane's section order and grouped into 6 AWS service categories (Compute, Storage, Networking, Database & Analytics, Security & Identity, Management & Foundations).
- **~500 quiz questions** total (≈25 per topic, 10 sampled at random per session).
- **Editorial / publication style** — long-form Thai notes with English exam terms inline, marker-pen highlights on key terms, 6 low-saturation category accents.
- **Static site** — pure HTML/CSS/JS output, no backend, no API routes.

---

## Stack

- [Next.js 16](https://nextjs.org) with App Router + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) via the postcss plugin
- Static export (`output: "export"`) — deployable as plain HTML
- Fonts: Inter + Noto Sans Thai (body), IBM Plex Serif + Noto Serif Thai (headings), Geist Mono (code)
- Icons: [`lucide-react`](https://lucide.dev) (no emoji)

---

## Quick start

```bash
git clone <this-repo>
cd AWS-CPP
npm install
npm run dev          # http://localhost:3000
```

## Build for production

```bash
npm run build        # TypeScript compile + static export → out/
npm run lint         # ESLint
```

A green build emits **24 static pages**: 1 homepage + 20 topic pages + 3 system pages (`_not-found`, etc.). Deploy `out/` to any static host (S3 + CloudFront, Netlify, GitHub Pages, Vercel static).

---

## Project structure

- `app/` — App Router pages (`/`, `/topics/[slug]`) and `globals.css`
- `components/` — server + client React components (Navbar, TopicSection, QuizSection, …)
- `data/topics/*.ts` — one `TopicData` per topic; the **single source of truth** for content
- `data/index.ts` — topic registry consumed by `generateStaticParams`
- `lib/` — shared helpers (theme scripts, category accents, progress, search)
- `types/topic.ts` — TypeScript interfaces (`TopicData`, `Section`, `QuizQuestion`)
- `public/` — static assets
- `docs/` — contributor documentation

For the full annotated tree, see [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md).

---

## For contributors and AI agents

Pick the file that matches your task:

| Task | Read |
|---|---|
| Add or modify topic content (article body or quiz) | [`AGENTS.md`](./AGENTS.md) → [`AUDIT.md`](./AUDIT.md) → [`docs/SERVICES.md`](./docs/SERVICES.md) → [`docs/AUTHORING.md`](./docs/AUTHORING.md) |
| Change UI / typography / colour | [`UI-style.md`](./UI-style.md) |
| Change site internals (components, hooks, build) | [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) |
| Anything else | start at [`AGENTS.md`](./AGENTS.md) |

`AGENTS.md` is the master rulebook for AI coding agents (Claude Code, Copilot CLI, Codex, Gemini CLI). It is short on purpose — it points at the right detail file for each task and contains the authoritative CLF-C02 reference URL table.

---

## Credits

- Course structure and topic order: [Stephane Maarek's *Ultimate AWS Certified Cloud Practitioner CLF-C02*](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/) on Udemy.
- Exam scope: [AWS Certified Cloud Practitioner (CLF-C02) Exam Guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html).
- Visual design language: see [`UI-style.md`](./UI-style.md) for a reusable description of the editorial-restraint style used across the site.
