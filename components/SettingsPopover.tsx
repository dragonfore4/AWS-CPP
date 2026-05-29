"use client";

import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import FontSizeToggle from "./FontSizeToggle";
import { Type } from "./Icon";

/**
 * Compact settings popover anchored to a small button. Holds the theme and
 * font-size controls together so they don't clutter the navbar.
 *
 * Implemented with a controlled state + click-outside / ESC handling rather
 * than <dialog>, because we want the panel to feel like a menu (anchored,
 * non-modal), not a modal.
 */
export default function SettingsPopover() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative" data-settings>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Display settings"
        onClick={() => setOpen((v) => !v)}
        className={
          "inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--rule)] bg-[var(--bg-elev)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-soft)] transition-colors " +
          (open ? "text-[var(--ink)]" : "")
        }
      >
        <Type size={15} strokeWidth={1.7} aria-hidden />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+6px)] z-50 w-[220px] rounded-md border border-[var(--rule)] bg-[var(--bg-elev)] p-3 shadow-lg shadow-black/5"
        >
          <div className="space-y-3">
            <div>
              <div className="mb-1.5 text-[10px] uppercase tracking-[0.12em] text-[var(--ink-faint)]">
                Theme
              </div>
              <ThemeToggle />
            </div>
            <div>
              <div className="mb-1.5 text-[10px] uppercase tracking-[0.12em] text-[var(--ink-faint)]">
                Font size
              </div>
              <FontSizeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
