"use client";

import { useSyncExternalStore } from "react";

function getSnapshot(): number {
  if (typeof window === "undefined") return 0;
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  if (docHeight <= 0) return 0;
  return Math.min((scrollTop / docHeight) * 100, 100);
}

function getServerSnapshot(): number {
  return 0;
}

function subscribe(callback: () => void): () => void {
  window.addEventListener("scroll", callback, { passive: true });
  window.addEventListener("resize", callback, { passive: true });
  return () => {
    window.removeEventListener("scroll", callback);
    window.removeEventListener("resize", callback);
  };
}

/**
 * Slim 2px reading-progress bar fixed to the very top of the viewport.
 *
 * The accent colour is passed in as an inline `color` so the bar inherits
 * the topic's category accent without dragging the whole categoryAccents
 * map into a client bundle. A solid colour reads as a deliberate editorial
 * device; a gradient reads as a generic AI dashboard accent.
 */
export default function ReadingProgress({ color }: { color?: string }) {
  const progress = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return (
    <div
      data-reading-progress
      aria-hidden
      className="reading-progress-bar"
      style={{ width: `${progress}%`, color: color ?? "var(--ink)" }}
    />
  );
}
