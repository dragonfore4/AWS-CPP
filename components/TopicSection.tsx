import { Section, SectionContent } from "@/types/topic";
import { getAccent } from "@/lib/accentClasses";

interface TopicSectionProps {
  section: Section;
  accent: string;
  index: number;
}

export default function TopicSection({ section, accent, index }: TopicSectionProps) {
  const a = getAccent(accent);

  return (
    <section id={section.id} className="scroll-mt-24">
      {/* Section heading kept narrow so it lines up with paragraph reading width */}
      <div className="max-w-3xl mx-auto w-full mb-6">
        <h2
          className={`text-2xl md:text-3xl font-bold ${a.text400} flex items-center gap-3 pb-3 border-b border-slate-800`}
        >
          <span
            className={`${a.bg500_20} px-2.5 py-1 rounded-md ${a.text300} text-sm font-mono shrink-0`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="leading-tight">{section.title}</span>
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

function ContentBlock({ item, accent }: { item: SectionContent; accent: string }) {
  const a = getAccent(accent);

  switch (item.type) {
    case "paragraph":
      return (
        <p
          className="max-w-3xl mx-auto w-full text-slate-200 leading-loose"
          dangerouslySetInnerHTML={{ __html: item.text }}
        />
      );

    case "list":
      return (
        <ul className="max-w-3xl mx-auto w-full space-y-3 text-slate-200">
          {item.items.map((text, i) => (
            <li key={i} className="flex items-start gap-3 leading-loose">
              <span className={`${a.text400} mt-2 shrink-0`} aria-hidden>
                ●
              </span>
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </li>
          ))}
        </ul>
      );

    case "code":
      return (
        <div className="max-w-3xl mx-auto w-full rounded-lg overflow-hidden border border-slate-800">
          {item.caption && (
            <div className="bg-slate-900 px-4 py-2.5 text-sm text-slate-300 border-b border-slate-800 font-medium">
              {item.caption}
            </div>
          )}
          <pre className="bg-slate-950 p-4 overflow-x-auto">
            <code className="text-sm text-slate-200 font-mono leading-relaxed">
              {item.code}
            </code>
          </pre>
        </div>
      );

    case "grid": {
      // Use 3-col on lg when many items, 2-col otherwise
      const cols =
        item.items.length >= 6
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2";
      return (
        <div className={`grid ${cols} gap-4`}>
          {item.items.map((card, i) => (
            <div
              key={i}
              className="bg-slate-800 border border-slate-700 rounded-lg p-5 flex flex-col gap-2"
            >
              <h4
                className={`${a.text300} font-semibold text-base`}
                dangerouslySetInnerHTML={{ __html: card.title }}
              />
              <p
                className="text-slate-200 text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </div>
          ))}
        </div>
      );
    }

    case "callout": {
      const variantStyles = {
        info: {
          border: "border-blue-500/40",
          bg: "bg-blue-500/10",
          icon: "ℹ️",
          titleColor: "text-blue-200",
        },
        warning: {
          border: "border-amber-500/40",
          bg: "bg-amber-500/10",
          icon: "⚠️",
          titleColor: "text-amber-200",
        },
        tip: {
          border: "border-emerald-500/40",
          bg: "bg-emerald-500/10",
          icon: "💡",
          titleColor: "text-emerald-200",
        },
      };
      const style = variantStyles[item.variant];

      return (
        <div
          className={`max-w-3xl mx-auto w-full ${style.bg} ${style.border} border rounded-lg p-5`}
        >
          <div
            className={`font-semibold text-base ${style.titleColor} flex items-center gap-2 mb-2`}
          >
            <span aria-hidden>{style.icon}</span>
            <span dangerouslySetInnerHTML={{ __html: item.title }} />
          </div>
          <p
            className="text-slate-100 text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </div>
      );
    }
  }
}
