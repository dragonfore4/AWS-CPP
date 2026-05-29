/**
 * Static accent class map for Tailwind v4 JIT compilation.
 *
 * Tailwind v4's JIT scanner only detects literal class names in source files.
 * Template strings like `text-${accent}-400` are invisible to the scanner,
 * so the corresponding CSS rules are never generated.
 *
 * This file declares every accent class used in the app as a literal string,
 * making them all visible to the scanner. Components import the map and look
 * up the right string at runtime.
 */

export type AccentColor =
  | "amber"
  | "blue"
  | "cyan"
  | "emerald"
  | "fuchsia"
  | "green"
  | "indigo"
  | "lime"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "rose"
  | "sky"
  | "slate"
  | "teal"
  | "violet"
  | "yellow";

export interface AccentClasses {
  /** Solid foreground/text colors */
  text300: string;
  text400: string;
  /** Solid background (for active nav button, etc.) */
  bg500: string;
  /** Translucent backgrounds */
  bg500_10: string;
  bg500_20: string;
  /** Borders */
  border500_30: string;
  border500_50: string;
  /** Hover variants */
  hoverBorder500_50: string;
  hoverText300: string;
  hoverBg500: string;
  /** Shadow on card hover */
  shadow500_10: string;
}

export const accentClasses: Record<AccentColor, AccentClasses> = {
  amber: {
    text300: "text-amber-300",
    text400: "text-amber-400",
    bg500: "bg-amber-500",
    bg500_10: "bg-amber-500/10",
    bg500_20: "bg-amber-500/20",
    border500_30: "border-amber-500/30",
    border500_50: "border-amber-500/50",
    hoverBorder500_50: "hover:border-amber-500/50",
    hoverText300: "hover:text-amber-300",
    hoverBg500: "hover:bg-amber-500",
    shadow500_10: "hover:shadow-amber-500/10",
  },
  blue: {
    text300: "text-blue-300",
    text400: "text-blue-400",
    bg500: "bg-blue-500",
    bg500_10: "bg-blue-500/10",
    bg500_20: "bg-blue-500/20",
    border500_30: "border-blue-500/30",
    border500_50: "border-blue-500/50",
    hoverBorder500_50: "hover:border-blue-500/50",
    hoverText300: "hover:text-blue-300",
    hoverBg500: "hover:bg-blue-500",
    shadow500_10: "hover:shadow-blue-500/10",
  },
  cyan: {
    text300: "text-cyan-300",
    text400: "text-cyan-400",
    bg500: "bg-cyan-500",
    bg500_10: "bg-cyan-500/10",
    bg500_20: "bg-cyan-500/20",
    border500_30: "border-cyan-500/30",
    border500_50: "border-cyan-500/50",
    hoverBorder500_50: "hover:border-cyan-500/50",
    hoverText300: "hover:text-cyan-300",
    hoverBg500: "hover:bg-cyan-500",
    shadow500_10: "hover:shadow-cyan-500/10",
  },
  emerald: {
    text300: "text-emerald-300",
    text400: "text-emerald-400",
    bg500: "bg-emerald-500",
    bg500_10: "bg-emerald-500/10",
    bg500_20: "bg-emerald-500/20",
    border500_30: "border-emerald-500/30",
    border500_50: "border-emerald-500/50",
    hoverBorder500_50: "hover:border-emerald-500/50",
    hoverText300: "hover:text-emerald-300",
    hoverBg500: "hover:bg-emerald-500",
    shadow500_10: "hover:shadow-emerald-500/10",
  },
  fuchsia: {
    text300: "text-fuchsia-300",
    text400: "text-fuchsia-400",
    bg500: "bg-fuchsia-500",
    bg500_10: "bg-fuchsia-500/10",
    bg500_20: "bg-fuchsia-500/20",
    border500_30: "border-fuchsia-500/30",
    border500_50: "border-fuchsia-500/50",
    hoverBorder500_50: "hover:border-fuchsia-500/50",
    hoverText300: "hover:text-fuchsia-300",
    hoverBg500: "hover:bg-fuchsia-500",
    shadow500_10: "hover:shadow-fuchsia-500/10",
  },
  green: {
    text300: "text-green-300",
    text400: "text-green-400",
    bg500: "bg-green-500",
    bg500_10: "bg-green-500/10",
    bg500_20: "bg-green-500/20",
    border500_30: "border-green-500/30",
    border500_50: "border-green-500/50",
    hoverBorder500_50: "hover:border-green-500/50",
    hoverText300: "hover:text-green-300",
    hoverBg500: "hover:bg-green-500",
    shadow500_10: "hover:shadow-green-500/10",
  },
  indigo: {
    text300: "text-indigo-300",
    text400: "text-indigo-400",
    bg500: "bg-indigo-500",
    bg500_10: "bg-indigo-500/10",
    bg500_20: "bg-indigo-500/20",
    border500_30: "border-indigo-500/30",
    border500_50: "border-indigo-500/50",
    hoverBorder500_50: "hover:border-indigo-500/50",
    hoverText300: "hover:text-indigo-300",
    hoverBg500: "hover:bg-indigo-500",
    shadow500_10: "hover:shadow-indigo-500/10",
  },
  lime: {
    text300: "text-lime-300",
    text400: "text-lime-400",
    bg500: "bg-lime-500",
    bg500_10: "bg-lime-500/10",
    bg500_20: "bg-lime-500/20",
    border500_30: "border-lime-500/30",
    border500_50: "border-lime-500/50",
    hoverBorder500_50: "hover:border-lime-500/50",
    hoverText300: "hover:text-lime-300",
    hoverBg500: "hover:bg-lime-500",
    shadow500_10: "hover:shadow-lime-500/10",
  },
  orange: {
    text300: "text-orange-300",
    text400: "text-orange-400",
    bg500: "bg-orange-500",
    bg500_10: "bg-orange-500/10",
    bg500_20: "bg-orange-500/20",
    border500_30: "border-orange-500/30",
    border500_50: "border-orange-500/50",
    hoverBorder500_50: "hover:border-orange-500/50",
    hoverText300: "hover:text-orange-300",
    hoverBg500: "hover:bg-orange-500",
    shadow500_10: "hover:shadow-orange-500/10",
  },
  pink: {
    text300: "text-pink-300",
    text400: "text-pink-400",
    bg500: "bg-pink-500",
    bg500_10: "bg-pink-500/10",
    bg500_20: "bg-pink-500/20",
    border500_30: "border-pink-500/30",
    border500_50: "border-pink-500/50",
    hoverBorder500_50: "hover:border-pink-500/50",
    hoverText300: "hover:text-pink-300",
    hoverBg500: "hover:bg-pink-500",
    shadow500_10: "hover:shadow-pink-500/10",
  },
  purple: {
    text300: "text-purple-300",
    text400: "text-purple-400",
    bg500: "bg-purple-500",
    bg500_10: "bg-purple-500/10",
    bg500_20: "bg-purple-500/20",
    border500_30: "border-purple-500/30",
    border500_50: "border-purple-500/50",
    hoverBorder500_50: "hover:border-purple-500/50",
    hoverText300: "hover:text-purple-300",
    hoverBg500: "hover:bg-purple-500",
    shadow500_10: "hover:shadow-purple-500/10",
  },
  red: {
    text300: "text-red-300",
    text400: "text-red-400",
    bg500: "bg-red-500",
    bg500_10: "bg-red-500/10",
    bg500_20: "bg-red-500/20",
    border500_30: "border-red-500/30",
    border500_50: "border-red-500/50",
    hoverBorder500_50: "hover:border-red-500/50",
    hoverText300: "hover:text-red-300",
    hoverBg500: "hover:bg-red-500",
    shadow500_10: "hover:shadow-red-500/10",
  },
  rose: {
    text300: "text-rose-300",
    text400: "text-rose-400",
    bg500: "bg-rose-500",
    bg500_10: "bg-rose-500/10",
    bg500_20: "bg-rose-500/20",
    border500_30: "border-rose-500/30",
    border500_50: "border-rose-500/50",
    hoverBorder500_50: "hover:border-rose-500/50",
    hoverText300: "hover:text-rose-300",
    hoverBg500: "hover:bg-rose-500",
    shadow500_10: "hover:shadow-rose-500/10",
  },
  sky: {
    text300: "text-sky-300",
    text400: "text-sky-400",
    bg500: "bg-sky-500",
    bg500_10: "bg-sky-500/10",
    bg500_20: "bg-sky-500/20",
    border500_30: "border-sky-500/30",
    border500_50: "border-sky-500/50",
    hoverBorder500_50: "hover:border-sky-500/50",
    hoverText300: "hover:text-sky-300",
    hoverBg500: "hover:bg-sky-500",
    shadow500_10: "hover:shadow-sky-500/10",
  },
  slate: {
    text300: "text-slate-300",
    text400: "text-slate-400",
    bg500: "bg-slate-500",
    bg500_10: "bg-slate-500/10",
    bg500_20: "bg-slate-500/20",
    border500_30: "border-slate-500/30",
    border500_50: "border-slate-500/50",
    hoverBorder500_50: "hover:border-slate-500/50",
    hoverText300: "hover:text-slate-300",
    hoverBg500: "hover:bg-slate-500",
    shadow500_10: "hover:shadow-slate-500/10",
  },
  teal: {
    text300: "text-teal-300",
    text400: "text-teal-400",
    bg500: "bg-teal-500",
    bg500_10: "bg-teal-500/10",
    bg500_20: "bg-teal-500/20",
    border500_30: "border-teal-500/30",
    border500_50: "border-teal-500/50",
    hoverBorder500_50: "hover:border-teal-500/50",
    hoverText300: "hover:text-teal-300",
    hoverBg500: "hover:bg-teal-500",
    shadow500_10: "hover:shadow-teal-500/10",
  },
  violet: {
    text300: "text-violet-300",
    text400: "text-violet-400",
    bg500: "bg-violet-500",
    bg500_10: "bg-violet-500/10",
    bg500_20: "bg-violet-500/20",
    border500_30: "border-violet-500/30",
    border500_50: "border-violet-500/50",
    hoverBorder500_50: "hover:border-violet-500/50",
    hoverText300: "hover:text-violet-300",
    hoverBg500: "hover:bg-violet-500",
    shadow500_10: "hover:shadow-violet-500/10",
  },
  yellow: {
    text300: "text-yellow-300",
    text400: "text-yellow-400",
    bg500: "bg-yellow-500",
    bg500_10: "bg-yellow-500/10",
    bg500_20: "bg-yellow-500/20",
    border500_30: "border-yellow-500/30",
    border500_50: "border-yellow-500/50",
    hoverBorder500_50: "hover:border-yellow-500/50",
    hoverText300: "hover:text-yellow-300",
    hoverBg500: "hover:bg-yellow-500",
    shadow500_10: "hover:shadow-yellow-500/10",
  },
};

/**
 * Look up the accent classes for a given accent name. Falls back to slate
 * if the accent name is not recognised.
 */
export function getAccent(accent: string): AccentClasses {
  if (accent in accentClasses) {
    return accentClasses[accent as AccentColor];
  }
  return accentClasses.slate;
}
