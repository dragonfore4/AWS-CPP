/**
 * One memo record as stored in the Supabase `memos` table.
 *
 * `id`, `created_at`, `updated_at` are managed by Postgres (defaults +
 * trigger). The client never writes them.
 */
export interface Memo {
  id: string;
  title: string;
  body: string;
  tags: string[];
  created_at: string; // ISO 8601 timestamp from Postgres
  updated_at: string; // ISO 8601 timestamp from Postgres
}

/**
 * Shape sent to Supabase on insert / update. Tags are normalised
 * (trimmed, lowercased, deduped) by the caller before being passed in.
 */
export interface MemoInput {
  title: string;
  body: string;
  tags: string[];
}
