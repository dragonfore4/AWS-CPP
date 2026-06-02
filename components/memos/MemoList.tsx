"use client";

import { useMemo } from "react";
import type { Memo } from "@/types/memo";
import MemoCard from "./MemoCard";
import TagFilter from "./TagFilter";

interface Props {
  memos: Memo[];
  unlocked: boolean;
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  onEdit: (memo: Memo) => void;
  onDelete: (memo: Memo) => void;
}

export default function MemoList({
  memos,
  unlocked,
  selectedTag,
  onSelectTag,
  onEdit,
  onDelete,
}: Props) {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    for (const m of memos) for (const t of m.tags) set.add(t);
    return Array.from(set).sort();
  }, [memos]);

  const visible = useMemo(() => {
    if (!selectedTag) return memos;
    return memos.filter((m) => m.tags.includes(selectedTag));
  }, [memos, selectedTag]);

  return (
    <div>
      {allTags.length > 0 && (
        <div className="mb-2">
          <TagFilter
            tags={allTags}
            selected={selectedTag}
            onSelect={onSelectTag}
          />
        </div>
      )}

      {visible.length === 0 ? (
        <p className="py-10 text-center text-sm text-[var(--ink-muted)]">
          ไม่มีบันทึกที่ตรงกับแท็กนี้
        </p>
      ) : (
        <div>
          {visible.map((memo) => (
            <MemoCard
              key={memo.id}
              memo={memo}
              unlocked={unlocked}
              onEdit={() => onEdit(memo)}
              onDelete={() => onDelete(memo)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
