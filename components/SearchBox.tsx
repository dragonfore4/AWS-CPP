"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { useRouter } from "next/navigation";
import { searchIndex } from "@/lib/searchIndex";
import { searchEntries, tokenize, type ScoredEntry } from "@/lib/search";
import { highlightTokens } from "@/lib/highlightMatch";
import { getAccentByKey } from "@/lib/categoryAccents";
import { Search, X, ChevronRight } from "./Icon";

const RECENTS_KEY = "search_recent";
const RECENTS_MAX = 5;
const RECENTS_EVENT = "search-recents-change";

/* ---------- recents helpers (localStorage) ----------
 *
 * `useSyncExternalStore` requires `getSnapshot` to return a stable
 * reference between calls when the underlying data hasn't changed.
 * Returning a fresh array from `readRecents()` on every render makes
 * React think the store keeps changing → infinite loop. We cache the
 * last-read array and invalidate it from the subscribe callback. The
 * pattern mirrors `components/HomepageProgress.tsx`.
 */

const EMPTY_RECENTS: readonly string[] = [];
let cachedRecents: readonly string[] | null = null;

function readRecentsRaw(): readonly string[] {
  if (typeof window === "undefined") return EMPTY_RECENTS;
  try {
    const raw = localStorage.getItem(RECENTS_KEY);
    if (!raw) return EMPTY_RECENTS;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY_RECENTS;
    const out = parsed
      .filter((s): s is string => typeof s === "string")
      .slice(0, RECENTS_MAX);
    return out.length === 0 ? EMPTY_RECENTS : out;
  } catch {
    return EMPTY_RECENTS;
  }
}

function getRecentsSnapshot(): readonly string[] {
  if (cachedRecents) return cachedRecents;
  cachedRecents = readRecentsRaw();
  return cachedRecents;
}

function getRecentsServerSnapshot(): readonly string[] {
  return EMPTY_RECENTS;
}

function writeRecents(query: string) {
  if (typeof window === "undefined") return;
  const trimmed = query.trim();
  if (!trimmed) return;
  try {
    const current = readRecentsRaw();
    const next = [trimmed, ...current.filter((q) => q !== trimmed)].slice(
      0,
      RECENTS_MAX,
    );
    localStorage.setItem(RECENTS_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(RECENTS_EVENT));
  } catch {
    // ignore
  }
}

function subscribeRecents(cb: () => void): () => void {
  const invalidate = () => {
    cachedRecents = null;
    cb();
  };
  window.addEventListener("storage", invalidate);
  window.addEventListener(RECENTS_EVENT, invalidate);
  return () => {
    window.removeEventListener("storage", invalidate);
    window.removeEventListener(RECENTS_EVENT, invalidate);
  };
}

/* ---------- mounted-boolean store (hydration-safe) ---------- */

function subscribeNoop(): () => void {
  return () => {};
}

/* ---------- viewport store (only governs trigger appearance) ----------
 *
 * The modal itself is identical on every viewport size, but the trigger
 * button looks different: a fake-input pill on desktop, a small icon-only
 * square on mobile. We read the viewport via matchMedia and keep React in
 * sync via useSyncExternalStore. Booleans are reference-stable so there is
 * no infinite-loop risk.
 */

function subscribeViewport(cb: () => void): () => void {
  const mq = window.matchMedia("(min-width: 640px)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getViewportSnapshot(): boolean {
  return window.matchMedia("(min-width: 640px)").matches;
}

function getViewportServerSnapshot(): boolean {
  // Assume desktop for SSR. The component additionally gates render on
  // `isMounted`, so server HTML always emits the same minimal placeholder.
  return true;
}

/* ---------- result row helpers ---------- */

function hrefFor(entry: ScoredEntry["entry"]): string {
  if (entry.kind === "topic") return `/topics/${entry.slug}`;
  return `/topics/${entry.slug}#${entry.sectionId}`;
}

/* =====================================================================
 * SearchBox — command-palette style.
 *
 * Trigger button lives in the navbar. Clicking the trigger or pressing
 * ⌘K / CtrlK opens a centered <dialog> that contains the search input
 * and result list. The modal is native (showModal()) so we get a focus
 * trap, ESC handling, and `inert` background for free, and it floats
 * over the page near the top — independent of scroll position.
 * --------------------------------------------------------------------- */

export default function SearchBox() {
  const isMounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
  const recents = useSyncExternalStore<readonly string[]>(
    subscribeRecents,
    getRecentsSnapshot,
    getRecentsServerSnapshot,
  );
  const isDesktop = useSyncExternalStore(
    subscribeViewport,
    getViewportSnapshot,
    getViewportServerSnapshot,
  );

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const listboxId = useId();
  const router = useRouter();

  /* Result derivation — pure useMemo. */
  const results = useMemo<ScoredEntry[]>(() => {
    if (!isMounted) return [];
    return searchEntries(searchIndex, query, 30);
  }, [isMounted, query]);

  const tokens = useMemo(() => tokenize(query), [query]);

  /* Clamp selection inline. Use Math.min instead of modulo so when the
     result list shrinks (e.g. user adds another character that narrows
     the match set), the selection lands on the *last* available row
     rather than wrapping back into the middle of the list. */
  const safeSelected =
    results.length === 0 ? 0 : Math.min(selected, results.length - 1);

  /* ⌘K / CtrlK global shortcut.
   *
   * Guards: ignore key-repeat (don't re-fire while held) and bail when the
   * palette is already open so a second ⌘K doesn't toggle/reopen on top of
   * the active modal. We deliberately preventDefault even on Linux/Firefox
   * where Ctrl+K is the browser's default search-bar shortcut — the
   * command-palette convention is strong enough that users expect ⌘K to
   * open the in-page search.
   */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        if (e.repeat || open) return;
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  /* Sync `open` -> dialog showModal/close.
   *
   * `preventScroll: true` keeps the page exactly where it is; without it,
   * the browser would attempt to bring the input into view, which can
   * jolt a scrolled article up to the top. */
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) {
      try {
        d.showModal();
      } catch {
        // ignore — only happens if the dialog is already open
      }
      // After showModal, focus the input without scroll-into-view.
      requestAnimationFrame(() => {
        inputRef.current?.focus({ preventScroll: true });
      });
    }
    if (!open && d.open) {
      d.close();
    }
  }, [open]);

  /* React when the user dismisses the dialog via the browser-native ESC
   * (which fires the dialog's `close` event but NOT a click) so our state
   * stays in sync. Effect runs once: dialogRef and setOpen are stable, so
   * we don't need to re-subscribe whenever `open` flips. */
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onClose = () => setOpen(false);
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  const navigateTo = useCallback(
    (entry: ScoredEntry["entry"]) => {
      writeRecents(query);
      setOpen(false);
      setQuery("");
      router.push(hrefFor(entry));
    },
    [query, router],
  );

  const onInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (results.length === 0) {
        if (e.key === "Escape") setOpen(false);
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => (s + 1) % results.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => (s - 1 + results.length) % results.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        const pick = results[safeSelected];
        if (pick) navigateTo(pick.entry);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    },
    [results, safeSelected, navigateTo],
  );

  const onDialogClick = useCallback(
    (e: React.MouseEvent<HTMLDialogElement>) => {
      // Close when user clicks the backdrop. The dialog element itself
      // fills the viewport so we have to detect by target identity.
      if (e.target === e.currentTarget) setOpen(false);
    },
    [],
  );

  const showEmptyState = open && query.trim().length === 0;
  const showNoResults = open && query.trim().length > 0 && results.length === 0;

  /* ---------------- result list ---------------- */

  const renderResults = () => (
    <ul
      id={listboxId}
      role="listbox"
      aria-label="Search results"
      className="max-h-[60vh] overflow-y-auto py-1"
      data-search-result
    >
      {results.map((r, i) => {
        const e = r.entry;
        // `accent` colours the dot bullet and the selected-row title only.
        // The matched-token <mark> highlights inside snippets use a
        // category-agnostic amber tint defined in app/globals.css so they
        // read consistently across all six topic categories.
        const accent = getAccentByKey(e.categoryKey);
        const isSel = i === safeSelected;
        const href = hrefFor(e);
        const primary =
          e.kind === "topic" ? e.title : `${e.topicTitle} › ${e.sectionTitle}`;
        const secondary = e.kind === "topic" ? e.subtitle : e.snippet;
        const meta = `sec ${e.sectionNumber} · ${accent.label}`;

        return (
          <li
            key={`${e.kind}-${e.slug}-${e.kind === "section" ? e.sectionId : ""}`}
          >
            <a
              href={href}
              role="option"
              aria-selected={isSel}
              onClick={(ev) => {
                // Honour modifier-clicks: Cmd/Ctrl-click → new tab,
                // Shift-click → new window, middle-click → new tab.
                // For all of those we let the browser handle the link
                // natively and skip our SPA navigation. Only intercept
                // a plain primary-button click.
                if (
                  ev.metaKey ||
                  ev.ctrlKey ||
                  ev.shiftKey ||
                  ev.altKey ||
                  ev.button !== 0
                ) {
                  return;
                }
                ev.preventDefault();
                navigateTo(e);
              }}
              onMouseEnter={() => setSelected(i)}
              className={
                "block px-3 py-2.5 transition-colors " +
                (isSel ? "bg-[var(--bg-soft)]" : "hover:bg-[var(--bg-soft)]")
              }
            >
              <div className="flex items-baseline gap-2">
                <span
                  aria-hidden
                  className={
                    "shrink-0 h-1.5 w-1.5 translate-y-[-2px] rounded-full " +
                    accent.fill
                  }
                />
                <span
                  className={
                    "text-sm font-medium " +
                    (isSel ? accent.text : "text-[var(--ink)]")
                  }
                >
                  {highlightTokens(primary, tokens)}
                </span>
              </div>
              {secondary && (
                <p className="mt-0.5 pl-3.5 text-xs text-[var(--ink-muted)] line-clamp-2">
                  {highlightTokens(secondary, tokens)}
                </p>
              )}
              <p className="mt-0.5 pl-3.5 text-[10px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
                {meta}
              </p>
            </a>
          </li>
        );
      })}
    </ul>
  );

  const renderEmpty = () => (
    <div className="px-3 py-3">
      {recents.length > 0 ? (
        <>
          <div className="mb-1.5 text-[10px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
            Recent searches
          </div>
          <ul className="space-y-0.5">
            {recents.map((q) => (
              <li key={q}>
                <button
                  type="button"
                  onClick={() => {
                    setQuery(q);
                    setSelected(0);
                  }}
                  className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm text-[var(--ink-muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]"
                >
                  <Search
                    size={13}
                    strokeWidth={1.7}
                    className="shrink-0 text-[var(--ink-faint)]"
                    aria-hidden
                  />
                  <span className="truncate">{q}</span>
                  <ChevronRight
                    size={12}
                    strokeWidth={1.7}
                    className="ml-auto shrink-0 text-[var(--ink-faint)]"
                    aria-hidden
                  />
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="px-2 py-2 text-sm text-[var(--ink-faint)]">
          พิมพ์เพื่อค้นหาหัวข้อ ส่วน หรือเนื้อหา
        </p>
      )}
    </div>
  );

  const renderNoResults = () => (
    <div className="px-4 py-6 text-center">
      <p className="text-sm text-[var(--ink-muted)]">
        ไม่พบผลลัพธ์สำหรับ &ldquo;{query}&rdquo;
      </p>
      <p className="mt-1 text-xs text-[var(--ink-faint)]">
        ลองใช้คำค้นที่สั้นลงหรือสะกดต่างกัน
      </p>
    </div>
  );

  /* ---------------- render ---------------- */

  // Pre-hydration: a viewport-agnostic placeholder so SSR HTML and the
  // first client paint match exactly. `h-8 w-8 sm:w-64` reserves the
  // expected trigger footprint.
  if (!isMounted) {
    return (
      <div
        aria-hidden
        className="h-8 w-8 sm:w-64 rounded-md border border-[var(--rule)] bg-[var(--bg-elev)] opacity-50"
      />
    );
  }

  const triggerLabel = "Search topics (Ctrl+K)";

  return (
    <>
      {/* Trigger — fake-input pill on desktop, icon button on mobile */}
      {isDesktop ? (
        <button
          type="button"
          aria-label={triggerLabel}
          onClick={() => setOpen(true)}
          className="group flex h-8 w-64 items-center gap-2 rounded-md border border-[var(--rule)] bg-[var(--bg-elev)] px-2.5 text-left transition-colors hover:border-[var(--rule-strong)]"
        >
          <Search
            size={14}
            strokeWidth={1.7}
            className="shrink-0 text-[var(--ink-faint)]"
            aria-hidden
          />
          <span className="flex-1 truncate text-sm text-[var(--ink-faint)]">
            Search topics…
          </span>
          <kbd
            aria-hidden
            className="shrink-0 inline-flex items-center rounded border border-[var(--rule)] bg-[var(--bg-soft)] px-1 font-mono text-[10px] text-[var(--ink-faint)]"
          >
            ⌘K
          </kbd>
        </button>
      ) : (
        <button
          type="button"
          aria-label={triggerLabel}
          onClick={() => setOpen(true)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--rule)] bg-[var(--bg-elev)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-soft)] transition-colors"
        >
          <Search size={15} strokeWidth={1.7} aria-hidden />
        </button>
      )}

      {/* Modal — native <dialog>.
       *
       * The element is always present in the DOM so the close-event
       * listener and the showModal/close sync effect can rely on
       * `dialogRef.current` being non-null right after mount. The
       * <dialog> stays inert until JS calls showModal(), so an empty
       * <dialog> in the tree has no visual or focus impact.
       *
       * The interior is gated on `open` so we don't build the result
       * list, run highlightTokens, or render the recents block on every
       * surrounding re-render while the palette is closed. */}
      <dialog
        ref={dialogRef}
        onClick={onDialogClick}
        className="search-palette"
        aria-label="Search"
        data-print="hide"
      >
        {open && (
          <div
            className="search-palette__panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header — input + ESC chip + close button */}
            <div className="flex h-12 items-center gap-2 border-b border-[var(--rule)] px-3">
              <Search
                size={15}
                strokeWidth={1.7}
                className="shrink-0 text-[var(--ink-faint)]"
                aria-hidden
              />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded={open}
                aria-controls={listboxId}
                aria-autocomplete="list"
                aria-label="Search topics"
                placeholder="Search topics, sections, content…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelected(0);
                }}
                onKeyDown={onInputKeyDown}
                className="w-full bg-transparent text-sm text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:outline-none sm:text-[15px]"
              />
              <kbd
                aria-hidden
                className="hidden sm:inline-flex shrink-0 items-center rounded border border-[var(--rule)] bg-[var(--bg-soft)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--ink-faint)]"
              >
                Esc
              </kbd>
              <button
                type="button"
                aria-label="Close search"
                onClick={() => setOpen(false)}
                className="sm:hidden shrink-0 inline-flex h-8 w-8 items-center justify-center rounded text-[var(--ink-muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]"
              >
                <X size={16} strokeWidth={1.7} aria-hidden />
              </button>
            </div>

            {/* Body */}
            <div className="min-h-[6rem]">
              {showEmptyState && renderEmpty()}
              {showNoResults && renderNoResults()}
              {results.length > 0 && renderResults()}
            </div>

            {/* Footer — keyboard hints */}
            <div className="hidden sm:flex h-9 items-center justify-end gap-4 border-t border-[var(--rule)] px-3 text-[10px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
              <span className="inline-flex items-center gap-1">
                <kbd className="rounded border border-[var(--rule)] bg-[var(--bg-soft)] px-1 font-mono text-[10px] normal-case">
                  ↑↓
                </kbd>
                <span>navigate</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <kbd className="rounded border border-[var(--rule)] bg-[var(--bg-soft)] px-1 font-mono text-[10px] normal-case">
                  ↵
                </kbd>
                <span>open</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <kbd className="rounded border border-[var(--rule)] bg-[var(--bg-soft)] px-1 font-mono text-[10px] normal-case">
                  esc
                </kbd>
                <span>close</span>
              </span>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
