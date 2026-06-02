import Link from "next/link";
import { topics } from "@/data/index";
import { categoryOrder, getAccentByKey, getCategoryAccent } from "@/lib/categoryAccents";

export default function Footer() {
  // Bucket topics by category for the footer column.
  const byCategory = new Map<string, typeof topics>();
  for (const t of topics) {
    const key = getCategoryAccent(t.slug, t.category).key;
    const list = byCategory.get(key) ?? [];
    list.push(t);
    byCategory.set(key, list);
  }

  return (
    <footer
      data-site-footer
      className="mt-20 border-t border-[var(--rule)] bg-[var(--bg)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              เกี่ยวกับ
            </div>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--ink-muted)]">
              บันทึกย่อระหว่างเตรียมสอบ AWS Cloud Practitioner (CLF-C02)
              เปิดให้คนที่กำลังเตรียมสอบเข้ามาอ่านทบทวนได้
            </p>
          </div>

          <div className="md:col-span-1">
            <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              หัวข้อ
            </div>
            <ul className="mt-2 space-y-1 text-sm">
              {categoryOrder.map((key) => {
                const list = byCategory.get(key);
                if (!list || list.length === 0) return null;
                const accent = getAccentByKey(key);
                return (
                  <li key={key}>
                    <Link
                      href={`/#${key}`}
                      className={
                        "text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                      }
                    >
                      {accent.label}
                      <span className="ml-1.5 text-[var(--ink-faint)] tabular-nums">
                        ({list.length})
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:col-span-1">
            <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              อ้างอิง
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
              อิงโครงสร้างจาก{" "}
              <a
                href="https://www.udemy.com/course/aws-certified-cloud-practitioner-new/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink)] underline decoration-[var(--rule-strong)] underline-offset-4 hover:decoration-[var(--ink)]"
              >
                Ultimate AWS Cloud Practitioner&apos;s Exam — Stephane Maarek
              </a>{" "}
              บน Udemy
            </p>

            <div className="mt-6">
              <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                อื่น ๆ
              </div>
              <ul className="mt-2 text-sm">
                <li>
                  <Link
                    href="/memos"
                    className="text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                  >
                    บันทึก
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--rule)] pt-6 text-xs text-[var(--ink-faint)]">
          <p>AWS Cloud Practitioner · CLF-C02 · {topics.length} หัวข้อ</p>
        </div>
      </div>
    </footer>
  );
}
