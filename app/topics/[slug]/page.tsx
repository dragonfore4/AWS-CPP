import { notFound } from "next/navigation";
import { getTopicBySlug, getAllSlugs, topics } from "@/data/index";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import TopicSection from "@/components/TopicSection";
import QuizSection from "@/components/QuizSection";
import QuizPrintBlock from "@/components/QuizPrintBlock";
import TopicTOC from "@/components/TopicTOC";
import TopicNav from "@/components/TopicNav";
import PrintButton from "@/components/PrintButton";
import { getCategoryAccent } from "@/lib/categoryAccents";
import { estimateReadingTime } from "@/lib/readingTime";
import type { CSSProperties } from "react";

export function generateStaticParams(): { slug: string }[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const accent = getCategoryAccent(topic.slug, topic.category);
  const idx = topics.findIndex((t) => t.slug === topic.slug);
  const sectionNumber = String(idx + 1).padStart(2, "0");
  const readingMin = estimateReadingTime(topic);

  // Marker-pen highlight colours, set as CSS variables on the article so
  // <strong> elements inside the topic body pick up the category accent.
  // Two values (light + dark) are exposed; globals.css resolves the active
  // one against [data-theme] so the highlight follows the user's theme.
  const articleStyle = {
    "--shl-light": accent.highlight.light,
    "--shl-dark": accent.highlight.dark,
  } as CSSProperties;

  return (
    <>
      <Navbar activeSlug={topic.slug} />
      <ReadingProgress color={accent.hex} />

      <main className="flex-1" data-strong-highlight style={articleStyle}>
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          {/* Article header */}
          <header className="mx-auto max-w-3xl">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                <span className={accent.text}>{accent.label}</span>
                <span aria-hidden>·</span>
                <span>Section {sectionNumber}</span>
                <span aria-hidden>·</span>
                <span>{readingMin} min read</span>
                <span aria-hidden>·</span>
                <span>{topic.quiz.length} questions</span>
              </div>
              <PrintButton className="shrink-0" />
            </div>

            {/* Chapter mark + title */}
            <div className="mt-5 flex items-start gap-5">
              <span
                aria-hidden
                className={
                  "shrink-0 inline-flex h-14 min-w-[3.5rem] items-center justify-center rounded-md px-2 font-serif text-[2rem] tabular-nums leading-none " +
                  accent.numberBg +
                  " " +
                  accent.text
                }
              >
                {sectionNumber}
              </span>
              <div className="min-w-0">
                <h1 className="font-serif text-[1.9rem] leading-[1.15] text-[var(--ink)] sm:text-[2.4rem]">
                  {topic.title}
                </h1>
                <p className="mt-1.5 text-lg text-[var(--ink-muted)]">
                  {topic.subtitle}
                </p>
              </div>
            </div>

            <div className="mt-6 h-px bg-[var(--rule)]" />

            {/* Lead paragraph — slightly larger + looser leading than body */}
            <p
              className="mt-6 max-w-[68ch] text-[1.08em] text-[var(--ink)] leading-[1.8]"
              dangerouslySetInnerHTML={{ __html: topic.description }}
            />

            {/* Mobile-only collapsible TOC. Desktop sees the sticky sidebar
                rendered below. */}
            <details
              data-print="hide"
              className="mt-8 lg:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-3 border-y border-[var(--rule)] py-2 text-sm text-[var(--ink-muted)]">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                  ในหน้านี้
                </span>
                <span className="text-xs">{topic.sections.length} sections</span>
              </summary>
              <ol className="mt-3 space-y-0.5 text-sm">
                {topic.sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group flex items-baseline gap-2 rounded-md border-l-2 border-transparent py-1 pl-3 pr-2 -ml-[2px] text-[var(--ink-muted)] transition-colors hover:border-[var(--rule-strong)] hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]"
                    >
                      <span className="font-mono text-[10px] tabular-nums text-[var(--ink-faint)] transition-colors group-hover:text-[var(--ink-muted)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          </header>

          {/* Article body + sticky TOC */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-x-12 lg:max-w-6xl lg:grid-cols-[minmax(0,1fr)_14rem]">
            <article className="space-y-20 min-w-0">
              {topic.sections.map((section, i) => (
                <TopicSection
                  key={section.id}
                  section={section}
                  accent={accent}
                  index={i}
                />
              ))}
            </article>

            <TopicTOC sections={topic.sections} accent={accent} />
          </div>

          {/* Quiz */}
          {topic.quiz.length > 0 && (
            <div className="mx-auto mt-24 max-w-3xl">
              <header className="mb-5">
                <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                  ทดสอบ
                </div>
                <h2
                  className={
                    "mt-1 font-serif text-2xl sm:text-3xl " + accent.text
                  }
                >
                  คำถามทบทวน
                </h2>
                <p className="mt-1 text-sm text-[var(--ink-muted)]">
                  {topic.quiz.length} ข้อ — เลือกคำตอบเพื่อดูเฉลยและคำอธิบาย
                </p>
              </header>
              <div className="print:hidden">
                <QuizSection
                  questions={topic.quiz}
                  slug={topic.slug}
                  accent={accent}
                />
              </div>
              <QuizPrintBlock questions={topic.quiz} />
            </div>
          )}

          {/* Prev/next */}
          <div className="mx-auto max-w-3xl">
            <TopicNav currentSlug={topic.slug} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
