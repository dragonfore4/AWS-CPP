"use client";

import { useEffect, useState } from "react";
import { Section } from "@/types/topic";
import type { CategoryAccent } from "@/lib/categoryAccents";

/**
 * Sticky right-rail table of contents for topic pages. Tracks which section
 * is currently in the viewport via IntersectionObserver and highlights the
 * matching link.
 *
 * Mounted as a sibling of the article in the topic page layout, hidden on
 * narrow viewports (< lg) — small screens get a `<details>` fallback in the
 * topic page itself.
 */
export default function TopicTOC({
  sections,
  accent,
}: {
  sections: Section[];
  accent: CategoryAccent;
}) {
  const [activeId, setActiveId] = useState<string | null>(
    sections[0]?.id ?? null
  );

  useEffect(() => {
    if (sections.length === 0) return;

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (elements.length === 0) return;

    // Track the topmost section whose top is above the highlight line.
    // Using rootMargin to bias the trigger zone to the upper third.
    const observer = new IntersectionObserver(
      (entries) => {
        // Build a fresh map of which sections are currently intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target.id);
        if (visible.length > 0) {
          // Pick the section with the smallest index in the original order
          // that is intersecting — i.e. the one nearest the top.
          const ordered = sections
            .map((s) => s.id)
            .filter((id) => visible.includes(id));
          if (ordered[0]) setActiveId(ordered[0]);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: [0, 0.1, 0.5],
      }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <aside
      data-toc
      className="hidden lg:block lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto"
      aria-label="Sections in this topic"
    >
      <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
        ในหน้านี้
      </div>
      <ol className="mt-3 space-y-1.5">
        {sections.map((s, i) => {
          const isActive = s.id === activeId;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={
                  "flex items-baseline gap-2 rounded py-0.5 text-sm transition-colors " +
                  (isActive
                    ? `${accent.text} font-medium`
                    : "text-[var(--ink-muted)] hover:text-[var(--ink)]")
                }
              >
                <span className="font-mono text-[10px] tabular-nums text-[var(--ink-faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-snug">{s.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
