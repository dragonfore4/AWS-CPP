import { Plus } from "lucide-react";

interface Props {
  unlocked: boolean;
  onNew: () => void;
}

/** Shown when the memos list is empty. */
export default function EmptyState({ unlocked, onNew }: Props) {
  return (
    <div className="rounded border border-dashed border-[var(--rule-strong)] bg-[var(--bg-elev)] p-10 text-center">
      <p className="text-[var(--ink-muted)]">ยังไม่มีบันทึก</p>
      {unlocked && (
        <button
          type="button"
          onClick={onNew}
          className="mt-4 inline-flex items-center gap-1.5 rounded border border-[var(--rule-strong)] bg-[var(--bg)] px-3 py-1.5 text-sm text-[var(--ink)] hover:bg-[var(--bg-soft)]"
        >
          <Plus size={14} strokeWidth={1.7} aria-hidden />
          เพิ่มบันทึกใหม่
        </button>
      )}
    </div>
  );
}
