/**
 * Search index.
 *
 * Built once at module load by walking the `topics` array. Produces a flat
 * list of `SearchEntry` values representing topics and sections, each with
 * a normalised `haystack` string used for matching.
 *
 * Intentionally side-effect-free and synchronous: the index is small (~120
 * entries) and including it in the client bundle costs only a few KB after
 * gzip. Rebuilding lazily with `useEffect` would force a hydration boundary
 * we don't need.
 */
import { topics } from "@/data/index";
import type { SectionContent, TopicData } from "@/types/topic";
import {
  getCategoryAccent,
  type CategoryKey,
} from "./categoryAccents";

export type SearchEntry =
  | {
      kind: "topic";
      slug: string;
      title: string;
      subtitle: string;
      categoryKey: CategoryKey;
      sectionNumber: string; // "01" .. "20"
      stephaneIndex: number; // for sort tie-break
      snippet: string;
      haystack: string; // pre-normalised, lowercase
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
      cardTitleTokens?: Set<string>;
    };

/** Strip HTML tags and decode a few common entities. */
export function stripHtml(input: string): string {
  if (!input) return "";
  return input
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/** Normalise a string for matching: NFKC + lowercase. */
export function normalize(s: string): string {
  return s.normalize("NFKC").toLowerCase();
}

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

/** Flatten a section's content array into a single plain-text string. */
function sectionText(content: SectionContent[]): string {
  const parts: string[] = [];
  for (const c of content) {
    switch (c.type) {
      case "paragraph":
        parts.push(stripHtml(c.text));
        break;
      case "list":
        for (const item of c.items) parts.push(stripHtml(item));
        break;
      case "code":
        if (c.caption) parts.push(stripHtml(c.caption));
        parts.push(c.code);
        break;
      case "grid":
        for (const item of c.items) {
          parts.push(stripHtml(item.title));
          parts.push(stripHtml(item.description));
        }
        break;
      case "callout":
        parts.push(stripHtml(c.title));
        parts.push(stripHtml(c.text));
        break;
    }
  }
  return parts.join(" ");
}

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

/** Truncate a snippet to roughly N characters, breaking on whitespace. */
function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut) + "…";
}

function categoryKeyForTopic(topic: TopicData): CategoryKey {
  return getCategoryAccent(topic.slug, topic.category).key;
}

function buildIndex(): SearchEntry[] {
  const out: SearchEntry[] = [];

  topics.forEach((topic, idx) => {
    const sectionNumber = String(idx + 1).padStart(2, "0");
    const categoryKey = categoryKeyForTopic(topic);

    // Topic-level entry
    const description = stripHtml(topic.description);
    const keyPointsText = topic.keyPoints.map(stripHtml).join(" ");
    const tagsText = (topic.tags ?? []).join(" ");
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

    out.push({
      kind: "topic",
      slug: topic.slug,
      title: topic.title,
      subtitle: topic.subtitle,
      categoryKey,
      sectionNumber,
      stephaneIndex: idx,
      snippet: truncate(description, 140),
      haystack: topicHaystack,
    });

    // Section-level entries
    for (const section of topic.sections) {
      const flatText = sectionText(section.content);
      const baseHaystack = normalize(
        [section.title, flatText].join(" "),
      );
      const collapsed = collapsePunctuation(baseHaystack);
      const haystack =
        collapsed === baseHaystack
          ? baseHaystack
          : `${baseHaystack} ${collapsed}`;
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
    }
  });

  return out;
}

/**
 * Module-level constant. Built once when the module is first imported.
 * Safe to import from both server and client components — it contains
 * only plain data and pure helpers.
 */
export const searchIndex: SearchEntry[] = buildIndex();
