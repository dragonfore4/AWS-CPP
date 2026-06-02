"use client";

interface Props {
  tags: string[];
  selected: string | null;
  onSelect: (tag: string | null) => void;
}

/**
 * Horizontally scrollable chip row. Clicking a chip filters the list to
 * memos with that tag. Clicking the active chip again clears the filter.
 */
export default function TagFilter({ tags, selected, onSelect }: Props) {
  if (tags.length === 0) return null;

  return (
    <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto py-0.5">
      {tags.map((tag) => {
        const active = tag === selected;
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onSelect(active ? null : tag)}
            className={
              active
                ? "shrink-0 rounded-full border border-[var(--ink)] bg-[var(--ink)] px-2.5 py-0.5 text-xs text-[var(--bg)]"
                : "shrink-0 rounded-full border border-[var(--rule)] bg-[var(--bg-elev)] px-2.5 py-0.5 text-xs text-[var(--ink-muted)] hover:border-[var(--rule-strong)] hover:text-[var(--ink)]"
            }
          >
            #{tag}
          </button>
        );
      })}
    </div>
  );
}
