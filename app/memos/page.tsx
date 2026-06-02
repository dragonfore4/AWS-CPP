import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MemosPageClient from "@/components/memos/MemosPageClient";

export const metadata: Metadata = {
  title: "Memos · บันทึกย่อ — AWS CLF-C02",
  description: "บันทึกส่วนตัวระหว่างทบทวนสอบ AWS Cloud Practitioner",
};

export default function MemosPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 pt-16 pb-8 sm:px-6 sm:pt-20">
          <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
            Memos · บันทึกส่วนตัว
          </div>
          <h1 className="mt-3 font-serif text-3xl leading-[1.15] text-[var(--ink)] sm:text-[2.5rem]">
            บันทึกย่อ
            <span className="block text-[var(--ink-muted)]">
              — โน้ตส่วนตัวระหว่างทบทวน
            </span>
          </h1>
          <p className="mt-5 max-w-[60ch] text-[var(--ink-muted)]">
            พื้นที่จดเทคนิคและจุดที่ต้องจำสำหรับสอบ CLF-C02 อ่านได้ทุกคน
            แต่การเพิ่ม/แก้ไข/ลบต้องใส่รหัสก่อน
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
          <MemosPageClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
