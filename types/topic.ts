export interface TopicData {
  slug: string;
  title: string;
  subtitle: string;
  /**
   * @deprecated The legacy per-topic accent colour is no longer read by UI.
   * Visual accents are derived from `category` via `lib/categoryAccents.ts`.
   * The field is kept for backward compatibility with existing data files.
   */
  accent: string;
  category: string;
  description: string;
  keyPoints: string[]; // bullet points shown on homepage card
  /**
   * Optional editorial-style metadata tags shown on the homepage list. If
   * omitted, the UI auto-derives a small set from `keyPoints[0..n]`.
   */
  tags?: string[];
  sections: Section[];
  quiz: QuizQuestion[];
}

export interface Section {
  id: string;
  title: string;
  content: SectionContent[];
}

export type SectionContent =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language?: string; code: string; caption?: string }
  | { type: "grid"; items: GridItem[] }
  | { type: "callout"; variant: "info" | "warning" | "tip"; title: string; text: string };

export interface GridItem {
  title: string;
  description: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number; // index of correct answer (0-based)
  explanation: string;
}

export interface QuizProgress {
  score: number;
  total: number;
  completedAt: string; // ISO date string
  answers: number[]; // user's selected answers
}
