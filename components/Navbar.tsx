import Link from "next/link";
import { topics } from "@/data/index";
import { getAccent } from "@/lib/accentClasses";

interface NavbarProps {
  activeSlug?: string;
  accent?: string;
}

export default function Navbar({ activeSlug, accent }: NavbarProps) {
  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
        {/* Row 1: Logo */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold text-lg md:text-xl tracking-tight hover:text-indigo-300 transition-colors"
          >
            <span className="text-xl" aria-hidden>
              ☁️
            </span>
            <span>AWS CLF-C02</span>
          </Link>
        </div>

        {/* Row 2: Topics — flex-wrap so buttons drop to next line as needed */}
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => {
            const isActive = topic.slug === activeSlug;
            const a = getAccent(accent || topic.accent);

            return (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className={
                  isActive
                    ? `px-3 py-1.5 rounded-md ${a.bg500} text-white text-sm font-semibold transition-opacity hover:opacity-90`
                    : "px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm transition-colors"
                }
              >
                {topic.title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
