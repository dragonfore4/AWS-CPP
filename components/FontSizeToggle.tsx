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
  return () => window.removeEventListener("storage", callback);
}

export default function FontSizeToggle() {
  const active = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.body.classList.remove("font-sm", "font-md", "font-lg");
    document.body.classList.add(`font-${active}`);
  }, [active]);

  const handleClick = useCallback((size: FontSize) => {
    setFontSize(size);
    document.body.classList.remove("font-sm", "font-md", "font-lg");
    document.body.classList.add(`font-${size}`);
  }, []);

  return (
    <div className="flex items-center gap-1">
      {sizes.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => handleClick(value)}
          className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
            active === value
              ? "bg-indigo-500 text-white"
              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          }`}
          aria-label={`Font size ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
