import { TopicData } from "@/types/topic";

const WORDS_PER_MINUTE = 220;

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ");
}

function countWords(text: string): number {
  // Mixed Thai/English: count whitespace-delimited tokens for English,
  // approximate Thai by characters / 6 (rough average word length in Thai
  // for technical content). Good enough for an estimate.
  const stripped = stripHtml(text).replace(/\s+/g, " ").trim();
  if (!stripped) return 0;
  const ascii = stripped.replace(/[^\x00-\x7F]/g, " ").trim();
  const thai = stripped.replace(/[\x00-\x7F]/g, "").trim();
  const asciiWords = ascii ? ascii.split(/\s+/).length : 0;
  const thaiWords = thai ? Math.ceil(thai.length / 6) : 0;
  return asciiWords + thaiWords;
}

/**
 * Estimate read time for a topic, in minutes.
 *
 * Walks all section content + the topic description. Quiz is excluded
 * because reading-time is meant to describe the article portion, not the
 * interactive review.
 */
export function estimateReadingTime(topic: TopicData): number {
  let words = countWords(topic.description);

  for (const section of topic.sections) {
    words += countWords(section.title);
    for (const block of section.content) {
      switch (block.type) {
        case "paragraph":
          words += countWords(block.text);
          break;
        case "list":
          for (const item of block.items) words += countWords(item);
          break;
        case "code":
          // code reads slower per word; weight at ~0.5x
          words += Math.ceil(countWords(block.code) * 0.5);
          if (block.caption) words += countWords(block.caption);
          break;
        case "grid":
          for (const item of block.items) {
            words += countWords(item.title) + countWords(item.description);
          }
          break;
        case "callout":
          words += countWords(block.title) + countWords(block.text);
          break;
      }
    }
  }

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
