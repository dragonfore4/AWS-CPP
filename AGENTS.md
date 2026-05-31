<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


# AGENTS.md

AWS Cloud Practitioner (CLF-C02) study notes — Next.js 16 static site, structured by **Stephane Maarek's Ultimate AWS Cloud Practitioner course on Udemy**. 20 topics, ~500 quiz questions, Thai + English bilingual content, no backend.

---

## Documentation map — read first

Pick the file that matches your task. Read it before touching any code.

- **Authoring or modifying topic content** (any file under `data/topics/*.ts` — article body, quiz questions, or both)
  1. Read [`AUDIT.md`](./AUDIT.md) — avoids reintroducing issues just removed.
  2. Check [`docs/SERVICES.md`](./docs/SERVICES.md) — current Discontinued / Renamed / Partial-EoL tables.
  3. Verify against the official CLF-C02 exam guide using the [Reference URL table](#reference-url-table) at the bottom of this file (4-step check).
  4. Follow the rules in [`docs/AUTHORING.md`](./docs/AUTHORING.md) — TopicData shape, section types, authoring rules, quiz conventions, verification checklist.
- **Changing UI / styles / typography / colour / print stylesheet** → [`UI-style.md`](./UI-style.md).
- **Changing site internals** (components, hooks, build, theme system, navbar, quiz internals, Tailwind quirks, static export) → [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md).
- **First-time orientation / running the project locally** → [`README.md`](./README.md).

If AWS source material disagrees with Stephane's lectures or third-party prep, **follow AWS**.

---

## Stack at a glance

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** via npm (`@import "tailwindcss"`, postcss plugin)
- **Static export** (`output: "export"` in `next.config.ts`) — pure HTML output, no backend, no API routes
- Fonts: Inter + Noto Sans Thai (body), IBM Plex Serif + Noto Serif Thai (h1/h2), Geist Mono (code)
- Icons: `lucide-react` (outline, stroke 1.6–1.9). **No emoji** in user-facing content.
- Themes: light + dark + system, persisted in localStorage; font size S/M/L
- Palette: `stone` (warm neutral) base + 6 category accents (sky, rose, indigo, amber, violet, emerald)

The Next.js project lives at the **repository root** — there is no `next-app/` subdirectory.

---

## Where things live

- `app/` — App Router pages (homepage, dynamic topic page) and `globals.css`
- `components/` — React components (server + client)
- `data/topics/*.ts` — one `TopicData` per topic; **single source of truth** for the 20 topics
- `data/index.ts` — topic registry; `generateStaticParams` reads from here
- `lib/` — shared helpers (theme, accents, progress, search)
- `types/topic.ts` — shared TypeScript interfaces
- `public/` — static assets
- `out/` — build output (created by `npm run build`)
- `docs/` — contributor-facing documentation (architecture, authoring, services)

For the full annotated tree, see [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md).

---

## Build & verify

Run from the repository root:

```bash
npm run lint     # ESLint — must pass with 0 errors
npm run build    # TypeScript compile + static export to out/  (emits 24 pages)
npm run dev      # Dev server at localhost:3000
```

A green build produces 24 static pages: 1 homepage + 20 topics + 3 system pages. For the full smoke-test checklist, see [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md#build--verify).

---

## Tailwind v4 — CSS-variable arbitrary values

When referencing CSS custom properties from utility classes use the `var(...)` form, **not** bare double-dashes:

- ✅ `bg-[var(--bg-elev)]`, `text-[var(--ink)]`, `border-[var(--rule)]`
- ❌ `bg-[--bg-elev]` — Tailwind v4 emits `background-color: --bg-elev`, which is not a valid CSS value, so the property silently fails.

The custom dark variant is declared as `@custom-variant dark (&:where([data-theme="dark"] *, [data-theme="dark"]))` in `globals.css`, so `dark:` prefixes target the manual theme attribute set by JS instead of the OS preference.

---

## Hard authoring rules (summary)

Detail in [`docs/AUTHORING.md`](./docs/AUTHORING.md). Quick reminders:

- **No pipe-separator violations** in any `description:` or `text:` field. Use `type: "list"`, multiple grid items, or `<br>` inside callouts.
- **No emoji** in user-facing content. Use `<CategoryIcon>` (lucide-react) instead.
- **Use stable phrasing** for AWS numbers that change frequently (prefer "600+" over "216+"; "hundreds of" beats specifics when AWS revises often).
- **Use current service names**. The rename table is in [`docs/SERVICES.md`](./docs/SERVICES.md).
- **No agent-comment leakage** in `explanation` / `text` fields (no "TODO", "FIXME", or meta-commentary).

---

## Reference URL table

Official sources for verifying CLF-C02 scope and AWS service status. Treat live URLs as truth — AWS revises the exam guide periodically.

| Purpose | URL |
|---|---|
| Exam guide landing (domains, weighting, target candidate, exam content) | https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html |
| In-Scope AWS Services (authoritative list of testable services) | https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html |
| Out-of-Scope AWS Services (do not add to article body or quiz) | https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-out-of-scope-services.html |
| Technologies and Concepts (cross-cutting topics e.g. CAF, IaC, SDKs, support plans) | https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-technologies-concepts.html |
| Domain 1 — Cloud Concepts (24%) | https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain1.html |
| Domain 2 — Security and Compliance (30%) | https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain2.html |
| Domain 3 — Cloud Technology and Services (34%) | https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain3.html |
| Domain 4 — Billing, Pricing, and Support (12%) | https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain4.html |
| Certification overview / exam logistics (cost, length, languages, validity) | https://aws.amazon.com/certification/certified-cloud-practitioner/ |
| Exam guide PDF (downloadable copy) | https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf |
| AWS What's New (recent launches, renames, EoL announcements) | https://aws.amazon.com/new/ |
| AWS service product pages (one per service; 404 / redirect = discontinued or renamed) | `https://aws.amazon.com/<service>/` |

### 4-step verification check (run for every service or feature you add, rename, or expand)

1. **In-Scope check** — confirm the service appears on the In-Scope page under the relevant category.
2. **Out-of-Scope check** — confirm the service does **not** appear on the Out-of-Scope page. If it does, do not add it (neither to article body nor as a quiz option / distractor).
3. **Depth check** — open the relevant Domain task statement (1–4) and read the *Skills in:* list. CLF-C02 wording matters — "identify" requires only naming the service; "differentiate" / "evaluate" requires comparing options. Match content depth to what the task statement tests.
4. **Currency check** — open the AWS product page at `https://aws.amazon.com/<service>/`. A 404, redirect to the homepage, redirect to a different service, or a banner like "closed to new customers" / "end of support" means the service is discontinued or partial-EoL. Cross-check against [`docs/SERVICES.md`](./docs/SERVICES.md).

If any check fails, do not add the content. **Re-check at the start of each authoring session** — bookmarks are fine, but treat the live URLs as truth.
