import Link from "next/link";
import { topics } from "@/data/index";
import { getCategoryAccent } from "@/lib/categoryAccents";

/**
 * Single flex-wrapped row that lists every topic in the order Stephane
 * Maarek's CLF-C02 course presents them. A small monospace number prefix
 * on each link doubles as a course-section locator ("01 Cloud Concepts",
 * "02 IAM", ...).
 *
 * The active topic gets the same soft tinted pill styling used in the
 * category-grouped layout, so switching layouts via Settings doesn't
 * change the visual rhythm of the page.
 */
export default function StephaneNavRow({
  activeSlug,
}: {
  activeSlug?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 sm:py-4">
      <ul className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
        {topics.map((t, idx) => {
          const isActive = t.slug === activeSlug;
          const accent = getCategoryAccent(t.slug, t.category);
          const num = String(idx + 1).padStart(2, "0");

          return (
            <li key={t.slug}>
              <Link
                href={`/topics/${t.slug}`}
                aria-current={isActive ? "page" : undefined}
                className={
                  "inline-flex items-baseline gap-1.5 rounded px-2 py-1 text-sm leading-snug transition-colors " +
                  (isActive
                    ? `font-semibold ${accent.text} ${accent.tint} ring-1 ring-inset ${accent.border}`
                    : "text-[var(--ink-muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]")
                }
              >
                <span
                  className={
                    "font-mono text-[10px] tabular-nums " +
                    (isActive ? accent.text : "text-[var(--ink-faint)]")
                  }
                  aria-hidden
                >
                  {num}
                </span>
                <span>{t.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
