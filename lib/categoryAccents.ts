/**
 * Category-based accent system.
 *
 * Replaces the per-topic 18-color rainbow with 6 stable accents grouped by
 * AWS service category. Each topic's `category` field determines its accent;
 * the `accent` field on TopicData is preserved but no longer read by UI.
 *
 * All Tailwind class strings are written as literals so the v4 JIT scanner
 * picks them up. Do NOT build them with template strings.
 */

export type CategoryKey =
  | "compute"
  | "storage"
  | "networking"
  | "database"
  | "security"
  | "management";

export interface CategoryAccent {
  key: CategoryKey;
  /** Display label (English) for grouping headers. */
  label: string;
  /** Display label (Thai) for grouping headers. */
  labelTh: string;
  /** Foreground text class — used for headings, links, accent text. */
  text: string;
  /** Hover variant of `text`. */
  textHover: string;
  /** Subtle tinted background for callout/Quiz answer states. */
  tint: string;
  /** Solid fill — used for tiny dots, progress bars. */
  fill: string;
  /**
   * Solid fill scoped to ::before pseudo-element — used for the left
   * indicator strip in the section TOC. Written as literals so Tailwind's
   * JIT scanner picks them up.
   */
  markerFill: string;
  /** Border colour, full strength, for accent rules. */
  border: string;
  /** Border colour, soft, for hover. */
  borderHover: string;
  /** Background for the accent fill button (Quiz Next, etc.). */
  buttonBg: string;
  /** Hover variant of `buttonBg`. */
  buttonBgHover: string;
  /** Inline style hex used by ReadingProgress (CSS color, not class). */
  hex: string;
  /** Inline code text colour, paired with bg-soft + border-rule. */
  codeText: string;
  /** Bullet dot colour for list items. */
  bullet: string;
  /**
   * Background tint for the display "section number" floating beside a
   * topic page heading. Slightly stronger than `tint` so the chapter
   * mark reads from a distance.
   */
  numberBg: string;
  /**
   * Hex colours for the marker-pen highlight applied to <strong>. Set as
   * inline style on the topic <article>, then read by globals.css.
   */
  highlight: { light: string; dark: string };
}

/**
 * Category → accent mapping. All classes are literals.
 */
const accents: Record<CategoryKey, CategoryAccent> = {
  compute: {
    key: "compute",
    label: "Compute",
    labelTh: "ประมวลผล",
    text: "text-indigo-700 dark:text-indigo-300",
    textHover: "hover:text-indigo-800 dark:hover:text-indigo-200",
    tint: "bg-indigo-50 dark:bg-indigo-950/40",
    fill: "bg-indigo-600 dark:bg-indigo-400",
    markerFill: "before:bg-indigo-600 dark:before:bg-indigo-400",
    border: "border-indigo-600 dark:border-indigo-400",
    borderHover: "hover:border-indigo-500 dark:hover:border-indigo-400",
    buttonBg: "bg-indigo-700 dark:bg-indigo-500",
    buttonBgHover: "hover:bg-indigo-800 dark:hover:bg-indigo-400",
    hex: "#4f46e5",
    codeText: "text-indigo-800 dark:text-indigo-200",
    bullet: "text-indigo-500 dark:text-indigo-400",
    numberBg: "bg-indigo-100 dark:bg-indigo-950/60",
    highlight: { light: "rgba(99, 102, 241, 0.16)", dark: "rgba(165, 180, 252, 0.18)" },
  },
  storage: {
    key: "storage",
    label: "Storage",
    labelTh: "จัดเก็บข้อมูล",
    text: "text-amber-700 dark:text-amber-300",
    textHover: "hover:text-amber-800 dark:hover:text-amber-200",
    tint: "bg-amber-50 dark:bg-amber-950/40",
    fill: "bg-amber-600 dark:bg-amber-400",
    markerFill: "before:bg-amber-600 dark:before:bg-amber-400",
    border: "border-amber-600 dark:border-amber-400",
    borderHover: "hover:border-amber-500 dark:hover:border-amber-400",
    buttonBg: "bg-amber-700 dark:bg-amber-500",
    buttonBgHover: "hover:bg-amber-800 dark:hover:bg-amber-400",
    hex: "#b45309",
    codeText: "text-amber-800 dark:text-amber-200",
    bullet: "text-amber-500 dark:text-amber-400",
    numberBg: "bg-amber-100 dark:bg-amber-950/60",
    highlight: { light: "rgba(245, 158, 11, 0.20)", dark: "rgba(252, 211, 77, 0.18)" },
  },
  networking: {
    key: "networking",
    label: "Networking",
    labelTh: "เครือข่าย",
    text: "text-violet-700 dark:text-violet-300",
    textHover: "hover:text-violet-800 dark:hover:text-violet-200",
    tint: "bg-violet-50 dark:bg-violet-950/40",
    fill: "bg-violet-600 dark:bg-violet-400",
    markerFill: "before:bg-violet-600 dark:before:bg-violet-400",
    border: "border-violet-600 dark:border-violet-400",
    borderHover: "hover:border-violet-500 dark:hover:border-violet-400",
    buttonBg: "bg-violet-700 dark:bg-violet-500",
    buttonBgHover: "hover:bg-violet-800 dark:hover:bg-violet-400",
    hex: "#6d28d9",
    codeText: "text-violet-800 dark:text-violet-200",
    bullet: "text-violet-500 dark:text-violet-400",
    numberBg: "bg-violet-100 dark:bg-violet-950/60",
    highlight: { light: "rgba(139, 92, 246, 0.16)", dark: "rgba(196, 181, 253, 0.18)" },
  },
  database: {
    key: "database",
    label: "Database & Analytics",
    labelTh: "ฐานข้อมูลและวิเคราะห์",
    text: "text-emerald-700 dark:text-emerald-300",
    textHover: "hover:text-emerald-800 dark:hover:text-emerald-200",
    tint: "bg-emerald-50 dark:bg-emerald-950/40",
    fill: "bg-emerald-600 dark:bg-emerald-400",
    markerFill: "before:bg-emerald-600 dark:before:bg-emerald-400",
    border: "border-emerald-600 dark:border-emerald-400",
    borderHover: "hover:border-emerald-500 dark:hover:border-emerald-400",
    buttonBg: "bg-emerald-700 dark:bg-emerald-500",
    buttonBgHover: "hover:bg-emerald-800 dark:hover:bg-emerald-400",
    hex: "#047857",
    codeText: "text-emerald-800 dark:text-emerald-200",
    bullet: "text-emerald-500 dark:text-emerald-400",
    numberBg: "bg-emerald-100 dark:bg-emerald-950/60",
    highlight: { light: "rgba(16, 185, 129, 0.18)", dark: "rgba(110, 231, 183, 0.18)" },
  },
  security: {
    key: "security",
    label: "Security & Identity",
    labelTh: "ความปลอดภัยและตัวตน",
    text: "text-rose-700 dark:text-rose-300",
    textHover: "hover:text-rose-800 dark:hover:text-rose-200",
    tint: "bg-rose-50 dark:bg-rose-950/40",
    fill: "bg-rose-600 dark:bg-rose-400",
    markerFill: "before:bg-rose-600 dark:before:bg-rose-400",
    border: "border-rose-600 dark:border-rose-400",
    borderHover: "hover:border-rose-500 dark:hover:border-rose-400",
    buttonBg: "bg-rose-700 dark:bg-rose-500",
    buttonBgHover: "hover:bg-rose-800 dark:hover:bg-rose-400",
    hex: "#be123c",
    codeText: "text-rose-800 dark:text-rose-200",
    bullet: "text-rose-500 dark:text-rose-400",
    numberBg: "bg-rose-100 dark:bg-rose-950/60",
    highlight: { light: "rgba(244, 63, 94, 0.16)", dark: "rgba(253, 164, 175, 0.18)" },
  },
  management: {
    key: "management",
    label: "Management & Foundations",
    labelTh: "บริหารจัดการและพื้นฐาน",
    text: "text-sky-700 dark:text-sky-300",
    textHover: "hover:text-sky-800 dark:hover:text-sky-200",
    tint: "bg-sky-50 dark:bg-sky-950/40",
    fill: "bg-sky-600 dark:bg-sky-400",
    markerFill: "before:bg-sky-600 dark:before:bg-sky-400",
    border: "border-sky-600 dark:border-sky-400",
    borderHover: "hover:border-sky-500 dark:hover:border-sky-400",
    buttonBg: "bg-sky-700 dark:bg-sky-500",
    buttonBgHover: "hover:bg-sky-800 dark:hover:bg-sky-400",
    hex: "#0369a1",
    codeText: "text-sky-800 dark:text-sky-200",
    bullet: "text-sky-500 dark:text-sky-400",
    numberBg: "bg-sky-100 dark:bg-sky-950/60",
    highlight: { light: "rgba(14, 165, 233, 0.16)", dark: "rgba(125, 211, 252, 0.18)" },
  },
};

/**
 * Map a topic.category string (free-form, set by data files) to a category key.
 * Anything unrecognised falls back to "management" so layout never breaks.
 */
export function categoryKeyFor(category: string): CategoryKey {
  const c = category.toLowerCase();
  if (c.includes("compute")) return "compute";
  if (c.includes("storage")) return "storage";
  if (c.includes("network")) return "networking";
  if (
    c.includes("database") ||
    c.includes("analytics") ||
    c.includes("data") ||
    c.includes("machine learning") ||
    c.includes("ml")
  ) {
    return "database";
  }
  if (
    c.includes("security") ||
    c.includes("identity") ||
    c.includes("iam") ||
    c.includes("compliance")
  ) {
    return "security";
  }
  return "management";
}

/**
 * Topic-slug → category override map. Topics whose category string is
 * ambiguous (or whose AWS grouping differs from the literal category text)
 * land in the right bucket here.
 */
const slugOverrides: Record<string, CategoryKey> = {
  "cloud-concepts": "management",
  iam: "security",
  ec2: "compute",
  "ec2-storage": "storage",
  "elb-asg": "compute",
  s3: "storage",
  databases: "database",
  "other-compute": "compute",
  deployment: "management",
  "global-infrastructure": "networking",
  "cloud-integration": "networking",
  "cloud-monitoring": "management",
  vpc: "networking",
  security: "security",
  "machine-learning": "database",
  "account-management": "management",
  "advanced-identity": "security",
  "other-services": "management",
  "well-architected": "management",
  "exam-tips": "management",
};

export function getCategoryAccent(slug: string, category: string): CategoryAccent {
  const key = slugOverrides[slug] ?? categoryKeyFor(category);
  return accents[key];
}

export function getAccentByKey(key: CategoryKey): CategoryAccent {
  return accents[key];
}

/** Iteration order used by the homepage list and the topics overlay. */
export const categoryOrder: CategoryKey[] = [
  "management",
  "security",
  "compute",
  "storage",
  "networking",
  "database",
];
