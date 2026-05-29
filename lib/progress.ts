import { QuizProgress } from "@/types/topic";

const STORAGE_KEY_PREFIX = "quiz_progress_";
const FONT_SIZE_KEY = "font_size_preference";

export function getQuizProgress(slug: string): QuizProgress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${slug}`);
    if (!raw) return null;
    return JSON.parse(raw) as QuizProgress;
  } catch {
    return null;
  }
}

export function saveQuizProgress(slug: string, progress: QuizProgress): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${slug}`, JSON.stringify(progress));
  } catch {
    // localStorage might be full or unavailable
  }
}

export function getAllProgress(): Record<string, QuizProgress> {
  if (typeof window === "undefined") return {};
  const result: Record<string, QuizProgress> = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(STORAGE_KEY_PREFIX)) {
        const slug = key.replace(STORAGE_KEY_PREFIX, "");
        const raw = localStorage.getItem(key);
        if (raw) {
          result[slug] = JSON.parse(raw) as QuizProgress;
        }
      }
    }
  } catch {
    // ignore
  }
  return result;
}

export type FontSize = "sm" | "md" | "lg";

export function getFontSize(): FontSize {
  if (typeof window === "undefined") return "md";
  try {
    const size = localStorage.getItem(FONT_SIZE_KEY);
    if (size === "sm" || size === "md" || size === "lg") return size;
    return "md";
  } catch {
    return "md";
  }
}

export function setFontSize(size: FontSize): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(FONT_SIZE_KEY, size);
    document.body.className = document.body.className
      .replace(/font-(sm|md|lg)/g, "")
      .trim();
    document.body.classList.add(`font-${size}`);
  } catch {
    // ignore
  }
}
