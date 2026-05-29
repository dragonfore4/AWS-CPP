import { topics } from "@/data/index";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomepageCards, { TopicCardData } from "@/components/HomepageCards";

export default function Home() {
  // Serialize only what the client component needs (exclude sections and quiz for performance)
  const topicCards: TopicCardData[] = topics.map((t) => ({
    slug: t.slug,
    title: t.title,
    subtitle: t.subtitle,
    emoji: t.emoji,
    accent: t.accent,
    keyPoints: t.keyPoints,
  }));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 pt-20 pb-14 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-indigo-300 text-sm font-semibold tracking-wide">
              CLF-C02
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 tracking-tight">
            AWS Cloud Practitioner
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-2 leading-relaxed">
            สรุปเนื้อหาสำหรับสอบ AWS Certified Cloud Practitioner
          </p>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            แบ่งตามหัวข้อตาม Stephane Maarek course — เข้าใจง่าย ทบทวนเร็ว พร้อม Quiz ท้ายบท
          </p>
        </section>

        {/* Topic Cards Grid */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <HomepageCards topics={topicCards} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
