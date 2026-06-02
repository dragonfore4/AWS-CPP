"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { Plus, LockOpen } from "lucide-react";
import type { Memo, MemoInput } from "@/types/memo";
import { isSupabaseConfigured } from "@/lib/supabase";
import {
  isPassphraseConfigured,
  isUnlocked as readUnlocked,
  lock as lockSession,
} from "@/lib/passphrase";
import { listMemos, createMemo, updateMemo, deleteMemo } from "@/lib/memos";
import MemoList from "./MemoList";
import MemoEditor from "./MemoEditor";
import PassphraseGate from "./PassphraseGate";
import EmptyState from "./EmptyState";
import DisabledNotice from "./DisabledNotice";

type EditTarget = { kind: "create" } | { kind: "edit"; memo: Memo } | null;

type PendingAction =
  | { kind: "create" }
  | { kind: "edit"; memo: Memo }
  | { kind: "delete"; memo: Memo }
  | null;

/**
 * Subscribe to sessionStorage unlock changes without writing setState in an
 * effect. The store is "external" only nominally — we drive it via our own
 * dispatched events so multiple components can stay in sync if needed. For
 * the v1 page there is just one consumer.
 */
const UNLOCK_EVENT = "memos:unlock-changed";

function subscribeUnlock(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(UNLOCK_EVENT, cb);
  return () => window.removeEventListener(UNLOCK_EVENT, cb);
}

function emitUnlockChanged() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(UNLOCK_EVENT));
}

function getUnlockSnapshot(): boolean {
  return readUnlocked();
}

function getUnlockServerSnapshot(): boolean {
  return false;
}

export default function MemosPageClient() {
  const configured = isSupabaseConfigured() && isPassphraseConfigured();

  console.log(configured);

  const unlocked = useSyncExternalStore(
    subscribeUnlock,
    getUnlockSnapshot,
    getUnlockServerSnapshot,
  );

  const [memos, setMemos] = useState<Memo[]>([]);
  // Start in `loading` only when we are actually going to fetch. If env vars
  // aren't configured we render the disabled notice immediately.
  const [loading, setLoading] = useState<boolean>(() => configured);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [editTarget, setEditTarget] = useState<EditTarget>(null);
  const [editorEpoch, setEditorEpoch] = useState(0); // bumped to remount editor
  const [gateEpoch, setGateEpoch] = useState(0); // bumped to remount gate
  const [saving, setSaving] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);
  const [pendingAction, setPendingAction] = useState<PendingAction>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      const data = await listMemos();
      setMemos(data);
      setLoadError(null);
    } catch (e) {
      setLoadError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch. The async work runs in a self-invoking IIFE so the lint
  // rule (`set-state-in-effect`) doesn't see synchronous setState calls in
  // the effect body — all setState happens after `await`.
  useEffect(() => {
    if (!configured) return;
    let cancelled = false;
    (async () => {
      try {
        const data = await listMemos();
        if (cancelled) return;
        setMemos(data);
        setLoadError(null);
      } catch (e) {
        if (cancelled) return;
        setLoadError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [configured]);

  const runPendingAction = useCallback(
    async (action: PendingAction) => {
      if (!action) return;
      if (action.kind === "create") {
        setEditorEpoch((n) => n + 1);
        setEditTarget({ kind: "create" });
      } else if (action.kind === "edit") {
        setEditorEpoch((n) => n + 1);
        setEditTarget({ kind: "edit", memo: action.memo });
      } else if (action.kind === "delete") {
        const ok = window.confirm(`ลบ "${action.memo.title}" ?`);
        if (!ok) return;
        const targetId = action.memo.id;
        const snapshot = memos;
        setMemos((cur) => cur.filter((m) => m.id !== targetId));
        try {
          await deleteMemo(targetId);
        } catch (e) {
          setMemos(snapshot);
          window.alert(
            "ลบไม่สำเร็จ: " + (e instanceof Error ? e.message : "unknown"),
          );
        }
      }
    },
    [memos],
  );

  function gate(action: NonNullable<PendingAction>) {
    if (unlocked) {
      void runPendingAction(action);
    } else {
      setGateEpoch((n) => n + 1);
      setPendingAction(action);
    }
  }

  function handleUnlocked() {
    const action = pendingAction;
    setPendingAction(null);
    emitUnlockChanged();
    void runPendingAction(action);
  }

  function handleCancelGate() {
    setPendingAction(null);
  }

  function handleLock() {
    lockSession();
    emitUnlockChanged();
  }

  async function handleSave(input: MemoInput) {
    setSaving(true);
    setEditError(null);
    try {
      if (editTarget?.kind === "create") {
        const created = await createMemo(input);
        setMemos((cur) => [created, ...cur]);
      } else if (editTarget?.kind === "edit") {
        const id = editTarget.memo.id;
        const updated = await updateMemo(id, input);
        setMemos((cur) => {
          const next = cur.map((m) => (m.id === id ? updated : m));
          next.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
          return next;
        });
      }
      setEditTarget(null);
    } catch (e) {
      setEditError(e instanceof Error ? e.message : "บันทึกไม่สำเร็จ");
    } finally {
      setSaving(false);
    }
  }

  if (!configured) {
    return <DisabledNotice />;
  }

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => gate({ kind: "create" })}
          className="inline-flex items-center gap-1.5 rounded border border-[var(--rule-strong)] bg-[var(--bg-elev)] px-3 py-1.5 text-sm text-[var(--ink)] hover:bg-[var(--bg-soft)]"
        >
          <Plus size={14} strokeWidth={1.7} aria-hidden />
          บันทึกใหม่
        </button>

        <div className="min-w-0 flex-1" aria-hidden />

        {unlocked && (
          <button
            type="button"
            onClick={handleLock}
            className="inline-flex items-center gap-1.5 rounded border border-[var(--rule)] px-3 py-1.5 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
            aria-label="Lock"
          >
            <LockOpen size={14} strokeWidth={1.7} aria-hidden />
            ล็อค
          </button>
        )}
      </div>

      {loading ? (
        <p className="py-10 text-center text-sm text-[var(--ink-muted)]">
          กำลังโหลด...
        </p>
      ) : loadError ? (
        <div className="rounded border border-[var(--rule-strong)] bg-[var(--bg-soft)] p-5">
          <p className="text-sm text-[var(--ink)]">โหลดบันทึกไม่สำเร็จ</p>
          <p className="mt-1 text-xs text-[var(--ink-muted)]">{loadError}</p>
          <button
            type="button"
            onClick={() => void refresh()}
            className="mt-3 rounded border border-[var(--rule-strong)] px-3 py-1 text-xs text-[var(--ink)] hover:bg-[var(--bg)]"
          >
            ลองใหม่
          </button>
        </div>
      ) : memos.length === 0 ? (
        <EmptyState
          unlocked={unlocked}
          onNew={() => gate({ kind: "create" })}
        />
      ) : (
        <MemoList
          memos={memos}
          unlocked={unlocked}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
          onEdit={(memo) => gate({ kind: "edit", memo })}
          onDelete={(memo) => gate({ kind: "delete", memo })}
        />
      )}

      <PassphraseGate
        key={`gate-${gateEpoch}`}
        open={pendingAction !== null}
        onUnlocked={handleUnlocked}
        onCancel={handleCancelGate}
      />

      <MemoEditor
        key={`editor-${editorEpoch}`}
        open={editTarget !== null}
        initial={editTarget?.kind === "edit" ? editTarget.memo : null}
        saving={saving}
        errorMessage={editError}
        onCancel={() => {
          setEditTarget(null);
          setEditError(null);
        }}
        onSave={handleSave}
      />
    </>
  );
}
