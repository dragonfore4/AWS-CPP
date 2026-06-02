/**
 * Rendered when one or more of the three required env vars
 * (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY,
 * NEXT_PUBLIC_MEMO_PASSPHRASE) is missing at build time.
 */
export default function DisabledNotice() {
  return (
    <div className="rounded border border-[var(--rule)] bg-[var(--bg-elev)] p-6">
      <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
        Memos disabled
      </div>
      <p className="mt-2 text-sm text-[var(--ink-muted)]">
        ยังไม่ได้ตั้งค่า Supabase — กรอก{" "}
        <code className="font-mono text-[var(--ink)]">.env.local</code>{" "}
        ด้วยค่าจาก <code className="font-mono text-[var(--ink)]">.env.example</code>{" "}
        แล้ว build ใหม่อีกครั้ง
      </p>
    </div>
  );
}
