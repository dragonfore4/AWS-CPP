"use client";

import { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";
import type { Memo, MemoInput } from "@/types/memo";
import MemoMarkdown from "./MemoMarkdown";

interface Props {
  open: boolean;
  initial: Memo | null; // null = create new, Memo = edit existing
  saving: boolean;
  errorMessage: string | null;
  onCancel: () => void;
  onSave: (input: MemoInput) => void;
}

/**
 * Modal-style editor for creating or editing one memo.
 *
 * State (title/body/tags) is initialised from `initial` props directly via
 * `useState(() => ...)`. The parent remounts this component (via a `key`
 * derived from the edit target) whenever a different memo is opened, which
 * is what resets the form. This avoids the `set-state-in-effect` lint rule.
 *
 * Layout:
 *   - Title input at top
 *   - Body textarea (left) + live markdown preview (right) on `sm:`+
 *   - Body stacked on mobile with a Preview toggle
 *   - Tags input (comma-separated) below body
 *   - Cancel / Save buttons
 */
export default function MemoEditor({
  open,
  initial,
  saving,
  errorMessage,
  onCancel,
  onSave,
}: Props) {
  const [title, setTitle] = useState(() => initial?.title ?? "");
  const [body, setBody] = useState(() => initial?.body ?? "");
  const [tagsRaw, setTagsRaw] = useState(
    () => (initial?.tags ?? []).join(", "),
  );
  const [mobilePreview, setMobilePreview] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => titleRef.current?.focus());
    }
  }, [open]);

  if (!open) return null;

  const trimmedTitle = title.trim();
  const canSave = trimmedTitle.length > 0 && !saving;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSave) return;
    onSave({
      title: trimmedTitle,
      body,
      tags: tagsRaw.split(",").map((t) => t.trim()).filter(Boolean),
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-[rgba(0,0,0,0.45)] p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="memo-editor-title"
    >
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-3xl flex-col overflow-hidden border border-[var(--rule)] bg-[var(--bg-elev)] sm:rounded sm:max-h-[90vh]"
      >
        <header className="flex items-center justify-between border-b border-[var(--rule)] px-5 py-3">
          <h2
            id="memo-editor-title"
            className="font-serif text-base text-[var(--ink)]"
          >
            {initial ? "แก้ไขบันทึก" : "บันทึกใหม่"}
          </h2>
          <button
            type="button"
            onClick={onCancel}
            className="rounded p-1 text-[var(--ink-faint)] hover:text-[var(--ink)]"
            aria-label="ปิด"
          >
            <X size={16} strokeWidth={1.7} aria-hidden />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              หัวเรื่อง
            </span>
            <input
              ref={titleRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded border border-[var(--rule-strong)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--ink)] outline-none focus:border-[var(--ink)]"
              placeholder="title"
            />
          </label>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                เนื้อหา (Markdown)
              </span>
              <button
                type="button"
                onClick={() => setMobilePreview((v) => !v)}
                className="rounded border border-[var(--rule)] px-2 py-0.5 text-xs text-[var(--ink-muted)] hover:text-[var(--ink)] sm:hidden"
              >
                {mobilePreview ? "แก้ไข" : "ดูตัวอย่าง"}
              </button>
            </div>

            <div className="mt-1 grid gap-3 sm:grid-cols-2">
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={12}
                className={
                  mobilePreview
                    ? "hidden h-72 w-full resize-y rounded border border-[var(--rule-strong)] bg-[var(--bg)] p-3 font-mono text-sm text-[var(--ink)] outline-none focus:border-[var(--ink)] sm:block"
                    : "h-72 w-full resize-y rounded border border-[var(--rule-strong)] bg-[var(--bg)] p-3 font-mono text-sm text-[var(--ink)] outline-none focus:border-[var(--ink)]"
                }
                placeholder="# heading&#10;- bullet&#10;**bold**"
              />
              <div
                className={
                  mobilePreview
                    ? "min-h-72 rounded border border-[var(--rule)] bg-[var(--bg)] p-3"
                    : "hidden min-h-72 rounded border border-[var(--rule)] bg-[var(--bg)] p-3 sm:block"
                }
                aria-label="Preview"
              >
                {body.trim().length > 0 ? (
                  <MemoMarkdown source={body} />
                ) : (
                  <p className="text-sm text-[var(--ink-faint)]">
                    ตัวอย่างจะปรากฏที่นี่
                  </p>
                )}
              </div>
            </div>
          </div>

          <label className="mt-4 block">
            <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              แท็ก (คั่นด้วยคอมมา)
            </span>
            <input
              value={tagsRaw}
              onChange={(e) => setTagsRaw(e.target.value)}
              className="mt-1 w-full rounded border border-[var(--rule-strong)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--ink)] outline-none focus:border-[var(--ink)]"
              placeholder="iam, networking, exam-tip"
            />
          </label>

          {errorMessage && (
            <p className="mt-3 rounded border border-[var(--rule-strong)] bg-[var(--bg-soft)] p-2 text-xs text-[var(--ink-muted)]">
              {errorMessage}
            </p>
          )}
        </div>

        <footer className="flex justify-end gap-2 border-t border-[var(--rule)] px-5 py-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded border border-[var(--rule)] px-3 py-1.5 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            ยกเลิก
          </button>
          <button
            type="submit"
            disabled={!canSave}
            className="rounded border border-[var(--ink)] bg-[var(--ink)] px-3 py-1.5 text-sm text-[var(--bg)] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "กำลังบันทึก..." : "บันทึก"}
          </button>
        </footer>
      </form>
    </div>
  );
}
