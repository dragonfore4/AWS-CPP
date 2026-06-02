import type { Memo } from "@/types/memo";

/**
 * Manual offline snapshot of the Supabase `memos` table.
 *
 * The site does NOT read from this file at runtime. It exists so the user
 * can paste an `INSERT` script back into the Supabase SQL editor if the
 * table is wiped (accepted risk in the design spec).
 *
 * Update by running a Supabase export and replacing the array below.
 */
export const memosSeed: Memo[] = [];
