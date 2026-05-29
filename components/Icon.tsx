import {
  Cpu,
  HardDrive,
  Network,
  Database,
  ShieldCheck,
  LayoutGrid,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sun,
  Moon,
  Monitor,
  Type,
  Printer,
  X,
  Check,
  Menu,
  ChevronRight,
  Search,
  Info,
  AlertTriangle,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import type { CategoryKey } from "@/lib/categoryAccents";

const categoryIcons: Record<CategoryKey, LucideIcon> = {
  compute: Cpu,
  storage: HardDrive,
  networking: Network,
  database: Database,
  security: ShieldCheck,
  management: LayoutGrid,
};

export function CategoryIcon({
  category,
  className = "",
  size = 18,
}: {
  category: CategoryKey;
  className?: string;
  size?: number;
}) {
  const I = categoryIcons[category];
  return <I size={size} strokeWidth={1.6} className={className} aria-hidden />;
}

// Re-export discrete icons so other files import from a single module.
export {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sun,
  Moon,
  Monitor,
  Type,
  Printer,
  X,
  Check,
  Menu,
  ChevronRight,
  Search,
  Info,
  AlertTriangle,
  Lightbulb,
};
