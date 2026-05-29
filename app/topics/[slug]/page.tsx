import { notFound } from "next/navigation";
import { getTopicBySlug, getAllSlugs } from "@/data/index";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import FontSizeToggle from "@/components/FontSizeToggle";
import TopicSection from "@/components/TopicSection";
import QuizSection from "@/components/QuizSection";
import { getAccent } from "@/lib/accentClasses";

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

  const a = getAccent(topic.accent);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar activeSlug={topic.slug} accent={topic.accent} />
      <ReadingProgress />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-10 w-full">
        {/* Font Size Toggle */}
        <div className="flex justify-end mb-6 max-w-3xl mx-auto w-full">
          <FontSizeToggle />
        </div>

        {/* Page Header — narrow reading width */}
        <header className="mb-12 max-w-3xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{topic.emoji}</span>
            <div>
              <span
                className={`text-xs uppercase tracking-widest ${a.text400} font-semibold`}
              >
                {topic.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-1">
                {topic.title}
              </h1>
            </div>
          </div>
          <p className={`text-lg ${a.text300} font-medium mb-3`}>
            {topic.subtitle}
          </p>
          <p
            className="text-slate-200 leading-loose"
            dangerouslySetInnerHTML={{ __html: topic.description }}
          />
        </header>

        {/* Quick Nav — wider so chips fit nicely */}
        <nav
          aria-label="Sections"
          className="mb-12 p-5 bg-slate-900/50 border border-slate-800 rounded-xl"
        >
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
            ในหน้านี้
          </p>
          <ul className="flex flex-wrap gap-2">
            {topic.sections.map((section, i) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-200 ${a.hoverBorder500_50} ${a.hoverText300} transition-colors`}
                >
                  <span className="text-slate-400 font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections — TopicSection handles its own width */}
        <div className="space-y-16">
          {topic.sections.map((section, i) => (
            <TopicSection
              key={section.id}
              section={section}
              accent={topic.accent}
              index={i}
            />
          ))}
        </div>

        {/* Quiz Section — narrower for focused reading */}
        {topic.quiz.length > 0 && (
          <div className="mt-20 max-w-3xl mx-auto w-full">
            <h2
              className={`text-2xl md:text-3xl font-bold ${a.text400} mb-6 flex items-center gap-3 pb-3 border-b border-slate-800`}
            >
              <span className="text-2xl" aria-hidden>
                📝
              </span>
              <span>Quiz ทบทวน</span>
            </h2>
            <QuizSection
              questions={topic.quiz}
              slug={topic.slug}
              accent={topic.accent}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
