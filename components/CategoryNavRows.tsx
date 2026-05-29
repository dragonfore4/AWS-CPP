import Link from "next/link";
import { topics } from "@/data/index";
import {
  getCategoryAccent,
  categoryOrder,
  getAccentByKey,
  type CategoryKey,
} from "@/lib/categoryAccents";

/**
 * Six rows, one per AWS service category. Each row keeps a fixed-width
 * label column on the left so labels stay aligned even when the topic
 * list wraps onto two lines on narrow viewports.
 *
 * Active topic: bold + accent text + subtle tinted box with a 1px ring
 * in the accent colour. Inactive topics: muted ink with a hover swap.
 */
export default function CategoryNavRows({
  activeSlug,
}: {
  activeSlug?: string;
}) {
  const grouped = new Map<CategoryKey, typeof topics>();
  for (const t of topics) {
    const key = getCategoryAccent(t.slug, t.category).key;
    const list = grouped.get(key) ?? [];
    list.push(t);
    grouped.set(key, list);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 sm:py-4">
      <ul className="space-y-1.5">
        {categoryOrder.map((key) => {
          const list = grouped.get(key);
          if (!list || list.length === 0) return null;
          const accent = getAccentByKey(key);

          return (
            <li
              key={key}
              className="grid grid-cols-1 gap-x-5 md:grid-cols-[8.5rem_minmax(0,1fr)] md:items-baseline"
            >
              <div
                className={
                  "text-[10px] uppercase tracking-[0.16em] font-semibold pt-1.5 " +
                  accent.text
                }
              >
                {accent.label}
              </div>
              <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
                {list.map((t) => {
                  const isActive = t.slug === activeSlug;
                  return (
                    <Link
                      key={t.slug}
                      href={`/topics/${t.slug}`}
                      aria-current={isActive ? "page" : undefined}
                      className={
                        "inline-block rounded px-2 py-1 text-sm leading-snug transition-colors " +
                        (isActive
                          ? `font-semibold ${accent.text} ${accent.tint} ring-1 ring-inset ${accent.border}`
                          : "text-[var(--ink-muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]")
                      }
                    >
                      {t.title}
                    </Link>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
