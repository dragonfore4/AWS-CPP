"use client";

import { useState } from "react";
import { QuizQuestion, QuizProgress } from "@/types/topic";
import { getQuizProgress, saveQuizProgress } from "@/lib/progress";
import type { CategoryAccent } from "@/lib/categoryAccents";

interface QuizSectionProps {
  questions: QuizQuestion[];
  slug: string;
  accent: CategoryAccent;
}

export default function QuizSection({
  questions,
  slug,
  accent,
}: QuizSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(() => {
    if (typeof window === "undefined") return false;
    return getQuizProgress(slug) !== null;
  });
  const [previousProgress, setPreviousProgress] =
    useState<QuizProgress | null>(() => {
      if (typeof window === "undefined") return null;
      return getQuizProgress(slug);
    });

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
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
        total: questions.length,
        completedAt: new Date().toISOString(),
        answers,
      };
      saveQuizProgress(slug, progress);
      setPreviousProgress(progress);
      setCompleted(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  }

  function handleRetry() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
    setScore(0);
    setCompleted(false);
    setPreviousProgress(null);
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
          ข้อ {currentIndex + 1} / {questions.length}
        </span>
        <span className="tabular-nums">คะแนน {score}</span>
      </div>

      {/* Progress bar */}
      <div className="mt-2 h-px bg-[var(--rule)]">
        <div
          className={"h-full transition-[width] duration-300 " + accent.fill}
          style={{
            width: `${((currentIndex + 1) / questions.length) * 100}%`,
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
