"use client";

import { useEffect, useRef, useState } from "react";
import { Lock, X } from "lucide-react";
import { checkPassphrase, unlock } from "@/lib/passphrase";

interface Props {
  open: boolean;
  onUnlocked: () => void;
  onCancel: () => void;
}

/**
 * Modal that asks for the passphrase before unlocking edit mode.
 *
 * On success: calls `unlock()` (sessionStorage), then `onUnlocked()`.
 * On wrong input: shakes + shows inline error. No rate limiting (the
 * gate is cosmetic anyway — see design spec accepted risks).
 *
 * State is reset by remounting via a `key` in the parent (see
 * `MemosPageClient`) rather than by writing setState in an effect.
 */
export default function PassphraseGate({ open, onUnlocked, onCancel }: Props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      // Focus on the next paint so the input is mounted.
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (checkPassphrase(value)) {
      unlock();
      onUnlocked();
      return;
    }
    setError(true);
    setShake(true);
    setTimeout(() => setShake(false), 400);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.45)] p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="passphrase-title"
    >
      <form
        onSubmit={handleSubmit}
        className={
          shake
            ? "memo-shake w-full max-w-sm rounded border border-[var(--rule)] bg-[var(--bg-elev)] p-5"
            : "w-full max-w-sm rounded border border-[var(--rule)] bg-[var(--bg-elev)] p-5"
        }
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock size={16} strokeWidth={1.7} aria-hidden />
            <h2
              id="passphrase-title"
              className="font-serif text-base text-[var(--ink)]"
            >
              ปลดล็อคเพื่อแก้ไข
            </h2>
          </div>
          <button
            type="button"
            onClick={onCancel}
            className="rounded p-1 text-[var(--ink-faint)] hover:text-[var(--ink)]"
            aria-label="ปิด"
          >
            <X size={16} strokeWidth={1.7} aria-hidden />
          </button>
        </div>

        <input
          ref={inputRef}
          type="password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError(false);
          }}
          autoComplete="off"
          className="mt-4 w-full rounded border border-[var(--rule-strong)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--ink)] outline-none focus:border-[var(--ink)]"
          placeholder="passphrase"
        />
        {error && (
          <p className="mt-2 text-xs text-[var(--ink-muted)]">
            รหัสไม่ถูกต้อง
          </p>
        )}

        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="rounded border border-[var(--rule)] px-3 py-1.5 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            ยกเลิก
          </button>
          <button
            type="submit"
            className="rounded border border-[var(--ink)] bg-[var(--ink)] px-3 py-1.5 text-sm text-[var(--bg)] hover:opacity-90"
          >
            ปลดล็อค
          </button>
        </div>
      </form>
    </div>
  );
}
