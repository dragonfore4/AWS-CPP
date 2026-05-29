import Link from "next/link";
import { topics, getTopicBySlug } from "@/data/index";
import { getCategoryAccent } from "@/lib/categoryAccents";
import SettingsPopover from "./SettingsPopover";
import { ChevronRight } from "./Icon";
import CategoryNavRows from "./CategoryNavRows";
import StephaneNavRow from "./StephaneNavRow";

interface NavbarProps {
  activeSlug?: string;
}

/**
 * Site navbar.
 *
 * Layout structure:
 *   1. Sticky brand strip — logo + display settings (always visible).
 *   2. Topic links — both layouts shown side-by-side, server-rendered:
 *        • Stephane-order: one wrapping row in course order
 *        • Category-grouped: six rows, one per AWS category
 *      Each block has its own small uppercase label so users see at a
 *      glance which view they are scanning.
 *   3. Breadcrumb — only on topic pages.
 *
 * Only Row 1 is sticky. Pinning the topic links would eat too much of the
 * viewport while reading; users scroll back to the top to switch topics,
 * matching the editorial pattern.
 */
export default function Navbar({ activeSlug }: NavbarProps) {
  const activeTopic = activeSlug ? getTopicBySlug(activeSlug) : undefined;
  const activeAccent = activeTopic
    ? getCategoryAccent(activeTopic.slug, activeTopic.category)
    : undefined;
  const sectionNumber = activeTopic
    ? String(topics.indexOf(activeTopic) + 1).padStart(2, "0")
    : null;

  return (
    <nav
      data-site-nav
      className="border-b border-[var(--rule)] bg-[var(--bg)]"
    >
      {/* Row 1 — sticky brand strip */}
      <div className="sticky top-0 z-40 border-b border-[var(--rule)] bg-[var(--bg)]/85 backdrop-blur-sm">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href="/"
            className="text-[var(--ink)] hover:text-[var(--ink)] inline-flex items-baseline gap-2 font-semibold tracking-tight"
          >
            <span className="text-base">AWS CLF-C02</span>
            <span className="hidden text-xs font-normal text-[var(--ink-faint)] sm:inline">
              บันทึกย่อ
            </span>
          </Link>

          <SettingsPopover />
        </div>
      </div>

      {/* Stephane-order row — course sequence */}
      <section
        data-nav-mode="stephane"
        aria-label="Topics in course order"
      >
        <div className="mx-auto flex max-w-6xl items-baseline gap-3 px-4 pt-3 sm:px-6">
          <span className="shrink-0 text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--ink-faint)]">
            ตามคอร์ส
          </span>
          <span
            aria-hidden
            className="hidden h-px flex-1 bg-[var(--rule)] sm:block"
          />
        </div>
        <StephaneNavRow activeSlug={activeSlug} />
      </section>

      {/* Hairline divider between the two views */}
      <div aria-hidden className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-px bg-[var(--rule)]" />
      </div>

      {/* Category-grouped rows */}
      <section
        data-nav-mode="category"
        aria-label="Topics grouped by AWS category"
      >
        <div className="mx-auto flex max-w-6xl items-baseline gap-3 px-4 pt-3 sm:px-6">
          <span className="shrink-0 text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--ink-faint)]">
            ตามหมวด
          </span>
          <span
            aria-hidden
            className="hidden h-px flex-1 bg-[var(--rule)] sm:block"
          />
        </div>
        <CategoryNavRows activeSlug={activeSlug} />
      </section>

      {/* Row 3 (topic pages only) — breadcrumb */}
      {activeTopic && activeAccent && sectionNumber && (
        <div className="border-t border-[var(--rule)] bg-[var(--bg)]">
          <div className="mx-auto flex h-9 max-w-6xl items-center gap-2 px-4 text-xs text-[var(--ink-muted)] sm:px-6">
            <Link
              href="/"
              className="text-[var(--ink-faint)] hover:text-[var(--ink)] transition-colors"
            >
              Topics
            </Link>
            <ChevronRight
              size={12}
              strokeWidth={1.7}
              className="text-[var(--ink-faint)]"
              aria-hidden
            />
            <span className={activeAccent.text}>{activeAccent.label}</span>
            <ChevronRight
              size={12}
              strokeWidth={1.7}
              className="text-[var(--ink-faint)]"
              aria-hidden
            />
            <span className="font-mono tabular-nums text-[var(--ink-faint)]">
              {sectionNumber}
            </span>
            <span className="truncate text-[var(--ink)]">{activeTopic.title}</span>
          </div>
        </div>
      )}
    </nav>
  );
}
