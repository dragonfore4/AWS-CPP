/**
 * Render text with matched query tokens wrapped in <mark>.
 *
 * Splits the input string around case-insensitive token matches and returns
 * an array of React fragments. The <mark> elements have no visual style of
 * their own — `app/globals.css` styles `[data-search-result] mark` so the
 * highlight follows the result row's category accent without any inline
 * style overhead.
 */
import type { ReactNode } from "react";

/**
 * Build a single regex that matches any of the tokens, escaping regex
 * meta-characters. Tokens are matched case-insensitively.
 */
function buildPattern(tokens: string[]): RegExp | null {
  const cleaned = tokens
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (cleaned.length === 0) return null;
  // Sort longer tokens first so multi-word phrases win over substrings.
  cleaned.sort((a, b) => b.length - a.length);
  return new RegExp(`(${cleaned.join("|")})`, "gi");
}

export function highlightTokens(
  text: string,
  tokens: string[],
): ReactNode[] {
  if (!text) return [];
  const pattern = buildPattern(tokens);
  if (!pattern) return [text];

  const out: ReactNode[] = [];
  let lastIdx = 0;
  let key = 0;

  for (const match of text.matchAll(pattern)) {
    const start = match.index ?? 0;
    const end = start + match[0].length;
    if (start > lastIdx) {
      out.push(text.slice(lastIdx, start));
    }
    out.push(
      <mark key={`m-${key++}`}>{text.slice(start, end)}</mark>,
    );
    lastIdx = end;
  }
  if (lastIdx < text.length) {
    out.push(text.slice(lastIdx));
  }
  return out;
}
