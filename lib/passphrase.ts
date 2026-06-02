/**
 * Passphrase gate for the /memos editor.
 *
 * This is a UX gate, not a security boundary. The expected value is read
 * from `NEXT_PUBLIC_MEMO_PASSPHRASE`, which is inlined into the JS bundle.
 * Anyone willing to open DevTools can read it, and the Supabase anon key
 * lets them bypass the UI entirely. See the design spec for the full set
 * of accepted risks.
 *
 * Unlock state is stored in `sessionStorage` so it lasts only for the
 * current tab.
 */

const STORAGE_KEY = "memos_unlocked";
const expected = process.env.NEXT_PUBLIC_MEMO_PASSPHRASE ?? "";

export function isPassphraseConfigured(): boolean {
  return expected.length > 0;
}

/**
 * Check user input against the configured passphrase. Returns true on
 * match. Does not mutate unlock state.
 */
export function checkPassphrase(input: string): boolean {
  if (!expected) return false;
  return input === expected;
}

export function isUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function unlock(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* sessionStorage may be locked (Safari private mode etc.). Ignore. */
  }
}

export function lock(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
