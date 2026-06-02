"use client";

import { Pencil, Trash2 } from "lucide-react";
import type { Memo } from "@/types/memo";
import MemoMarkdown from "./MemoMarkdown";

interface Props {
  memo: Memo;
  unlocked: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

function formatTimestamp(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function MemoCard({ memo, unlocked, onEdit, onDelete }: Props) {
  return (
    <article className="border-b border-[var(--rule)] py-6 first:pt-0 last:border-b-0">
      <header className="flex items-baseline justify-between gap-3">
        <h2 className="font-serif text-xl text-[var(--ink)]">{memo.title}</h2>
        <span className="shrink-0 font-mono text-xs tabular-nums text-[var(--ink-faint)]">
          {formatTimestamp(memo.updated_at)}
        </span>
      </header>

      {memo.body.trim().length > 0 && (
        <div className="mt-2">
          <MemoMarkdown source={memo.body} />
        </div>
      )}

      {(memo.tags.length > 0 || unlocked) && (
        <footer className="mt-3 flex items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 flex-wrap gap-1.5">
            {memo.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--rule)] bg-[var(--bg-soft)] px-2 py-0.5 text-xs text-[var(--ink-muted)]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {unlocked && (
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={onEdit}
                className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs text-[var(--ink-muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]"
              >
                <Pencil size={12} strokeWidth={1.7} aria-hidden />
                แก้ไข
              </button>
              <button
                type="button"
                onClick={onDelete}
                className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs text-[var(--ink-muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]"
              >
                <Trash2 size={12} strokeWidth={1.7} aria-hidden />
                ลบ
              </button>
            </div>
          )}
        </footer>
      )}
    </article>
  );
}
