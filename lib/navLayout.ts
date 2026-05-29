/**
 * Persisted preference for which navbar layout to render.
 *
 * - "category" — six rows grouped by AWS service category. Default.
 * - "stephane" — one flex-wrapped row in the Stephane Maarek course order.
 *
 * The active value is mirrored to `document.documentElement.dataset.navLayout`
 * by an inline blocking script (see `lib/themeScript.ts`) so the correct
 * layout is visible before paint and React never has to swap markup.
 */

export type NavLayout = "category" | "stephane";

export const NAV_LAYOUT_KEY = "nav_layout";
export const DEFAULT_NAV_LAYOUT: NavLayout = "category";

export function getNavLayout(): NavLayout {
  if (typeof window === "undefined") return DEFAULT_NAV_LAYOUT;
  try {
    const v = localStorage.getItem(NAV_LAYOUT_KEY);
    if (v === "category" || v === "stephane") return v;
    return DEFAULT_NAV_LAYOUT;
  } catch {
    return DEFAULT_NAV_LAYOUT;
  }
}

export function setNavLayout(layout: NavLayout): void {
  if (typeof window === "undefined") return;
  try {
    if (layout === DEFAULT_NAV_LAYOUT) {
      // Don't pollute storage with the default — keeps the document clean for
      // users who never opened the toggle.
      localStorage.removeItem(NAV_LAYOUT_KEY);
    } else {
      localStorage.setItem(NAV_LAYOUT_KEY, layout);
    }
    document.documentElement.dataset.navLayout = layout;
    window.dispatchEvent(new Event("nav-layout-change"));
  } catch {
    // ignore
  }
}
