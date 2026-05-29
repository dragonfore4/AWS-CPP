import Link from "next/link";
import { topics } from "@/data/index";
import { ArrowLeft, ArrowRight } from "./Icon";

/**
 * Previous / next topic navigation, rendered after the Quiz block.
 *
 * Order follows the `topics` array (Stephane Maarek course order). The first
 * topic gets a disabled "previous" placeholder, and the last topic gets a
 * "back to index" link in the next slot.
 */
export default function TopicNav({ currentSlug }: { currentSlug: string }) {
  const idx = topics.findIndex((t) => t.slug === currentSlug);
  if (idx < 0) return null;

  const prev = idx > 0 ? topics[idx - 1] : null;
  const next = idx < topics.length - 1 ? topics[idx + 1] : null;

  return (
    <nav
      aria-label="Topic navigation"
      className="mt-16 grid gap-3 border-t border-[var(--rule)] pt-6 sm:grid-cols-2 sm:gap-6"
    >
      {prev ? (
        <Link
          href={`/topics/${prev.slug}`}
          className="group flex items-start gap-3 rounded-md px-3 py-3 -mx-3 transition-colors hover:bg-[var(--bg-soft)]"
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.7}
            className="mt-1 shrink-0 text-[var(--ink-faint)] group-hover:text-[var(--ink)]"
            aria-hidden
          />
          <span className="min-w-0 flex-1">
            <span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              ก่อนหน้า
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-[var(--ink)] group-hover:underline decoration-[var(--rule-strong)] underline-offset-4">
              {String(idx).padStart(2, "0")} {prev.title}
            </span>
            <span className="mt-0.5 block truncate text-xs text-[var(--ink-muted)]">
              {prev.subtitle}
            </span>
          </span>
        </Link>
      ) : (
        <div className="px-3 py-3 -mx-3 text-xs text-[var(--ink-faint)]">
          <span className="block text-[10px] uppercase tracking-[0.16em]">
            เริ่มต้น
          </span>
          <span className="mt-0.5 block text-sm">หัวข้อแรกแล้ว</span>
        </div>
      )}

      {next ? (
        <Link
          href={`/topics/${next.slug}`}
          className="group flex items-start gap-3 rounded-md px-3 py-3 -mx-3 transition-colors hover:bg-[var(--bg-soft)] sm:flex-row-reverse sm:text-right"
        >
          <ArrowRight
            size={16}
            strokeWidth={1.7}
            className="mt-1 shrink-0 text-[var(--ink-faint)] group-hover:text-[var(--ink)]"
            aria-hidden
          />
          <span className="min-w-0 flex-1">
            <span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              ถัดไป
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-[var(--ink)] group-hover:underline decoration-[var(--rule-strong)] underline-offset-4">
              {String(idx + 2).padStart(2, "0")} {next.title}
            </span>
            <span className="mt-0.5 block truncate text-xs text-[var(--ink-muted)]">
              {next.subtitle}
            </span>
          </span>
        </Link>
      ) : (
        <Link
          href="/"
          className="group flex items-start gap-3 rounded-md px-3 py-3 -mx-3 transition-colors hover:bg-[var(--bg-soft)] sm:flex-row-reverse sm:text-right"
        >
          <ArrowRight
            size={16}
            strokeWidth={1.7}
            className="mt-1 shrink-0 text-[var(--ink-faint)] group-hover:text-[var(--ink)]"
            aria-hidden
          />
          <span className="min-w-0 flex-1">
            <span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              จบบท
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-[var(--ink)] group-hover:underline decoration-[var(--rule-strong)] underline-offset-4">
              กลับไปหน้าหลัก
            </span>
          </span>
        </Link>
      )}
    </nav>
  );
}
