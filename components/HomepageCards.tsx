"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { getAllProgress } from "@/lib/progress";
import { QuizProgress } from "@/types/topic";
import { getAccent } from "@/lib/accentClasses";

export interface TopicCardData {
  slug: string;
  title: string;
  subtitle: string;
  emoji: string;
  accent: string;
  keyPoints: string[];
}

interface HomepageCardsProps {
  topics: TopicCardData[];
}

function getSnapshot(): Record<string, QuizProgress> {
  return getAllProgress();
}

function getServerSnapshot(): Record<string, QuizProgress> {
  return {};
}

function subscribe(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export default function HomepageCards({ topics }: HomepageCardsProps) {
  const progress = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {topics.map((topic) => {
        const a = getAccent(topic.accent);
        const quizProgress = progress[topic.slug];

        return (
          <Link
            key={topic.slug}
            href={`/topics/${topic.slug}`}
            className={`group block bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-7 transition-all duration-200 ${a.hoverBorder500_50} hover:shadow-lg ${a.shadow500_10}`}
          >
            {/* Emoji + Title */}
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl shrink-0">{topic.emoji}</span>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {topic.title}
                </h3>
                <p className="text-sm text-slate-300 mt-0.5">{topic.subtitle}</p>
              </div>
            </div>

            {/* Key Points */}
            <ul className="space-y-2 mb-4">
              {topic.keyPoints.slice(0, 4).map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed"
                >
                  <span className={`${a.text400} mt-1 shrink-0`} aria-hidden>
                    •
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: point }} />
                </li>
              ))}
            </ul>

            {/* Quiz Progress */}
            {quizProgress && (
              <div
                className={`flex items-center gap-2 text-sm ${a.text400} border-t border-slate-800 pt-3 font-medium`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Quiz: {quizProgress.score}/{quizProgress.total}
                </span>
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
