import Link from "next/link";
import { topics } from "@/data/index";
import {
  categoryOrder,
  getAccentByKey,
  getCategoryAccent,
  type CategoryKey,
} from "@/lib/categoryAccents";
import { extractTags } from "@/lib/extractTags";
import { CategoryIcon, ArrowUpRight } from "./Icon";
import HomepageProgress from "./HomepageProgress";

/**
 * Index of all topics, grouped by AWS category. Renders as flat editorial
 * rows rather than the previous card grid — fewer visual containers, more
 * scannable, and works equally well in light and dark themes without any
 * hover-glow tricks.
 *
 * Server-rendered. Each row embeds <HomepageProgress> as the only client
 * island so quiz scores hydrate without dragging the whole list onto the
 * client.
 */
export default function HomepageTopicList() {
  const grouped = new Map<CategoryKey, typeof topics>();
  for (const t of topics) {
    const key = getCategoryAccent(t.slug, t.category).key;
    const list = grouped.get(key) ?? [];
    list.push(t);
    grouped.set(key, list);
  }

  return (
    <div className="space-y-12">
      {categoryOrder.map((key) => {
        const list = grouped.get(key);
        if (!list || list.length === 0) return null;
        const accent = getAccentByKey(key);

        return (
          <section key={key} id={key} className="scroll-mt-20">
            <header className="mb-4 flex items-baseline justify-between gap-4 border-b border-[var(--rule)] pb-2">
              <div className={"flex items-center gap-2 " + accent.text}>
                <CategoryIcon category={key} size={15} />
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em]">
                  {accent.label}
                </h2>
              </div>
              <span className="text-xs tabular-nums text-[var(--ink-faint)]">
                {list.length} หัวข้อ
              </span>
            </header>

            <ul className="divide-y divide-[var(--rule)]">
              {list.map((t) => {
                const idx = topics.indexOf(t);
                const num = String(idx + 1).padStart(2, "0");
                const tags = t.tags?.length
                  ? t.tags
                  : extractTags(t.keyPoints, 4);

                return (
                  <li key={t.slug}>
                    <Link
                      href={`/topics/${t.slug}`}
                      className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-4 gap-y-1 py-4 transition-colors hover:bg-[var(--bg-soft)] sm:grid-cols-[2.5rem_1fr_auto] sm:gap-x-6"
                    >
                      <span className="font-mono text-xs tabular-nums text-[var(--ink-faint)]">
                        {num}
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-baseline gap-2">
                          <h3 className="text-base font-semibold text-[var(--ink)] group-hover:underline decoration-[var(--rule-strong)] underline-offset-4">
                            {t.title}
                          </h3>
                          <ArrowUpRight
                            size={14}
                            strokeWidth={1.7}
                            className="shrink-0 -translate-y-px text-[var(--ink-faint)] opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden
                          />
                        </div>
                        <p className="mt-0.5 text-sm text-[var(--ink-muted)]">
                          {t.subtitle}
                        </p>
                        {tags.length > 0 && (
                          <p className="mt-1.5 text-xs text-[var(--ink-faint)]">
                            {tags.join(" · ")}
                          </p>
                        )}
                      </div>

                      <span className="hidden self-center text-xs sm:inline-flex">
                        <HomepageProgress slug={t.slug} />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
