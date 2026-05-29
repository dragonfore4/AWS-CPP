"use client";

import { useEffect, useSyncExternalStore, useCallback } from "react";
import { getFontSize, setFontSize, FontSize } from "@/lib/progress";

const sizes: { label: string; value: FontSize }[] = [
  { label: "S", value: "sm" },
  { label: "M", value: "md" },
  { label: "L", value: "lg" },
];

function getSnapshot(): FontSize {
  return getFontSize();
}

function getServerSnapshot(): FontSize {
  return "md";
}

function subscribe(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  window.addEventListener("font-size-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("font-size-change", callback);
  };
}

export default function FontSizeToggle() {
  const active = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.body.classList.remove("font-sm", "font-md", "font-lg");
    document.body.classList.add(`font-${active}`);
  }, [active]);

  const handleClick = useCallback((size: FontSize) => {
    setFontSize(size);
  }, []);

  return (
    <div
      role="radiogroup"
      aria-label="Font size"
      className="inline-flex items-center gap-0.5 rounded-md border border-[var(--rule)] bg-[var(--bg-elev)] p-0.5"
    >
      {sizes.map(({ label, value }) => {
        const isActive = active === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => handleClick(value)}
            aria-label={`Font size ${label}`}
            className={
              "inline-flex h-7 min-w-7 items-center justify-center rounded px-1.5 text-xs font-medium transition-colors " +
              (isActive
                ? "bg-[var(--bg-soft)] text-[var(--ink)]"
                : "text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-soft)]")
            }
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
