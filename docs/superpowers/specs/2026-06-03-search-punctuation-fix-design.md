# Search — Punctuation & Grid-Card Fix — Design Spec

**Status:** Draft (awaiting user review)
**Date:** 2026-06-03
**Owner:** Site author (single user)

A targeted bug fix to `lib/search.ts` and `lib/searchIndex.ts` so that branded AWS service names containing a colon (e.g. `re:Post`, `re:Invent`) are reliably found by the in-browser search box, and so that services living inside grid-card titles (e.g. AWS Knowledge Center, AWS Prescriptive Guidance, AWS Professional Services) rank near the top instead of being buried in the result list.

---

## 1. Goals & non-goals

### Goals
- Searching for `re:Post`, `re:post`, `repost`, or `re post` returns the AWS re:Post entry in the **top 3** results.
- The same behaviour applies to `re:Invent` / `reinvent` and to any future `<word>:<word>` AWS product name added to the corpus.
- Services whose name lives only inside a grid-card title (e.g. "AWS Knowledge Center", "AWS Prescriptive Guidance", "AWS Professional Services") are findable by their card title and rank in the top 3 for an exact-name query.
- No regression for queries that already work today — `iam`, `ec2`, `s3`, `vpc`, `lambda`, etc., must still rank their primary topic card #1.

### Non-goals (this unit of work)
- Adding any content to `data/topics/*.ts` (handled in a separate spec).
- Switching to a real fuzzy-match engine (Lunr/MiniSearch/Fuse.js). The current scoring approach is fine for ~120 entries and we don't want to add a dependency.
- Adding a test framework. Verification is manual smoke test in `npm run dev` (user's choice).
- Localising the tokenizer for Thai. Thai words don't contain colons; the bug is exclusive to English branded names with `:`.

---

## 2. Root cause analysis

Findings traced during brainstorming:

1. **Tokenizer splits on `:`.** `lib/search.ts` line 26 uses the regex `/[\s,;:.?!()[\]{}/\\]+/u` to split a query into tokens. Query `re:Post` becomes the tokens `["re", "post"]`.
2. **Haystack stores the literal text including the colon.** `lib/searchIndex.ts` only strips HTML tags + decodes a few entities + NFKC-lowercases the text. So the indexed haystack for the re:Post entry contains `re:post` (not `re post` and not `repost`).
3. **`re` matches noise.** The token `re` is a substring of "region", "redshift", "reserved", "regional", "response", "request", "report", "ready"… Dozens of unrelated entries score `+1` per token, drowning the actual re:Post entry.
4. **No title boost.** The grid-card title `AWS re:Post` lives inside a grid item title, not in the section's `title` field (`Technical Resources, Partners & Trust`) and not in the topic's `title` (`Account Management`). So the existing +5/+10/+2 title boosts never fire for any re:Post-related token.
5. **No-colon variant fails entirely.** A user typing `repost` (one token) gets zero hits because the haystack contains `re:post`, not `repost`.

The same bug profile affects `re:Invent` (in `exam-tips.ts` and `account-management.ts`), and would affect any future AWS product with a colon in its branded name.

---

## 3. Fix design

Three coordinated changes in `lib/searchIndex.ts` and `lib/search.ts`. All other files are unchanged.

### 3.1 Tokenizer — stop splitting on `:`

`lib/search.ts` lines 26 and 55: change the punctuation split regex.

```diff
- const parts = norm.split(/[\s,;:.?!()[\]{}/\\]+/u).filter(Boolean);
+ const parts = norm.split(/[\s,;.?!()[\]{}/\\]+/u).filter(Boolean);
```

Same change at line 55 inside `primaryTitleTokens`. Removing only `:` keeps every other split character — whitespace, comma, semicolon, period, `?`, `!`, brackets, slashes, backslash. This is the surgical option agreed during brainstorming.

After this change:
- Query `re:Post` → token `["re:post"]` (single high-specificity token)
- Query `re:post` → token `["re:post"]`
- Token `re:post` substring-matches haystack `re:post` → reliable hit
- Token `re:post` does NOT substring-match `region`, `redshift`, etc. — the noise problem is gone

Does **not** by itself fix the no-colon `repost` query — that's solved by §3.2.

### 3.2 Haystack — index a punctuation-collapsed variant

`lib/searchIndex.ts` `buildIndex()`: when constructing the section haystack, append a second normalised copy of the same text with `:` removed.

```ts
const flatText = sectionText(section.content);
const baseHaystack = normalize([section.title, flatText].join(" "));
const collapsedHaystack = baseHaystack.replace(/:/g, "");
const haystack =
  baseHaystack === collapsedHaystack
    ? baseHaystack
    : `${baseHaystack} ${collapsedHaystack}`;
```

Same pattern for the topic-level entry's haystack.

After this change, the re:Post entry's haystack contains both `re:post` AND `repost`, so:
- Query `repost` → token `["repost"]` → substring-matches `repost` in the collapsed half of the haystack → hit
- Query `re:post` → token `["re:post"]` → substring-matches `re:post` in the original half → hit
- Query `re post` → tokens `["re", "post"]` → both hit (each matches both halves)

The collapsed half is only appended when it differs from the original — keeps memory overhead near zero for the majority of entries that contain no colon.

### 3.3 Grid-card titles — explicit field with a small boost

`lib/searchIndex.ts`: when flattening a section's content, collect every grid item title into a new `cardTitleTokens: string[]` field on `SearchEntry` (section variant only — topic entries don't have grid cards directly). The tokens are produced with the same `tokenize`-style regex used in `search.ts` so behaviour stays symmetric.

```ts
function gridCardTitles(content: SectionContent[]): string[] {
  const titles: string[] = [];
  for (const c of content) {
    if (c.type === "grid") {
      for (const item of c.items) {
        const stripped = stripHtml(item.title);
        if (stripped) titles.push(stripped);
      }
    }
  }
  return titles;
}
```

Then on each section entry add:

```ts
cardTitleTokens: tokensFromTitles(gridCardTitles(section.content));
```

`lib/search.ts`: in `scoreEntry`, after the existing `primaryTitleTokens` boost, add:

```ts
if (entry.kind === "section" && entry.cardTitleTokens?.has(t)) {
  score += 3;
  hit = true;
}
```

The `+3` weight is intentionally between the section title boost (`+5`) and the existing `+2` title-prefix nudge — grid-card title hits are slightly less authoritative than the section title itself, but more authoritative than a generic body match.

After this change, a query like `Knowledge Center` or `Prescriptive Guidance` boosts the `technical-resources-partners` section in `account-management.ts` so it ranks above other sections that merely mention either word in passing.

---

## 4. Type changes

`SearchEntry` in `lib/searchIndex.ts` gains an optional field on the section variant:

```ts
| {
    kind: "section";
    // ...existing fields...
    cardTitleTokens?: Set<string>;
  };
```

Optional so older entries (or future ones with no grid) don't need a placeholder. The new field is a `Set<string>` for O(1) lookup, mirroring the existing `primaryTitleTokens` pattern.

The topic variant gains nothing — topic cards do not have grid items at the top level.

---

## 5. Verification plan

No test framework in the repo (confirmed by glob for `*.test.ts` / `*.spec.ts`). Verification is:

1. **`npm run lint`** — must pass with 0 errors.
2. **`npm run build`** — must emit 24 static pages cleanly.
3. **Manual smoke test in `npm run dev`** — type each query into the navbar search box; confirm the listed expected entry appears in the **top 3** results (top 1 marked "must"):

   | Query | Expected entry | Rank |
   |---|---|---|
   | `re:Post` | "Technical Resources, Partners & Trust" section in Account Management | top 1 |
   | `re:post` | same | top 1 |
   | `repost` | same | top 3 |
   | `re post` | same | top 3 |
   | `re:Invent` | section mentioning re:Invent (exam-tips or account-management) | top 3 |
   | `reinvent` | same | top 3 |
   | `Knowledge Center` | "Technical Resources, Partners & Trust" | top 3 |
   | `Prescriptive Guidance` | same | top 3 |
   | `Professional Services` | same | top 3 |

4. **Regression check** — these existing-good queries must still rank correctly:

   | Query | Expected #1 |
   |---|---|
   | `iam` | IAM topic card |
   | `ec2` | EC2 topic card |
   | `s3` | S3 topic card |
   | `vpc` | VPC topic card |
   | `lambda` | Other Compute → Lambda section, or topic-level if more specific |
   | `route 53` | Global Infrastructure topic or its Route 53 section |

If any expected ranking fails, fix and re-test before claiming completion. No tests = manual evidence required.

---

## 6. Out of scope but adjacent

These would also improve search but are explicitly **not** in this unit:

- Splitting tokens on `&` or `.` — introduces ambiguity (e.g. `vpc.ts` filename queries) and isn't needed to fix the reported bug.
- Adding fuzzy/typo tolerance (e.g. `repst` matching `repost`) — would need a real engine or Levenshtein distance per entry per keystroke, not justified.
- Highlighting matched grid-card titles in the search dropdown UI — a visual nicety; the current `<mark>` highlight works on the snippet only, but that's acceptable for now.

---

## 7. Files touched

- `lib/searchIndex.ts` — add collapsed haystack variant, add `cardTitleTokens` field on section entries, helper functions.
- `lib/search.ts` — drop `:` from two split regexes, add `cardTitleTokens` boost in `scoreEntry`.

That's all. No data files, no components, no docs.

---

## 8. Acceptance

This unit is complete when:
- All 9 queries in §5 step 3 pass their rank target.
- All 6 queries in §5 step 4 still pass their rank target.
- `npm run lint && npm run build` is green.
- A new audit-pass entry in `AUDIT.md` notes the fix (deferred to the Unit 2 commit so we don't re-edit AUDIT.md twice).
