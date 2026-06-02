import { getSupabase } from "./supabase";
import type { Memo, MemoInput } from "@/types/memo";

const TABLE = "memos";

/**
 * Thrown by every helper when Supabase env vars are missing. Callers should
 * gate on `isSupabaseConfigured()` first; this exists only as a defensive
 * fallback.
 */
export class MemosNotConfiguredError extends Error {
  constructor() {
    super("Supabase is not configured");
    this.name = "MemosNotConfiguredError";
  }
}

function client() {
  const c = getSupabase();
  if (!c) throw new MemosNotConfiguredError();
  return c;
}

/**
 * Normalise tags before sending to Supabase: trim each, lowercase each,
 * drop empties, dedupe while preserving first-seen order.
 */
export function normaliseTags(raw: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const t of raw) {
    const v = t.trim().toLowerCase();
    if (!v || seen.has(v)) continue;
    seen.add(v);
    out.push(v);
  }
  return out;
}

/** List all memos, newest first. */
export async function listMemos(): Promise<Memo[]> {
  const { data, error } = await client()
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Memo[];
}

/** Insert one memo. Returns the persisted row. */
export async function createMemo(input: MemoInput): Promise<Memo> {
  const payload = {
    title: input.title.trim(),
    body: input.body,
    tags: normaliseTags(input.tags),
  };
  const { data, error } = await client()
    .from(TABLE)
    .insert(payload)
    .select()
    .single();
  if (error) throw error;
  return data as Memo;
}

/** Update one memo by id. Returns the persisted row. */
export async function updateMemo(id: string, input: MemoInput): Promise<Memo> {
  const payload = {
    title: input.title.trim(),
    body: input.body,
    tags: normaliseTags(input.tags),
  };
  const { data, error } = await client()
    .from(TABLE)
    .update(payload)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data as Memo;
}

/** Delete one memo by id. */
export async function deleteMemo(id: string): Promise<void> {
  const { error } = await client().from(TABLE).delete().eq("id", id);
  if (error) throw error;
}
