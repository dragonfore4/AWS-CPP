"use client";

import { useSyncExternalStore } from "react";

function getSnapshot(): number {
  if (typeof window === "undefined") return 0;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
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

export default function ReadingProgress() {
  const progress = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
