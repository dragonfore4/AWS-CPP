"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { QuizQuestion, QuizProgress } from "@/types/topic";
import { getQuizProgress, saveQuizProgress } from "@/lib/progress";
import type { CategoryAccent } from "@/lib/categoryAccents";

interface QuizSectionProps {
  questions: QuizQuestion[];
  slug: string;
  accent: CategoryAccent;
}

/**
 * Number of questions drawn per quiz session. If the topic's pool is smaller
 * than this, every question in the pool is used.
 */
const QUESTIONS_PER_SESSION = 10;

/**
 * Pick the first `n` questions from the pool — deterministic, used during
 * SSR and the very first client render so server and client HTML match.
 */
function deterministicSample(
  pool: QuizQuestion[],
  n: number,
): QuizQuestion[] {
  return pool.slice(0, Math.min(n, pool.length));
}

/**
 * Fisher–Yates shuffle, then take the first `n` items. Returns a new array.
 * Only invoked on the client so the non-deterministic Math.random() output
 * never reaches the server-rendered HTML.
 */
function sampleQuestions(pool: QuizQuestion[], n: number): QuizQuestion[] {
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(n, arr.length));
}

// ----- "Are we on the client?" external store ------------------------------
// `useSyncExternalStore` returns `getServerSnapshot()` during SSR and
// `getSnapshot()` after hydration. We use this to flip a boolean without
// triggering a hydration mismatch and without calling setState in an effect.

function subscribeNoop(): () => void {
  return () => {};
}
function getMountedSnapshot(): boolean {
  return true;
}
function getMountedServerSnapshot(): boolean {
  return false;
}

// ----- Saved progress external store ---------------------------------------
// Mirrors the pattern in HomepageProgress.tsx: cached snapshot, invalidated
// when localStorage changes, with an empty server snapshot.

let progressCache: Record<string, QuizProgress | null> = {};

function readProgress(slug: string): QuizProgress | null {
  if (slug in progressCache) return progressCache[slug];
  const value = getQuizProgress(slug);
  progressCache[slug] = value;
  return value;
}

function subscribeProgress(callback: () => void): () => void {
  const invalidate = () => {
    progressCache = {};
    callback();
  };
  window.addEventListener("storage", invalidate);
  window.addEventListener("quiz-progress-change", invalidate);
  return () => {
    window.removeEventListener("storage", invalidate);
    window.removeEventListener("quiz-progress-change", invalidate);
  };
}

export default function QuizSection({
  questions,
  slug,
  accent,
}: QuizSectionProps) {
  // True after the component has mounted on the client. The first render
  // (SSR + first client paint) gets `false`, matching the server snapshot.
  const isMounted = useSyncExternalStore(
    subscribeNoop,
    getMountedSnapshot,
    getMountedServerSnapshot,
  );

  // Saved quiz progress for this slug. `null` on the server / before mount,
  // populated from localStorage once mounted.
  const previousProgress = useSyncExternalStore<QuizProgress | null>(
    subscribeProgress,
    () => readProgress(slug),
    () => null,
  );

  // Refs that hold our mount-time random subset and the retry counter so we
  // can re-shuffle without any setState-in-effect dance.
  const [retryToken, setRetryToken] = useState(0);

  // Deterministic on SSR / first paint; freshly shuffled subset after mount.
  // Re-runs when the retry button bumps `retryToken`.
  const activeQuestions: QuizQuestion[] = useMemo(() => {
    if (!isMounted) {
      return deterministicSample(questions, QUESTIONS_PER_SESSION);
    }
    return sampleQuestions(questions, QUESTIONS_PER_SESSION);
    // `retryToken` is intentionally part of the dep array: changing it forces
    // a fresh shuffle even though `questions` and `isMounted` are stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted, questions, retryToken]);

  // ----- In-progress quiz state --------------------------------------------
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  // `retried` lets us hide the previous-result screen after a retry, even
  // though `previousProgress` is still loaded from localStorage. It's reset
  // to false when a new quiz session is completed and saved.
  const [retried, setRetried] = useState(false);

  const completed = !retried && previousProgress !== null;

  const currentQuestion = activeQuestions[currentIndex];
  const isLastQuestion = currentIndex === activeQuestions.length - 1;
  const labels = ["A", "B", "C", "D"];

  function handleSelect(optionIndex: number) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optionIndex);
    setShowResult(true);

    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (optionIndex === currentQuestion.correct) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (isLastQuestion) {
      const progress: QuizProgress = {
        score,
        total: activeQuestions.length,
        completedAt: new Date().toISOString(),
        answers,
      };
      // saveQuizProgress dispatches `quiz-progress-change`, which invalidates
      // our progress store and triggers a re-render with the new value.
      saveQuizProgress(slug, progress);
      setRetried(false);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  }

  function handleRetry() {
    // Bumping the retry token invalidates the cached random subset above so a
    // fresh shuffle runs on the next render.
    setRetryToken((prev) => prev + 1);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
    setScore(0);
    // Hide the previous-result panel even though localStorage still has the
    // old score. It will be overwritten when this new session completes.
    setRetried(true);
  }

  // ----- Result state -------------------------------------------------------
  if (completed && previousProgress) {
    const ratio = previousProgress.score / previousProgress.total;
    const verdict =
      ratio === 1
        ? "ทำได้ครบทุกข้อ"
        : ratio >= 0.7
          ? "ผ่านเกณฑ์ ทบทวนเพิ่มในจุดที่พลาด"
          : "ทำต่ำกว่าเกณฑ์ แนะนำอ่านบทอีกรอบก่อนทำใหม่";

    return (
      <div className="rounded-md border border-[var(--rule)] bg-[var(--bg-elev)] p-6">
        <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
          ผลคะแนน
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span
            className={"font-serif text-4xl text-[var(--ink)] tabular-nums " + accent.text}
          >
            {previousProgress.score}
          </span>
          <span className="text-[var(--ink-muted)] tabular-nums">
            / {previousProgress.total}
          </span>
        </div>
        <p className="mt-2 text-sm text-[var(--ink-muted)]">{verdict}</p>
        <p className="mt-1 text-xs text-[var(--ink-faint)]">
          ทำเสร็จเมื่อ{" "}
          {new Date(previousProgress.completedAt).toLocaleDateString("th-TH", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <button
          type="button"
          onClick={handleRetry}
          className={
            "mt-5 inline-flex h-9 items-center rounded-md px-4 text-sm font-medium text-white transition-colors " +
            accent.buttonBg +
            " " +
            accent.buttonBgHover
          }
        >
          ทำใหม่
        </button>
      </div>
    );
  }

  if (!currentQuestion) return null;

  // ----- Active state -------------------------------------------------------
  return (
    <div className="rounded-md border border-[var(--rule)] bg-[var(--bg-elev)] p-5 sm:p-6">
      {/* Progress meta */}
      <div className="flex items-baseline justify-between text-xs text-[var(--ink-muted)]">
        <span className="tabular-nums">
          ข้อ {currentIndex + 1} / {activeQuestions.length}
        </span>
        <span className="tabular-nums">คะแนน {score}</span>
      </div>

      {/* Progress bar */}
      <div className="mt-2 h-px bg-[var(--rule)]">
        <div
          className={"h-full transition-[width] duration-300 " + accent.fill}
          style={{
            width: `${((currentIndex + 1) / activeQuestions.length) * 100}%`,
          }}
        />
      </div>

      {/* Question */}
      <p
        className="quiz-question mt-5 text-lg leading-relaxed text-[var(--ink)]"
        dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
      />

      {/* Options */}
      <div className="mt-4 space-y-2">
        {currentQuestion.options.map((option, i) => {
          const isCorrect = i === currentQuestion.correct;
          const isPicked = i === selectedAnswer;

          let cls =
            "border-[var(--rule)] bg-[var(--bg)] hover:border-[var(--ink-faint)] cursor-pointer";
          if (showResult) {
            if (isCorrect) {
              cls =
                "border-emerald-600 dark:border-emerald-400 bg-emerald-50/70 dark:bg-emerald-950/30";
            } else if (isPicked && !isCorrect) {
              cls =
                "border-rose-600 dark:border-rose-400 bg-rose-50/70 dark:bg-rose-950/30";
            } else {
              cls = "border-[var(--rule)] bg-[var(--bg)] opacity-70";
            }
          } else if (isPicked) {
            cls = `${accent.border} ${accent.tint}`;
          }

          let badgeCls = "bg-[var(--bg-soft)] text-[var(--ink)]";
          if (showResult && isCorrect) {
            badgeCls = "bg-emerald-600 text-white dark:bg-emerald-500";
          } else if (showResult && isPicked && !isCorrect) {
            badgeCls = "bg-rose-600 text-white dark:bg-rose-500";
          }

          return (
            <button
              key={i}
              type="button"
              onClick={() => handleSelect(i)}
              disabled={selectedAnswer !== null}
              className={
                "block w-full rounded-md border p-4 text-left transition-colors " +
                cls
              }
            >
              <span className="flex items-start gap-3">
                <span
                  className={
                    "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded text-xs font-semibold " +
                    badgeCls
                  }
                >
                  {labels[i]}
                </span>
                <span
                  className="text-[var(--ink)] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: option }}
                />
              </span>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <div className="mt-4 border-l-2 border-[var(--rule-strong)] bg-[var(--bg-soft)] px-4 py-3">
          <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
            คำอธิบาย
          </div>
          <p
            className="mt-1 text-sm text-[var(--ink)] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: currentQuestion.explanation }}
          />
        </div>
      )}

      {/* Next button */}
      {showResult && (
        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            className={
              "inline-flex h-9 items-center rounded-md px-4 text-sm font-medium text-white transition-colors " +
              accent.buttonBg +
              " " +
              accent.buttonBgHover
            }
          >
            {isLastQuestion ? "ดูผลลัพธ์" : "ข้อถัดไป"}
          </button>
        </div>
      )}
    </div>
  );
}
