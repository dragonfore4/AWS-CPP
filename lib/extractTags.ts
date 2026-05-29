/**
 * Extract a small set of plain-text tags from a topic's keyPoints, used as
 * editorial-style metadata on the homepage list.
 *
 * Strategy: take the first phrase of each keyPoint (cut at em-dash, colon,
 * "—", "-", or comma), strip HTML, trim. Drop empties. Cap to N tags.
 */
export function extractTags(keyPoints: string[], max = 4): string[] {
  const seen = new Set<string>();
  const out: string[] = [];

  for (const raw of keyPoints) {
    if (out.length >= max) break;
    const stripped = raw.replace(/<[^>]*>/g, "").trim();
    if (!stripped) continue;

    // Cut at first separator
    const cut = stripped.split(/[—:\-,()]| - | – /u)[0]?.trim() ?? "";
    if (!cut) continue;

    // Squash whitespace, cap length so tags stay tight
    const tag = cut.replace(/\s+/g, " ");
    const short = tag.length > 28 ? tag.slice(0, 28).trimEnd() + "…" : tag;

    const key = short.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(short);
  }

  return out;
}
