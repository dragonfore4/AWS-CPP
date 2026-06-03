# Search Punctuation & Grid-Card Fix — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `re:Post`, `re:post`, `repost`, `re:Invent`, `Knowledge Center`, `Prescriptive Guidance`, and `Professional Services` searches reliably surface their entries in the top 3 results, without regressing existing-good queries.

**Architecture:** Three coordinated changes inside `lib/searchIndex.ts` and `lib/search.ts` only. (1) Stop splitting on `:` in the tokenizer so colon-bearing tokens stay intact. (2) Append a punctuation-collapsed copy (`:` removed) to each haystack so no-colon variants like `repost` still match. (3) Collect grid-card titles into a new `cardTitleTokens` field on section entries and add a `+3` boost when query tokens hit them — this surfaces services that live only inside grid cards.

**Tech Stack:** TypeScript, Next.js 16 App Router (static export), no test framework. Verification is `npm run lint`, `npm run build`, and manual smoke testing in `npm run dev`.

**Spec:** `docs/superpowers/specs/2026-06-03-search-punctuation-fix-design.md`

---

## File structure

| File | Responsibility | Change |
|---|---|---|
| `lib/searchIndex.ts` | Builds the static search index from the topic data | Add `gridCardTitles` helper, add `cardTitleTokens` field to section `SearchEntry`, append punctuation-collapsed haystack variant |
| `lib/search.ts` | Tokenises queries and scores entries against the index | Drop `:` from two split regexes (line 26, line 55), add `+3` boost when a token hits `cardTitleTokens` |

That's all. Two files, one focused responsibility per file. No data files, no components, no docs.

---

## Task 1 — Tokenizer: stop splitting on `:`

**Why first:** Smallest change. Independently verifiable. Makes the colon-bearing query case work even before §2 and §3 land.

**Files:**
- Modify: `lib/search.ts:26` and `lib/search.ts:55`

- [ ] **Step 1: Update the `tokenize` function's split regex**

In `lib/search.ts`, locate this block at line 23–28:

```ts
export function tokenize(query: string): string[] {
  const norm = normalize(query.trim());
  if (!norm) return [];
  const parts = norm.split(/[\s,;:.?!()[\]{}/\\]+/u).filter(Boolean);
  return Array.from(new Set(parts));
}
```

Change line 26 from:

```ts
  const parts = norm.split(/[\s,;:.?!()[\]{}/\\]+/u).filter(Boolean);
```

to:

```ts
  const parts = norm.split(/[\s,;.?!()[\]{}/\\]+/u).filter(Boolean);
```

The only difference: `:` is removed from the character class.

- [ ] **Step 2: Update `primaryTitleTokens` to use the same split**

In `lib/search.ts`, locate this block at line 52–58:

```ts
function primaryTitleTokens(entry: SearchEntry): Set<string> {
  return new Set(
    primaryTitle(entry)
      .split(/[\s,;:.?!()[\]{}/\\]+/u)
      .filter(Boolean),
  );
}
```

Change the inner regex on line 55 from `/[\s,;:.?!()[\]{}/\\]+/u` to `/[\s,;.?!()[\]{}/\\]+/u` — same one-character delete.

- [ ] **Step 3: Update the comment on line 96 that mentions the colon example**

The current explanatory comment above the `primaryTokenSet.has(t)` check (line 94–96) reads:

```ts
    // Exact word match in the primary title — robust against punctuation
    // such as a trailing period or colon, which a substring check would
    // miss (e.g. title "IAM:" with `t === "iam"`).
```

Replace `period or colon` with `period`, since `:` is no longer a split character:

```ts
    // Exact word match in the primary title — robust against punctuation
    // such as a trailing period, which a substring check would miss
    // (e.g. title "IAM." with `t === "iam"`).
```

- [ ] **Step 4: Verify lint passes**

Run: `npm run lint`
Expected: `✔ No ESLint warnings or errors`

- [ ] **Step 5: Verify build passes**

Run: `npm run build`
Expected: build succeeds, 24 pages emitted, no TypeScript errors.

- [ ] **Step 6: Commit Task 1**

```bash
git add lib/search.ts
git commit -m "fix(search): stop splitting tokens on colon

Branded AWS service names like re:Post and re:Invent were tokenised
into ['re', 'post'] / ['re', 'invent'], which made them unfindable
because the 're' token matched dozens of unrelated entries (region,
redshift, reserved, etc.) and drowned the actual entry.

Removing ':' from the tokeniser split regex keeps these names as
single high-specificity tokens that substring-match the haystack
exactly. Other punctuation (whitespace, comma, semicolon, period,
brackets, slashes) still splits as before.

Refs docs/superpowers/specs/2026-06-03-search-punctuation-fix-design.md §3.1"
```

---

## Task 2 — Index: append a punctuation-collapsed haystack variant

**Why second:** Builds on Task 1. After this task, no-colon queries (`repost`, `reinvent`) also work.

**Files:**
- Modify: `lib/searchIndex.ts:107-164` (the `buildIndex` function)

- [ ] **Step 1: Add a `collapsePunctuation` helper near the top of `searchIndex.ts`**

In `lib/searchIndex.ts`, after the existing `normalize` function (which ends at line 63) and before `sectionText` (which starts at line 66), insert:

```ts
/**
 * Build a "punctuation-collapsed" copy of an already-normalised haystack
 * by removing colons. Lets a query like `repost` substring-match an
 * indexed phrase like `re:post`, since the original phrase is preserved
 * separately for queries that DO include the colon.
 *
 * Returns the input unchanged if there is nothing to collapse, so callers
 * can cheaply skip appending a duplicate string.
 */
function collapsePunctuation(normalised: string): string {
  return normalised.replace(/:/g, "");
}
```

Keep the regex narrow — only `:`, not `&` or `.` — per the spec's "remove only `:`" decision.

- [ ] **Step 2: Use the helper when building the topic-level haystack**

In `lib/searchIndex.ts`, locate the topic-level haystack construction at lines 118–127:

```ts
const topicHaystack = normalize(
  [
    topic.title,
    topic.subtitle,
    topic.category,
    description,
    keyPointsText,
    tagsText,
  ].join(" "),
);
```

Replace those lines with:

```ts
const topicBaseHaystack = normalize(
  [
    topic.title,
    topic.subtitle,
    topic.category,
    description,
    keyPointsText,
    tagsText,
  ].join(" "),
);
const topicCollapsed = collapsePunctuation(topicBaseHaystack);
const topicHaystack =
  topicCollapsed === topicBaseHaystack
    ? topicBaseHaystack
    : `${topicBaseHaystack} ${topicCollapsed}`;
```

The conditional avoids appending a duplicate string for the common case where the haystack contains no `:`.

- [ ] **Step 3: Use the helper when building the section-level haystack**

In `lib/searchIndex.ts`, locate the section-level haystack construction at lines 142–146 (inside the `for (const section of topic.sections)` loop):

```ts
const flatText = sectionText(section.content);
const haystack = normalize(
  [section.title, flatText].join(" "),
);
```

Replace those lines with:

```ts
const flatText = sectionText(section.content);
const baseHaystack = normalize(
  [section.title, flatText].join(" "),
);
const collapsed = collapsePunctuation(baseHaystack);
const haystack =
  collapsed === baseHaystack
    ? baseHaystack
    : `${baseHaystack} ${collapsed}`;
```

- [ ] **Step 4: Verify lint passes**

Run: `npm run lint`
Expected: `✔ No ESLint warnings or errors`

- [ ] **Step 5: Verify build passes**

Run: `npm run build`
Expected: build succeeds, 24 pages emitted, no TypeScript errors.

- [ ] **Step 6: Commit Task 2**

```bash
git add lib/searchIndex.ts
git commit -m "feat(search): index a punctuation-collapsed haystack variant

Append a copy of each haystack with ':' removed, so a no-colon query
like 'repost' substring-matches an indexed phrase like 're:post'. The
original phrase is preserved alongside, so colon-bearing queries
('re:post', 're:Post') still match too.

Conditional append keeps memory overhead near zero for the common
case where a haystack contains no colon.

Refs docs/superpowers/specs/2026-06-03-search-punctuation-fix-design.md §3.2"
```

---

## Task 3 — Index: add `cardTitleTokens` field to section entries

**Why third:** Independent of Task 2. Once landed, services living only inside grid cards (Knowledge Center, Prescriptive Guidance, Professional Services) get a meaningful score boost.

**Files:**
- Modify: `lib/searchIndex.ts` (type definition + helper + buildIndex)

- [ ] **Step 1: Add the `cardTitleTokens` field to the section variant of `SearchEntry`**

In `lib/searchIndex.ts`, locate the type definition at lines 20–43:

```ts
export type SearchEntry =
  | {
      kind: "topic";
      // ...
    }
  | {
      kind: "section";
      slug: string;
      sectionId: string;
      sectionTitle: string;
      topicTitle: string;
      categoryKey: CategoryKey;
      sectionNumber: string;
      stephaneIndex: number;
      snippet: string;
      haystack: string;
    };
```

Add an optional `cardTitleTokens` field to the section variant. After `haystack: string;` (line 42) inside the section branch, insert one line so the section branch becomes:

```ts
  | {
      kind: "section";
      slug: string;
      sectionId: string;
      sectionTitle: string;
      topicTitle: string;
      categoryKey: CategoryKey;
      sectionNumber: string;
      stephaneIndex: number;
      snippet: string;
      haystack: string;
      cardTitleTokens?: Set<string>;
    };
```

Optional (`?`) so future entries with no grid items don't need to set it.

- [ ] **Step 2: Add a `gridCardTokens` helper that walks a section's content and collects tokens from grid-item titles**

In `lib/searchIndex.ts`, after the existing `sectionText` function (which ends at line 93) and before the existing `truncate` function (which starts at line 96), insert:

```ts
/**
 * Walk a section's content and collect tokens taken from every grid
 * item's title. Used by the search scorer to award a small boost when a
 * query token hits a grid-card title — services like AWS Knowledge
 * Center and AWS Prescriptive Guidance live only inside grid cards, not
 * in the section's own title, so without this they ranked too low.
 *
 * Returns `undefined` for sections with no grid cards, so we can leave
 * the optional `cardTitleTokens` field unset on those entries.
 */
function gridCardTokens(content: SectionContent[]): Set<string> | undefined {
  const titles: string[] = [];
  for (const c of content) {
    if (c.type === "grid") {
      for (const item of c.items) {
        const stripped = stripHtml(item.title);
        if (stripped) titles.push(stripped);
      }
    }
  }
  if (titles.length === 0) return undefined;

  const tokens = new Set<string>();
  for (const title of titles) {
    const normalised = normalize(title);
    // Same split character class as `tokenize` and `primaryTitleTokens`
    // in lib/search.ts (without ':') so behaviour stays symmetric.
    for (const part of normalised.split(/[\s,;.?!()[\]{}/\\]+/u)) {
      if (part) tokens.add(part);
    }
  }
  return tokens;
}
```

- [ ] **Step 3: Populate `cardTitleTokens` when emitting each section entry**

In `lib/searchIndex.ts`, locate the section-entry `out.push` block at lines 148–159:

```ts
out.push({
  kind: "section",
  slug: topic.slug,
  sectionId: section.id,
  sectionTitle: section.title,
  topicTitle: topic.title,
  categoryKey,
  sectionNumber,
  stephaneIndex: idx,
  snippet: truncate(flatText, 140),
  haystack,
});
```

Replace with:

```ts
const cardTitleTokens = gridCardTokens(section.content);

out.push({
  kind: "section",
  slug: topic.slug,
  sectionId: section.id,
  sectionTitle: section.title,
  topicTitle: topic.title,
  categoryKey,
  sectionNumber,
  stephaneIndex: idx,
  snippet: truncate(flatText, 140),
  haystack,
  cardTitleTokens,
});
```

When `cardTitleTokens` is `undefined`, TypeScript will preserve the optional-field semantics — the property may exist on the object as `undefined`, which is fine; the consumer in `lib/search.ts` will handle that with optional chaining.

- [ ] **Step 4: Verify lint passes**

Run: `npm run lint`
Expected: `✔ No ESLint warnings or errors`

- [ ] **Step 5: Verify build passes**

Run: `npm run build`
Expected: build succeeds, 24 pages emitted, no TypeScript errors.

- [ ] **Step 6: Commit Task 3**

```bash
git add lib/searchIndex.ts
git commit -m "feat(search): collect grid-card title tokens per section entry

Many AWS services in the corpus live only inside grid-card titles
(AWS Knowledge Center, AWS Prescriptive Guidance, AWS Professional
Services, AWS re:Post). Their parent section's title doesn't mention
them, so the existing title-boost path never fires and they rank too
low.

Collect grid-item title tokens into an optional cardTitleTokens Set
on each section entry. The scorer in lib/search.ts will boost matches
on these tokens in the next commit.

Refs docs/superpowers/specs/2026-06-03-search-punctuation-fix-design.md §3.3"
```

---

## Task 4 — Score: boost grid-card title hits

**Why fourth:** Final step. Activates the data added in Task 3 by giving it a meaningful weight in `scoreEntry`.

**Files:**
- Modify: `lib/search.ts` (inside `scoreEntry`)

- [ ] **Step 1: Add the cardTitleTokens boost to `scoreEntry`**

In `lib/search.ts`, locate the per-token loop inside `scoreEntry` at lines 84–102:

```ts
for (const t of tokens) {
  let hit = false;
  if (entry.haystack.includes(t)) {
    score += 1;
    hit = true;
  }
  if (titleHay.includes(t)) {
    score += titleBoost;
    hit = true;
  }
  // Exact word match in the primary title — robust against punctuation
  // such as a trailing period, which a substring check would miss
  // (e.g. title "IAM." with `t === "iam"`).
  if (primaryTokenSet.has(t)) {
    score += 2;
    hit = true;
  }
  if (hit) matched.push(t);
}
```

Insert a new block after the `primaryTokenSet.has(t)` check and before the `if (hit) matched.push(t);` line. The full updated loop should read:

```ts
for (const t of tokens) {
  let hit = false;
  if (entry.haystack.includes(t)) {
    score += 1;
    hit = true;
  }
  if (titleHay.includes(t)) {
    score += titleBoost;
    hit = true;
  }
  // Exact word match in the primary title — robust against punctuation
  // such as a trailing period, which a substring check would miss
  // (e.g. title "IAM." with `t === "iam"`).
  if (primaryTokenSet.has(t)) {
    score += 2;
    hit = true;
  }
  // Grid-card title hit: services like "AWS Knowledge Center" or "AWS
  // re:Post" often live only inside a section's grid items, not its
  // own title. Boost weight (+3) sits between the section title boost
  // (+5) and the primary-title prefix nudge (+2) — grid-card titles
  // are slightly less authoritative than the section title itself.
  if (entry.kind === "section" && entry.cardTitleTokens?.has(t)) {
    score += 3;
    hit = true;
  }
  if (hit) matched.push(t);
}
```

- [ ] **Step 2: Verify lint passes**

Run: `npm run lint`
Expected: `✔ No ESLint warnings or errors`

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: build succeeds, 24 pages emitted, no TypeScript errors.

- [ ] **Step 4: Commit Task 4**

```bash
git add lib/search.ts
git commit -m "feat(search): boost matches on grid-card title tokens

Award +3 when a query token exactly matches a grid-card title token
on a section entry. Sits between the section-title boost (+5) and the
primary-title prefix nudge (+2), reflecting that grid cards are less
authoritative than the section title itself but more authoritative
than a plain body match.

Combined with Tasks 1-3, this surfaces services that previously ranked
too low: AWS Knowledge Center, AWS Prescriptive Guidance, AWS
Professional Services, AWS re:Post, AWS re:Invent, AWS Solutions
Architects.

Refs docs/superpowers/specs/2026-06-03-search-punctuation-fix-design.md §3.3"
```

---

## Task 5 — Manual smoke test

**Why last:** All four code changes are landed; this is the user-visible verification step. Spec §5 step 3 lists 9 expected-pass queries and step 4 lists 6 regression queries. We run all 15.

**Files:** none modified — this task is purely verification.

- [ ] **Step 1: Start the dev server**

Run: `npm run dev`
Expected: server boots on `http://localhost:3000` with no errors.

- [ ] **Step 2: Smoke test — colon-bearing queries (must each rank in top 1 unless noted)**

Open `http://localhost:3000` in a browser. Use the navbar search box. For each query below, type the query and confirm the listed expected entry appears at the listed rank in the dropdown:

| Query | Expected entry | Rank target |
|---|---|---|
| `re:Post` | "Technical Resources, Partners & Trust" section in Account Management | top 1 |
| `re:post` | same | top 1 |
| `repost` | same | top 3 |
| `re post` | same | top 3 |
| `re:Invent` | section mentioning re:Invent in exam-tips or account-management | top 3 |
| `reinvent` | same | top 3 |

- [ ] **Step 3: Smoke test — grid-card title queries (must each rank in top 3)**

| Query | Expected entry | Rank target |
|---|---|---|
| `Knowledge Center` | "Technical Resources, Partners & Trust" | top 3 |
| `Prescriptive Guidance` | "Technical Resources, Partners & Trust" | top 3 |
| `Professional Services` | "Technical Resources, Partners & Trust" | top 3 |

- [ ] **Step 4: Regression check — existing-good queries (must each rank #1)**

| Query | Expected #1 |
|---|---|
| `iam` | IAM topic card |
| `ec2` | EC2 topic card |
| `s3` | S3 topic card |
| `vpc` | VPC topic card |
| `lambda` | Other Compute topic card OR a Lambda-specific section |
| `route 53` | Global Infrastructure topic card OR its Route 53 section |

- [ ] **Step 5: If any rank target fails**

Investigate the score breakdown (you can `console.log` inside `scoreEntry` temporarily, then revert). Common causes:
- Token still being split unexpectedly → check Task 1 regex change applied correctly.
- Haystack not containing the collapsed variant → verify Task 2 conditional and that the entry's source text actually contains a `:`.
- `cardTitleTokens` empty for the entry → verify Task 3 helper is collecting from the right grid items (`item.title`, not `item.description`).

Fix and re-run all 15 queries. Do not skip the regression set just because the new queries pass.

- [ ] **Step 6: Stop the dev server**

`Ctrl+C` in the terminal running `npm run dev`.

- [ ] **Step 7: Final verification commit (no code change)**

If all 15 queries passed and no code was added during the smoke test, there's nothing new to commit. Skip this step.

If you had to add a `console.log` for debugging and reverted it, run:

```bash
git status
```

Expected: `nothing to commit, working tree clean`. If anything is dirty, inspect with `git diff` and either revert (`git checkout -- <file>`) or commit if intentional.

---

## Self-review

Run this checklist after writing the plan, before handing it off.

**1. Spec coverage:**
- §3.1 (drop `:` from tokenizer) → Task 1 ✅
- §3.2 (collapsed haystack variant) → Task 2 ✅
- §3.3 (grid-card title boost) → Tasks 3 + 4 ✅
- §4 (type change `cardTitleTokens?: Set<string>`) → Task 3 Step 1 ✅
- §5 verification queries (9 + 6) → Task 5 ✅
- §7 (only `lib/searchIndex.ts` and `lib/search.ts` touched) ✅

**2. Placeholder scan:** No "TBD", "TODO", "implement later", or vague "add appropriate X" steps. Each step shows the exact code to write. ✅

**3. Type consistency:**
- `cardTitleTokens?: Set<string>` declared in Task 3 Step 1, populated in Task 3 Step 3 (returns `Set<string> | undefined` from `gridCardTokens`), consumed in Task 4 Step 1 via `entry.cardTitleTokens?.has(t)` — names and types match throughout. ✅
- `collapsePunctuation` helper signature `(normalised: string) => string` is identical at definition and both call sites. ✅
- `gridCardTokens` returns `Set<string> | undefined`; the section entry assigns it directly to `cardTitleTokens` (which is `Set<string> | undefined` because of the optional `?`). Compatible. ✅

**4. Regex consistency:** The split regex without `:` appears in Task 1 Step 1 (`tokenize`), Task 1 Step 2 (`primaryTitleTokens`), and Task 3 Step 2 (`gridCardTokens`). All three identical: `/[\s,;.?!()[\]{}/\\]+/u`. ✅

Plan ready.
