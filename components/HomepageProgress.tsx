"use client";

import { useSyncExternalStore } from "react";
import { getAllProgress } from "@/lib/progress";
import { QuizProgress } from "@/types/topic";

/**
 * Cached snapshot of progress.
 *
 * `useSyncExternalStore` requires `getSnapshot` to return a stable
 * reference between calls when the underlying data hasn't changed. The
 * naive implementation `() => getAllProgress()` returns a fresh object
 * every render, which makes React believe the store changed every time
 * and produces an "infinite loop" warning + cascading renders.
 *
 * We cache the last-computed snapshot and only invalidate it when our
 * subscribe callback fires (i.e., when localStorage actually changed).
 */
let cached: Record<string, QuizProgress> | null = null;
const EMPTY: Record<string, QuizProgress> = {};

function getSnapshot(): Record<string, QuizProgress> {
  if (cached) return cached;
  cached = getAllProgress();
  return cached;
}

function getServerSnapshot(): Record<string, QuizProgress> {
  return EMPTY;
}

function subscribe(callback: () => void): () => void {
  const invalidate = () => {
    cached = null;
    callback();
  };
  // Cross-tab updates fire `storage`. Same-tab updates fire our custom event.
  window.addEventListener("storage", invalidate);
  window.addEventListener("quiz-progress-change", invalidate);
  return () => {
    window.removeEventListener("storage", invalidate);
    window.removeEventListener("quiz-progress-change", invalidate);
  };
}

/**
 * Render the quiz score for a single topic, or a thin em-dash when there is
 * no progress yet. The component is intentionally tiny so it only hydrates a
 * leaf in the otherwise server-rendered topic list.
 */
export default function HomepageProgress({ slug }: { slug: string }) {
  const all = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const progress = all[slug];

  if (!progress) {
    return <span className="text-[var(--ink-faint)]" aria-hidden>—</span>;
  }

  const pct = progress.total === 0 ? 0 : (progress.score / progress.total) * 100;

  return (
    <span
      className="inline-flex items-center gap-2 tabular-nums text-[var(--ink-muted)]"
      aria-label={`Quiz progress: ${progress.score} of ${progress.total}`}
    >
      <span>
        {progress.score}/{progress.total}
      </span>
      <span
        aria-hidden
        className="relative inline-block h-1 w-10 overflow-hidden rounded-full bg-[var(--rule)]"
      >
        <span
          className="absolute inset-y-0 left-0 bg-[var(--ink-muted)]"
          style={{ width: `${pct}%` }}
        />
      </span>
    </span>
  );
}
