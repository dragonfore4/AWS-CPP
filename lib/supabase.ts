import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Single Supabase client for the whole app, lazily instantiated on first
 * access. Returns `null` when env vars are missing so callers can render a
 * disabled-state UI instead of throwing.
 *
 * The anon key is intentionally embedded in the client bundle. The memos
 * table has RLS disabled — see the design spec's accepted-risk section.
 */

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let cached: SupabaseClient | null | undefined;

export function getSupabase(): SupabaseClient | null {
  if (cached !== undefined) return cached;
  if (!url || !anonKey) {
    cached = null;
    return cached;
  }
  cached = createClient(url, anonKey, {
    auth: {
      // We don't use Supabase Auth — disable session persistence so the
      // client doesn't write to localStorage unnecessarily.
      persistSession: false,
      autoRefreshToken: false,
    },
  });
  return cached;
}

export function isSupabaseConfigured(): boolean {
  return Boolean(url) && Boolean(anonKey);
}
