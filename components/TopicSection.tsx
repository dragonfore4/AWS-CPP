import { Section, SectionContent } from "@/types/topic";
import type { CategoryAccent } from "@/lib/categoryAccents";
import { Info, AlertTriangle, Lightbulb } from "./Icon";

interface TopicSectionProps {
  section: Section;
  accent: CategoryAccent;
  index: number;
}

export default function TopicSection({
  section,
  accent,
  index,
}: TopicSectionProps) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <div className="mb-6 flex items-baseline gap-3">
        <span
          className={
            "shrink-0 inline-flex h-8 min-w-[2rem] items-center justify-center rounded px-1.5 font-mono text-xs tabular-nums " +
            accent.numberBg +
            " " +
            accent.text
          }
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2
          className={
            "font-serif text-2xl sm:text-[1.7rem] " + accent.text
          }
        >
          {section.title}
        </h2>
      </div>

      <div className="space-y-6">
        {section.content.map((item, i) => (
          <ContentBlock key={i} item={item} accent={accent} />
        ))}
      </div>
    </section>
  );
}

function ContentBlock({
  item,
  accent,
}: {
  item: SectionContent;
  accent: CategoryAccent;
}) {
  switch (item.type) {
    case "paragraph":
      return (
        <p
          className="max-w-[68ch] text-[var(--ink)] leading-[1.75]"
          dangerouslySetInnerHTML={{ __html: item.text }}
        />
      );

    case "list":
      return (
        <ul className="max-w-[68ch] space-y-2.5 text-[var(--ink)]">
          {item.items.map((text, i) => (
            <li
              key={i}
              className="grid grid-cols-[1.25rem_1fr] gap-x-2 leading-[1.75]"
            >
              <span
                aria-hidden
                className={"select-none text-base leading-[1.75] " + accent.bullet}
              >
                •
              </span>
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </li>
          ))}
        </ul>
      );

    case "code":
      return (
        <figure className="max-w-[68ch]">
          {item.caption && (
            <figcaption className="mb-1.5 text-xs italic text-[var(--ink-muted)]">
              {item.caption}
            </figcaption>
          )}
          <pre
            className={
              "overflow-x-auto rounded-md border border-[var(--rule)] border-l-[3px] bg-[var(--bg-soft)] p-4 " +
              accent.border
            }
          >
            <code className="text-sm text-[var(--ink)]">{item.code}</code>
          </pre>
        </figure>
      );

    case "grid": {
      // Many items → 3 columns at lg, 2 at sm; few items → 2 cols
      const cols =
        item.items.length >= 6
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2";
      return (
        <div className={`grid ${cols} gap-4`}>
          {item.items.map((card, i) => (
            <div
              key={i}
              className="rounded-md bg-[var(--bg-elev)] p-4 ring-1 ring-[var(--rule)]"
            >
              <h4
                className={
                  "font-semibold leading-snug " + accent.text
                }
                dangerouslySetInnerHTML={{ __html: card.title }}
              />
              <p
                className="mt-1.5 text-sm text-[var(--ink-muted)] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </div>
          ))}
        </div>
      );
    }

    case "callout": {
      const variants = {
        info: {
          label: "หมายเหตุ",
          borderClass: accent.border,
          tintClass: accent.tint,
          labelClass: accent.text,
          Icon: Info,
        },
        warning: {
          label: "ระวัง",
          borderClass: "border-rose-600 dark:border-rose-400",
          tintClass: "bg-rose-50 dark:bg-rose-950/40",
          labelClass: "text-rose-700 dark:text-rose-300",
          Icon: AlertTriangle,
        },
        tip: {
          label: "เคล็ดลับ",
          borderClass: "border-emerald-600 dark:border-emerald-400",
          tintClass: "bg-emerald-50 dark:bg-emerald-950/40",
          labelClass: "text-emerald-700 dark:text-emerald-300",
          Icon: Lightbulb,
        },
      };
      const v = variants[item.variant];
      const Icon = v.Icon;
      return (
        <aside
          className={`callout max-w-[68ch] border-l-4 ${v.borderClass} ${v.tintClass} px-4 py-3.5`}
        >
          <div
            className={`mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${v.labelClass}`}
          >
            <Icon size={13} strokeWidth={1.9} aria-hidden />
            <span>{v.label}</span>
          </div>
          <div className="text-[var(--ink)] leading-[1.7]">
            <strong
              className="block text-[1.02em] font-semibold"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
            <span
              className="block mt-1 text-[var(--ink)]"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        </aside>
      );
    }
  }
}
