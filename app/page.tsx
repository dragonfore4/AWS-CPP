import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomepageTopicList from "@/components/HomepageTopicList";
import { topics } from "@/data/index";

export default function Home() {
  const totalQuestions = topics.reduce((sum, t) => sum + t.quiz.length, 0);

  return (
    <>
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 pt-16 pb-10 sm:px-6 sm:pt-20 sm:pb-12">
          <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
            AWS Certification · CLF-C02
          </div>
          <h1 className="mt-3 font-serif text-3xl leading-[1.15] text-[var(--ink)] sm:text-[2.5rem]">
            AWS Cloud Practitioner
            <span className="block text-[var(--ink-muted)]">— บันทึกย่อทบทวนสอบ</span>
          </h1>
          <p className="mt-5 max-w-[60ch] text-[var(--ink-muted)]">
            บันทึกย่อระหว่างเตรียมสอบ AWS Certified Cloud Practitioner (CLF-C02)
            อิงโครงสร้างคอร์ส{" "}
            <a
              href="https://www.udemy.com/course/aws-certified-cloud-practitioner-new/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink)] underline decoration-[var(--rule-strong)] underline-offset-4 hover:decoration-[var(--ink)]"
            >
              Ultimate AWS Cloud Practitioner&apos;s Exam
            </a>{" "}
            ของ Stephane Maarek บน Udemy แบ่งเป็น {topics.length} หัวข้อตามลำดับในคอร์ส
            แต่ละหัวข้อมีคำถามท้ายบทสำหรับทดสอบความเข้าใจ
          </p>

          <dl className="mt-7 flex flex-wrap items-baseline gap-x-7 gap-y-2 text-sm text-[var(--ink-muted)]">
            <div className="flex items-baseline gap-1.5">
              <dt className="text-[var(--ink-faint)]">หัวข้อ</dt>
              <dd className="tabular-nums text-[var(--ink)]">{topics.length}</dd>
            </div>
            <div className="flex items-baseline gap-1.5">
              <dt className="text-[var(--ink-faint)]">คำถามฝึก</dt>
              <dd className="tabular-nums text-[var(--ink)]">{totalQuestions}</dd>
            </div>
            <div className="flex items-baseline gap-1.5">
              <dt className="text-[var(--ink-faint)]">ภาษา</dt>
              <dd className="text-[var(--ink)]">ไทย / อังกฤษ</dd>
            </div>
          </dl>
        </section>

        <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
          <HomepageTopicList />
        </section>
      </main>

      <Footer />
    </>
  );
}
