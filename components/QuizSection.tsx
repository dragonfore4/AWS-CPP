"use client";

import { useState } from "react";
import { QuizQuestion, QuizProgress } from "@/types/topic";
import { getQuizProgress, saveQuizProgress } from "@/lib/progress";
import { getAccent } from "@/lib/accentClasses";

interface QuizSectionProps {
  questions: QuizQuestion[];
  slug: string;
  accent: string;
}

export default function QuizSection({ questions, slug, accent }: QuizSectionProps) {
  const a = getAccent(accent);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(() => {
    if (typeof window === "undefined") return false;
    return getQuizProgress(slug) !== null;
  });
  const [previousProgress, setPreviousProgress] = useState<QuizProgress | null>(() => {
    if (typeof window === "undefined") return null;
    return getQuizProgress(slug);
  });

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const labels = ["A", "B", "C", "D"];

  function handleSelect(optionIndex: number) {
    if (selectedAnswer !== null) return; // already answered
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
      // Finish quiz - score was already updated in handleSelect
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

  if (completed && previousProgress) {
    return (
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 text-center space-y-4">
        <h3 className={`text-2xl font-bold ${a.text400}`}>Quiz เสร็จแล้ว!</h3>
        <div className="text-5xl font-bold text-white">
          {previousProgress.score}/{previousProgress.total}
        </div>
        <p className="text-slate-200 text-base">
          {previousProgress.score === previousProgress.total
            ? "Perfect score! เยี่ยมมาก!"
            : previousProgress.score >= previousProgress.total * 0.7
              ? "ทำได้ดี! เข้าใจเนื้อหาแล้ว"
              : "อ่านทบทวนอีกหน่อยนะ — สู้ๆ!"}
        </p>
        <p className="text-slate-400 text-sm">
          ทำเสร็จเมื่อ: {new Date(previousProgress.completedAt).toLocaleDateString("th-TH")}
        </p>
        <button
          onClick={handleRetry}
          className={`mt-4 px-6 py-2.5 rounded-lg ${a.bg500} text-white font-semibold transition-opacity hover:opacity-90`}
        >
          ทำใหม่อีกครั้ง
        </button>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 md:p-8 space-y-6">
      {/* Progress indicator */}
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span>
          ข้อ {currentIndex + 1} / {questions.length}
        </span>
        <span>คะแนน: {score}</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${a.bg500} transition-[width] duration-300`}
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <p
        className="text-xl md:text-2xl text-white font-medium leading-relaxed"
        dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
      />

      {/* Options */}
      <div className="space-y-3">
        {currentQuestion.options.map((option, i) => {
          let optionStyle = "bg-slate-800 border-slate-700 hover:border-slate-500 cursor-pointer";

          if (showResult) {
            if (i === currentQuestion.correct) {
              optionStyle = "bg-emerald-500/15 border-emerald-500/60";
            } else if (i === selectedAnswer && i !== currentQuestion.correct) {
              optionStyle = "bg-red-500/15 border-red-500/60";
            } else {
              optionStyle = "bg-slate-800/50 border-slate-700 opacity-60";
            }
          } else if (selectedAnswer === i) {
            optionStyle = `${a.bg500_10} ${a.border500_50}`;
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selectedAnswer !== null}
              className={`w-full text-left p-5 rounded-lg border transition-colors ${optionStyle}`}
            >
              <span className="flex items-start gap-3">
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    showResult && i === currentQuestion.correct
                      ? "bg-emerald-500 text-white"
                      : showResult && i === selectedAnswer
                        ? "bg-red-500 text-white"
                        : "bg-slate-700 text-slate-100"
                  }`}
                >
                  {labels[i]}
                </span>
                <span
                  className="text-slate-100 text-base md:text-lg leading-relaxed pt-1"
                  dangerouslySetInnerHTML={{ __html: option }}
                />
              </span>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-5">
          <p className="text-base font-semibold text-slate-100 mb-2">
            คำอธิบาย:
          </p>
          <p
            className="text-base text-slate-200 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: currentQuestion.explanation }}
          />
        </div>
      )}

      {/* Next button */}
      {showResult && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className={`px-6 py-3 rounded-lg ${a.bg500} text-white font-semibold transition-opacity hover:opacity-90`}
          >
            {isLastQuestion ? "ดูผลลัพธ์" : "ข้อถัดไป"}
          </button>
        </div>
      )}
    </div>
  );
}
