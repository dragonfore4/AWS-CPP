import { QuizQuestion } from "@/types/topic";

/**
 * Print-only static rendering of every quiz question with the correct
 * answer revealed and the explanation shown. The interactive QuizSection
 * shows one question at a time on screen, which doesn't translate to paper,
 * so we ship a parallel block that's hidden in normal viewing and made
 * visible only inside `@media print` (see `globals.css`).
 */
export default function QuizPrintBlock({
  questions,
}: {
  questions: QuizQuestion[];
}) {
  if (questions.length === 0) return null;
  const labels = ["A", "B", "C", "D"];

  return (
    <div
      data-quiz-print="all"
      className="hidden print:block mt-6 space-y-6"
      aria-hidden
    >
      {questions.map((q, qi) => (
        <div key={q.id ?? qi} data-quiz-block className="break-inside-avoid">
          <div className="text-xs uppercase tracking-[0.16em] text-neutral-500">
            Question {qi + 1} / {questions.length}
          </div>
          <p
            className="mt-1 text-base font-semibold"
            dangerouslySetInnerHTML={{ __html: q.question }}
          />
          <ol className="mt-2 space-y-1 list-none pl-0">
            {q.options.map((opt, i) => {
              const correct = i === q.correct;
              return (
                <li
                  key={i}
                  data-quiz-correct={correct ? "" : undefined}
                  className={
                    "py-1 px-2 border " +
                    (correct
                      ? "border-emerald-600 bg-emerald-50"
                      : "border-neutral-300")
                  }
                >
                  <span className="font-mono text-xs mr-2">{labels[i]}.</span>
                  <span dangerouslySetInnerHTML={{ __html: opt }} />
                  {correct && (
                    <span className="ml-2 text-xs font-semibold text-emerald-700">
                      ✓ Correct
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
          <div data-quiz-explain className="hidden mt-2 text-sm border-l-2 border-neutral-400 pl-3">
            <strong className="text-xs uppercase tracking-[0.16em]">
              Explanation
            </strong>
            <p
              className="mt-1"
              dangerouslySetInnerHTML={{ __html: q.explanation }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
