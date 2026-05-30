# UI-style.md — Editorial-restraint design system

A reusable description of the visual style used across this project. Drop a copy of this file into a fresh repo (and reference it from `AGENTS.md` / `CLAUDE.md`) when you want a coding agent to build something with the same look.

---

## What this style is called

There is no single industry name, but you can describe it accurately with any combination of:

- **Editorial / publication style** — like a magazine or long-read website (NYT, Stripe Press, Medium, gov.uk, Linear's docs).
- **Restrained / minimal / quiet UI** — small contrast in chrome, bold contrast only where content lives.
- **Typographic-first design** — the type system does the heavy lifting; layout uses hairlines, whitespace, and a serif/sans pairing instead of cards-and-shadows.
- **Warm-neutral palette with accents** — `stone` (or `zinc`) base + a small set of low-saturation hues used to mark categories, not to decorate.
- **Documentation / reading-app aesthetic** — closer to GitBook, Notion in print mode, or `docs.stripe.com` than to a SaaS dashboard.

Closely-related references you can name in a prompt:
- *gov.uk Design System* — quiet, accessible, content-forward.
- *Stripe Press / Stripe docs* — serif headings, monospace code, soft warm neutrals.
- *Linear's marketing site / changelog* — restrained chrome, hairline rules.
- *NYT article page* — long-form serif body in a centred reading column.
- *Apple Human Interface Guidelines (text-heavy pages)* — minimal decoration.

The *opposite* of this style is "SaaS dashboard": gradient hero, big shadows, vibrant blues/purples, oversized buttons with glow, glassmorphism, animated illustrations.

---

## How to prompt for it

A good one-shot prompt for a new project:

> Build the UI in an **editorial / publication style** inspired by Stripe Press and gov.uk. Use a **warm-neutral `stone` palette** (not `slate`/`gray`) with **6 low-saturation accent colours** keyed by content category (sky, rose, indigo, amber, violet, emerald). Headings use a **serif** typeface (IBM Plex Serif paired with Noto Serif Thai); body uses a **humanist sans** (Inter + Noto Sans Thai); code uses **Geist Mono**. Body text is **17px / line-height 1.7 / `text-wrap: pretty`**, and headings use **`text-wrap: balance`**.
>
> No gradients, no glassmorphism, no decorative shadows. Chrome stays neutral; **accents do real work** — they tint headings, list bullets, callout labels, code, the reading-progress bar, and a soft "marker-pen" highlight applied to `<strong>` inside articles. Use **hairline rules** (`--rule`, `--rule-strong`) instead of cards-with-shadow for separation.
>
> Implement **light + dark + system** themes with an inline blocking script in `<head>` that sets `<html data-theme="...">` before paint to avoid FOUC. Drive all colours through **CSS custom properties** under `:root` and `[data-theme="dark"]`; expose them to Tailwind via `@theme inline`. Use Tailwind v4's `@custom-variant dark (&:where([data-theme="dark"] *, [data-theme="dark"]))` so `dark:` utilities follow the manual theme attribute, not the OS.
>
> Italic is disabled (Thai italic is poorly designed everywhere) — replace `<em>` with a **dotted underline** to denote "term being defined". Use **lucide-react** icons (outline, stroke 1.6–1.9), **never emoji**.
>
> Provide an **adaptive `max-w-[68ch]`** reading column for paragraphs, full-width grids for `≥6` cards, and a **print stylesheet** that strips chrome, forces light theme, and reveals collapsed content. Use **`useSyncExternalStore`** (with a `getServerSnapshot`) for any client-only state to avoid SSR hydration mismatches.

You can also abbreviate to: *"Editorial / publication style, stone palette + 6 category accents, serif headings + Inter body, hairline rules, light/dark via `data-theme`, no gradients/shadows."*

---

## Core principles (what makes the look)

1. **Editorial restraint** — chrome is neutral; accents only mark content. Page chrome (nav, footer, sidebar) reads in `--ink-muted` / `--ink-faint`. Accent colour appears on H2 headings, list bullets, code text, callout labels, the reading-progress bar, and the marker-pen highlight on `<strong>`.
2. **Readability first** — body 17px / line-height 1.7 / `text-wrap: pretty`. Headings use `text-wrap: balance`. Reading column capped at `~68ch`. Slight letter-spacing for multi-script (Thai/Latin) legibility.
3. **Hairlines, not cards** — separation comes from 1-px hairline borders (`--rule`) and whitespace, not from shadows or rounded "cards" with elevation.
4. **Two-axis typography** — serif (display / H1+H2) vs. sans (body / H3+, UI). Mono for code only. Weight stays 400/500/600 — bold serif at huge sizes looks amateurish.
5. **Italic is disabled** — replaced with dotted underline because Thai italic typefaces are uniformly poor. Same rule applies to most CJK / Devanagari projects.
6. **Six low-saturation category accents** — `sky / rose / indigo / amber / violet / emerald` at the `-700` stop in light mode and `-300` in dark mode. They are *categorical*, not *severity-based* (so don't use rose to mean "danger" — that's a separate axis).
7. **Themed via `data-theme`** — never via OS preference alone. Keeps "dark" overridable from a settings popover, persisted in `localStorage`, applied before paint via inline script.
8. **No emoji** — use lucide-react outline icons.

---

## Palette

### Base (warm neutrals)

Use Tailwind's `stone` family. Avoid `slate` (cold, tech-product feel) and `gray` (greenish on some monitors). `stone` has a 1–2% red bias that pairs well with serif typefaces and Thai script.

```css
/* Light surfaces */
--bg: #fafaf9;        /* stone-50  */
--bg-elev: #ffffff;   /* card surfaces */
--bg-soft: #f5f5f4;   /* stone-100, alternate row hover */

/* Light ink */
--ink: #1c1917;       /* stone-900 */
--ink-muted: #57534e; /* stone-600 */
--ink-faint: #a8a29e; /* stone-400 */

/* Hairlines */
--rule: #e7e5e4;        /* stone-200 */
--rule-strong: #d6d3d1; /* stone-300 */

/* Selection / focus */
--select: rgba(67, 56, 202, 0.18);
--focus: #4f46e5;     /* indigo-600 */
```

```css
/* Dark surfaces */
--bg: #0c0a09;        /* stone-950 */
--bg-elev: #1c1917;   /* stone-900 */
--bg-soft: #292524;   /* stone-800 */

/* Dark ink */
--ink: #f5f5f4;       /* stone-100 */
--ink-muted: #a8a29e; /* stone-400 */
--ink-faint: #78716c; /* stone-500 */

/* Hairlines */
--rule: #292524;        /* stone-800 */
--rule-strong: #44403c; /* stone-700 */

--select: rgba(165, 180, 252, 0.22);
--focus: #818cf8;     /* indigo-400 */
```

### Six category accents

Each accent provides eight tokens used by UI components: `text`, `tint`, `border`, `fill`, `buttonBg`, `codeText`, `bullet`, `numberBg`, plus a `highlight` RGBA pair for the marker-pen `<strong>` background, and a `hex` value for inline styles.

| Category    | Light text       | Dark text          | Use for                                |
| ----------- | ---------------- | ------------------ | -------------------------------------- |
| **sky**     | `text-sky-700`   | `text-sky-300`     | Foundations, generic / fallback        |
| **rose**    | `text-rose-700`  | `text-rose-300`    | Security, identity                     |
| **indigo**  | `text-indigo-700`| `text-indigo-300`  | Compute                                |
| **amber**   | `text-amber-700` | `text-amber-300`   | Storage                                |
| **violet**  | `text-violet-700`| `text-violet-300`  | Networking                             |
| **emerald** | `text-emerald-700`|`text-emerald-300` | Database, analytics                    |

The "marker-pen" `<strong>` highlight uses these RGBAs (per category, light / dark):

```ts
indigo:  { light: "rgba(99, 102, 241, 0.16)",  dark: "rgba(165, 180, 252, 0.18)" }
amber:   { light: "rgba(245, 158, 11, 0.20)",  dark: "rgba(252, 211, 77, 0.18)" }
violet:  { light: "rgba(139, 92, 246, 0.16)",  dark: "rgba(196, 181, 253, 0.18)" }
emerald: { light: "rgba(16, 185, 129, 0.18)",  dark: "rgba(110, 231, 183, 0.18)" }
rose:    { light: "rgba(244, 63, 94, 0.16)",   dark: "rgba(253, 164, 175, 0.18)" }
sky:     { light: "rgba(14, 165, 233, 0.16)",  dark: "rgba(125, 211, 252, 0.18)" }
```

**Rule:** all accent class strings must be *literals* in source (e.g., `"text-indigo-700"`), not built from template strings, so the Tailwind v4 JIT scanner picks them up.

---

## Typography

### Font stack

```ts
// Serif (display: H1, H2, large numerals)
IBM_Plex_Serif    + Noto_Serif_Thai

// Sans (body, H3+, UI chrome)
Inter             + Noto_Sans_Thai

// Mono (code only)
Geist_Mono
```

Each pair always includes the matching Thai face (`Noto_*_Thai`) — this is what makes mixed Thai/English content render at the same x-height and weight without visual jolts. Apply both via `next/font/google` and chain them in `--font-sans` / `--font-serif`:

```css
@theme inline {
  --font-sans:  var(--font-inter), var(--font-noto-sans-thai), system-ui, sans-serif;
  --font-serif: var(--font-plex-serif), var(--font-noto-serif-thai), Georgia, serif;
  --font-mono:  var(--font-geist-mono), ui-monospace, Menlo, Consolas, monospace;
}
```

### Body text

```css
body {
  font-size: 1.0625rem;       /* 17px — comfortable for Thai+English */
  line-height: 1.7;
  letter-spacing: 0.003em;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-feature-settings: "kern", "liga", "calt";
  text-wrap: pretty;          /* avoid orphans */
}
```

### Font-size toggle (S / M / L)

Three discrete steps, applied as a body class so the user's choice cascades to every size that derives from `--font-size-base`:

```css
body.font-sm { --font-size-base: 0.9375rem; } /* 15px */
body.font-md { --font-size-base: 1.0625rem; } /* 17px — default */
body.font-lg { --font-size-base: 1.1875rem; } /* 19px */
```

### Headings

```css
h1, h2 {
  font-family: var(--font-serif);
  font-weight: 600;            /* never 700 at huge sizes */
  line-height: 1.2;
  letter-spacing: -0.012em;
  text-wrap: balance;
}

h3, h4, h5, h6 {
  font-family: var(--font-sans);
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.005em;
}
```

### `<strong>` and `<em>`

```css
/* <strong>: plain bold OUTSIDE article subtree, marker-pen highlight INSIDE. */
strong, b { font-weight: 600; color: var(--ink); }

/* <em>: italic disabled, dotted underline acts as "term being defined". */
em, i {
  font-weight: 500;
  font-style: normal;
  text-decoration: underline dotted var(--ink-faint);
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}
```

The marker-pen highlight on `<strong>` is the single most distinctive element of this style — see the next section.

### Inline code

```css
:not(pre) > code {
  background: var(--bg-soft);
  color: var(--ink);
  padding: 0.1rem 0.35rem;
  border-radius: 3px;
  font-size: 0.92em;
  font-family: var(--font-mono);
  border: 1px solid var(--rule);
}
```

The text colour of inline code is set per-article from the topic accent (e.g., `text-indigo-800 dark:text-indigo-200`).

---

## The marker-pen `<strong>` highlight

The signature flourish of this style. Every `<strong>` inside an article subtree gets a soft background tint in the article's category accent — like a highlighter pen drawn through the keyword. Outside the article (navbar, footer, headings) `<strong>` stays plain bold.

### CSS

```css
/* Accent value comes from inline CSS variables on the <article> element. */
[data-strong-highlight] {
  --strong-highlight: var(--shl-light);
}
[data-theme="dark"] [data-strong-highlight] {
  --strong-highlight: var(--shl-dark);
}

/* Apply to <strong> ONLY when not nested inside a heading. */
[data-strong-highlight] :not(h1):not(h2):not(h3):not(h4):not(h5):not(h6) > strong,
[data-strong-highlight] :not(h1):not(h2):not(h3):not(h4):not(h5):not(h6) > b {
  background: var(--strong-highlight, transparent);
  padding: 0.04em 0.22em;
  margin: 0 -0.05em;          /* compensate so highlights don't push surrounding text */
  border-radius: 2px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  color: var(--ink);
  font-weight: 600;
}
```

### How to wire it up per article

The page sets `data-strong-highlight` on its `<main>` and provides the two RGBA colours inline:

```tsx
<main
  data-strong-highlight
  style={
    {
      "--shl-light": accent.highlight.light,
      "--shl-dark":  accent.highlight.dark,
    } as React.CSSProperties
  }
>
  {/* article body */}
</main>
```

`box-decoration-break: clone` is what makes the highlight wrap cleanly across line breaks instead of becoming one giant rounded rectangle.

---

## Theme system (no FOUC)

### Inline blocking script in `<head>`

```ts
export const themeScript = `(function(){try{
  var s=localStorage.getItem('theme');
  var m=window.matchMedia('(prefers-color-scheme: dark)').matches;
  var t=s==='light'||s==='dark'?s:(m?'dark':'light');
  document.documentElement.dataset.theme=t;
  document.documentElement.style.colorScheme=t;
}catch(e){
  document.documentElement.dataset.theme='light';
}})();`;
```

Inject before any other script:

```tsx
<html lang="th" suppressHydrationWarning>
  <head>
    <script dangerouslySetInnerHTML={{ __html: themeScript }} />
  </head>
  <body suppressHydrationWarning>{children}</body>
</html>
```

The `suppressHydrationWarning` is required because the script mutates `<html>` / `<body>` attributes before React hydrates.

### Tailwind v4 dark variant

```css
@import "tailwindcss";

/* Read `data-theme` instead of `prefers-color-scheme`. */
@custom-variant dark (&:where([data-theme="dark"] *, [data-theme="dark"]));
```

Now `dark:bg-stone-900` follows your toggle, not the OS.

### Three-state toggle

The toggle exposes Light / Dark / System (auto):

- `localStorage.theme === "light"` → forces light
- `localStorage.theme === "dark"` → forces dark
- absent → follows `prefers-color-scheme`

Implement the toggle with `useSyncExternalStore` so it reads the current value without an effect, fires a custom `theme-change` event after writing, and stays hydration-safe.

---

## Patterns / components

### Hairline-bordered "cards" (no shadow)

```tsx
<div className="rounded-md border border-[var(--rule)] bg-[var(--bg-elev)] p-6">
  …
</div>
```

That's it — no shadow, no gradient. For grouping cards with even less weight, drop the rounded corner and use `border-l border-[var(--rule)] pl-4`.

### Callouts (info / warning / tip)

Use a left border in the accent colour, a small lucide icon next to the label, and a tinted background (`bg-{accent}-50` light / `bg-{accent}-950/40` dark). Three variants:

- **info** — accent colour (whatever the article's category is)
- **warning** — `rose` (independent of article accent)
- **tip** — `emerald` (independent of article accent)

### List bullets in accent

Don't use `list-disc`. Render bullets manually as a tinted dot:

```tsx
<ul className="space-y-2">
  {items.map((item) => (
    <li key={item} className="relative pl-5">
      <span
        aria-hidden
        className={`absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full ${accent.bullet}`}
      />
      <span dangerouslySetInnerHTML={{ __html: item }} />
    </li>
  ))}
</ul>
```

### Code block

Filled box with a thick accent left-border instead of a "card with shadow":

```tsx
<pre className={`border-l-2 ${accent.border} bg-[var(--bg-soft)] px-4 py-3 overflow-x-auto`}>
  <code>{code}</code>
</pre>
```

Optional caption above in `--ink-faint` uppercase tracking-wide.

### Reading-progress bar

A 2-pixel solid bar at the top of the viewport, tinted via `currentColor` so each page can colour it from the topic accent:

```css
.reading-progress-bar {
  position: fixed;
  inset: 0 auto auto 0;
  height: 2px;
  z-index: 100;
  pointer-events: none;
  background: currentColor;
  transition: width 100ms linear;
}
```

```tsx
<div
  data-reading-progress
  className={`reading-progress-bar ${accent.text}`}
  style={{ width: `${progress * 100}%` }}
/>
```

### Settings popover

Anchored menu (no overlay) wrapping the theme toggle and font-size toggle. Use a `<details>`-style click target or a controlled popover; keep the chrome neutral (`--ink-muted` icons, no accent colour).

### Active-link styling

```
font-semibold + accent text + accent tint background + accent ring
```

Inactive links use `--ink-muted` with a hover swap to `--ink`.

---

## Layout

### Reading column

```tsx
<p className="max-w-[68ch]">…</p>
<ul className="max-w-[68ch]">…</ul>
```

`68ch` keeps lines around 12-15 words — the comfortable reading width established by typographic research. Apply per-element, not to the whole `<main>`, so grids and code blocks can span wider.

### Grids

3 columns on `lg` when there are 6+ cards; 2 columns at `md`; stacked on mobile:

```tsx
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">…</div>
```

### Sticky right-rail TOC (optional)

```tsx
<aside data-toc className="sticky top-20 hidden xl:block">
  {/* anchor links populated by IntersectionObserver */}
</aside>
```

Use `IntersectionObserver` to mark the active anchor, not scroll listeners.

---

## Print stylesheet (essential, often forgotten)

A single `@media print` block that:

1. **Forces light theme** regardless of preference (override CSS variables under both `:root` and `[data-theme="dark"]`).
2. **Hides chrome** — every nav, footer, sidebar TOC, settings popover, font-size toggle, theme toggle, print button, and the reading-progress bar — via `data-print="hide"` attributes (cleaner than per-element class lists).
3. **Resets reading-column max-widths** to `100%` so paper width is used.
4. **Adds page-break hints** with `break-inside: avoid` on headings, callouts, and quiz blocks.
5. **Appends URL after external links**: `a[href^="http"]::after { content: " (" attr(href) ")"; }`.
6. **Reveals progressively-disclosed content** (e.g., quiz answers) by toggling visibility on `data-print-reveal` blocks.
7. **Forces background colours to print** with `-webkit-print-color-adjust: exact; print-color-adjust: exact;` on the marker-pen highlight (so the highlight survives on inkjet).

```css
@media print {
  :root, [data-theme="dark"] {
    --bg: #ffffff;
    --bg-elev: #ffffff;
    --bg-soft: #f5f5f4;
    --ink: #000000;
    --ink-muted: #333333;
    --ink-faint: #666666;
    --rule: #cccccc;
    --rule-strong: #888888;
    color-scheme: light !important;
  }

  html, body { background: #fff !important; color: #000 !important; }

  [data-print="hide"],
  nav[data-site-nav],
  footer[data-site-footer],
  aside[data-toc],
  [data-reading-progress],
  [data-settings],
  [data-print-button] { display: none !important; }

  main { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
  .max-w-prose, .max-w-3xl, .max-w-5xl, .max-w-7xl { max-width: 100% !important; }

  h1, h2, h3, h4, h5, h6, .callout {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  a[href^="http"]::after {
    content: " (" attr(href) ")";
    font-size: 0.85em;
    color: #555;
    word-break: break-all;
  }
}
```

---

## Hydration-safe client state (Next.js / React)

Static-export Next.js apps must produce identical HTML on the server and on the first client render. Anything non-deterministic (`Math.random()`, `localStorage`, `Date.now()`, locale-aware formatting) breaks hydration if used directly inside `useState(() => ...)` or in JSX.

The canonical fix in this codebase is `useSyncExternalStore` with a `getServerSnapshot`:

```tsx
"use client";
import { useSyncExternalStore } from "react";

// "Are we mounted on the client?" boolean store.
function subscribeNoop() { return () => {}; }
const isMounted = useSyncExternalStore(
  subscribeNoop,
  () => true,    // client snapshot
  () => false,   // server snapshot
);

// Now any random / localStorage / Date.now() value is gated:
const value = useMemo(
  () => (isMounted ? clientOnlyCompute() : safeServerDefault),
  [isMounted, /* deps */],
);
```

For data that *changes* (localStorage, Broadcast Channel, custom events), provide a `subscribe(callback)` that listens to the event and a `getSnapshot` that reads the value:

```tsx
function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener("my-custom-change", cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener("my-custom-change", cb);
  };
}
function getSnapshot()         { return readFromLocalStorage(); }
function getServerSnapshot()   { return null; }  // matches SSR-render

const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
```

**Cache the snapshot** if it derives from `Object.keys(localStorage)` — `useSyncExternalStore` requires a stable reference between calls or it loops forever:

```ts
let cached: T | null = null;
function getSnapshot(): T {
  if (cached) return cached;
  cached = computeFromStorage();
  return cached;
}
function subscribe(cb: () => void) {
  const invalidate = () => { cached = null; cb(); };
  // …
}
```

**Two lint rules** (in this project's ESLint config) enforce the pattern:

- `react-hooks/set-state-in-effect` — disallows calling `setState` synchronously inside `useEffect`. Use derived state (`useMemo`) gated on `isMounted` instead.
- `react-hooks/refs` — disallows reading `ref.current` during render. Use state, not refs, for anything the JSX consumes.

---

## Accessibility

- **Focus ring** — visible 2px outline in `--focus` (indigo), with 2px offset:
  ```css
  :focus-visible {
    outline: 2px solid var(--focus);
    outline-offset: 2px;
    border-radius: 2px;
  }
  ```
- **Selection** — soft accent tint (`--select`) with `--ink` text:
  ```css
  ::selection {
    background: var(--select);
    color: var(--ink);
  }
  ```
- **`scroll-padding-top: 5rem`** on `<html>` so anchor links don't hide content under the sticky nav.
- **`prefers-reduced-motion`** — the only animation in the system is the reading-progress bar's `transition: width 100ms linear`. Respect the user's preference if you add more.
- **Colour contrast** — `--ink` on `--bg` is ~16:1; accent text at `-700` on `--bg` is ≥4.5:1. Verify with a contrast checker if you tweak the palette.

---

## Anti-patterns (don't do these)

- ❌ Card with shadow + rounded-2xl + gradient header.
- ❌ Tailwind utility built from a template string: `text-${color}-700` (the JIT scanner cannot see it).
- ❌ Italic `<em>` with mixed Thai content.
- ❌ `bg-[--var-name]` (Tailwind v4 emits invalid CSS; always use `bg-[var(--var-name)]`).
- ❌ Storing theme as a React context with no localStorage / no inline script — guarantees FOUC.
- ❌ `prefers-color-scheme` as the *only* dark-mode trigger — users want to override.
- ❌ Emoji as icons.
- ❌ Calling `Math.random()` / `localStorage.getItem(...)` inside `useState(() => ...)` initializer — guarantees hydration mismatch.
- ❌ `setState` inside `useEffect` to "sync" client-only state. Use `useSyncExternalStore` + derived state.
- ❌ Slate / cool-grey base palette next to a serif-and-Thai stack — looks like a discord bot dashboard.

---

## Quick checklist for a new project

- [ ] Tailwind v4 installed via npm, `@import "tailwindcss";` in globals.
- [ ] `@custom-variant dark (&:where([data-theme="dark"] *, [data-theme="dark"]));` declared.
- [ ] CSS variables in `:root` and `[data-theme="dark"]` for all surfaces, ink, rules.
- [ ] `@theme inline` block exposes them as Tailwind theme colours and chains the font variables.
- [ ] Inline blocking script in `<head>` sets `data-theme` before paint; `<html suppressHydrationWarning>` and `<body suppressHydrationWarning>`.
- [ ] Body styles: 17px / 1.7 / `text-wrap: pretty`. Font-size toggle classes `font-sm/md/lg` mounted on `<body>`.
- [ ] Headings: serif H1/H2 (weight 600, balanced), sans H3+ (weight 600).
- [ ] `<em>` styled as dotted underline, italic disabled.
- [ ] Marker-pen `<strong>` highlight scoped to `[data-strong-highlight]`.
- [ ] 6 category accents in `lib/categoryAccents.ts`, all class strings literal.
- [ ] Components use hairline borders, no shadow.
- [ ] Lucide-react icons; no emoji.
- [ ] `@media print` block that hides chrome and forces light theme.
- [ ] `useSyncExternalStore` for any client-only state.
- [ ] `:focus-visible` outline uses `--focus`.
