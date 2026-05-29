"use client";

import { Printer } from "./Icon";

export default function PrintButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      data-print-button
      aria-label="พิมพ์หน้านี้"
      title="พิมพ์หน้านี้"
      className={
        "inline-flex h-8 items-center gap-1.5 rounded-md border border-[var(--rule)] bg-[var(--bg-elev)] px-2.5 text-xs text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-soft)] transition-colors " +
        className
      }
    >
      <Printer size={14} strokeWidth={1.7} aria-hidden />
      <span>Print</span>
    </button>
  );
}
