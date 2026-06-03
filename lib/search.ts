/**
 * Search query matcher.
 *
 * Tokenises the query, then scores each entry by counting token hits in the
 * pre-normalised `haystack`, with extra weight for matches in titles and
 * for prefix / exact-phrase hits. Entries with score 0 are dropped; the
 * remaining entries are sorted by score (desc) and Stephane order (asc).
 *
 * Fast enough for ~120 entries on every keystroke without a worker.
 */
import { normalize, type SearchEntry } from "./searchIndex";

export interface ScoredEntry {
  entry: SearchEntry;
  score: number;
  matchedTokens: string[];
}

/**
 * Tokenise a query string into normalised tokens. Splits on whitespace and
 * common punctuation, drops empty tokens, deduplicates.
 */
export function tokenize(query: string): string[] {
  const norm = normalize(query.trim());
  if (!norm) return [];
  const parts = norm.split(/[\s,;.?!()[\]{}/\\]+/u).filter(Boolean);
  return Array.from(new Set(parts));
}

function titleHaystack(entry: SearchEntry): string {
  if (entry.kind === "topic") {
    return normalize(`${entry.title} ${entry.subtitle}`);
  }
  return normalize(`${entry.topicTitle} ${entry.sectionTitle}`);
}

function primaryTitle(entry: SearchEntry): string {
  return entry.kind === "topic"
    ? normalize(entry.title)
    : normalize(entry.sectionTitle);
}

/**
 * Tokenise the primary title (topic title or section title) into a Set so
 * we can check for a word-boundary match on a token in O(1). Splits on the
 * same character class as `tokenize()` so behaviour is symmetric.
 *
 * Used by the +2 prefix/word-boundary boost in `scoreEntry`. Doing this
 * once per entry per query is cheap because the index is small (~120
 * entries) and the result is reused for every token in the query.
 */
function primaryTitleTokens(entry: SearchEntry): Set<string> {
  return new Set(
    primaryTitle(entry)
      .split(/[\s,;.?!()[\]{}/\\]+/u)
      .filter(Boolean),
  );
}

/**
 * Score an entry against a list of normalised query tokens.
 *
 * - Each token that appears in the haystack: +1
 * - Each token that appears in the title haystack: +10 (topic) / +5 (section)
 * - Each token that appears at a word boundary as a prefix in the primary
 *   title: +2 (small extra nudge for "iam" matching the topic "IAM")
 * - The full normalised query as a contiguous phrase in the haystack: +3
 *
 * Returns 0 when no tokens hit at all so the caller can drop the entry.
 */
function scoreEntry(
  entry: SearchEntry,
  tokens: string[],
  fullQuery: string,
): { score: number; matched: string[] } {
  if (tokens.length === 0) return { score: 0, matched: [] };

  const matched: string[] = [];
  let score = 0;
  const titleHay = titleHaystack(entry);
  const primaryTokenSet = primaryTitleTokens(entry);
  const titleBoost = entry.kind === "topic" ? 10 : 5;

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
    // own title. Boost weight (+5) matches the section-title boost — a
    // grid-card title is an author-curated label inside a curated
    // content unit, near-equivalent in authority to the section title
    // for queries whose tokens match it exactly.
    if (entry.kind === "section" && entry.cardTitleTokens?.has(t)) {
      score += 5;
      hit = true;
    }
    if (hit) matched.push(t);
  }

  if (score === 0) return { score: 0, matched: [] };

  if (fullQuery && entry.haystack.includes(fullQuery)) {
    score += 3;
  }

  return { score, matched };
}

/**
 * Search the index. Returns at most `limit` results, ranked by score, with
 * Stephane course order as a stable tie-breaker.
 */
export function searchEntries(
  index: SearchEntry[],
  query: string,
  limit = 30,
): ScoredEntry[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  const fullQuery = normalize(query.trim());

  const scored: ScoredEntry[] = [];
  for (const entry of index) {
    const { score, matched } = scoreEntry(entry, tokens, fullQuery);
    if (score > 0) {
      scored.push({ entry, score, matchedTokens: matched });
    }
  }

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.entry.stephaneIndex !== b.entry.stephaneIndex) {
      return a.entry.stephaneIndex - b.entry.stephaneIndex;
    }
    // Topics rank above sections of the same topic.
    if (a.entry.kind !== b.entry.kind) {
      return a.entry.kind === "topic" ? -1 : 1;
    }
    return 0;
  });

  return scored.slice(0, limit);
}
