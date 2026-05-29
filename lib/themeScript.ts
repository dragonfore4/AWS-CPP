/**
 * Inline blocking script that resolves the active theme before paint.
 *
 * Runs synchronously in <head>, before React hydrates, so users never see a
 * flash of the wrong colour. Reads from localStorage["theme"] first; if
 * unset, falls back to the system `prefers-color-scheme` query.
 *
 * The script is deliberately small, dependency-free, and wrapped in a
 * try/catch so a broken localStorage (Safari private mode, locked storage
 * partition, etc.) never aborts the page.
 */
export const themeScript = `(function(){try{var s=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s==='light'||s==='dark'?s:(m?'dark':'light');document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.dataset.theme='light';}})();`;

/**
 * Inline script that swaps the persisted font-size class on <body> before
 * paint.
 *
 * The server already renders `font-md` in the body className (the default),
 * so to keep React hydration matched we *only touch the DOM if the stored
 * choice differs*. When the user has never picked a size — or has picked
 * md — we leave the server-rendered class alone and React hydrates cleanly.
 */
export const fontSizeScript = `(function(){try{var s=localStorage.getItem('font_size_preference');if(s==='sm'||s==='lg'){document.body.classList.remove('font-md');document.body.classList.add('font-'+s);}}catch(e){}})();`;

/**
 * Inline blocking script that applies the persisted navbar layout choice to
 * `<html data-nav-layout="...">` before paint.
 *
 * The default is "category" and the server renders both layouts. CSS in
 * `globals.css` hides the inactive one based on this attribute, so toggling
 * never triggers a React re-render or hydration mismatch.
 */
export const navLayoutScript = `(function(){try{var s=localStorage.getItem('nav_layout');var v=s==='stephane'?'stephane':'category';document.documentElement.dataset.navLayout=v;}catch(e){document.documentElement.dataset.navLayout='category';}})();`;
