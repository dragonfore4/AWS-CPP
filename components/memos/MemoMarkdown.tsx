"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Project-styled markdown renderer for memo bodies and editor previews.
 *
 * - GFM enabled (tables, strikethrough, task lists).
 * - No raw HTML passthrough (default — do not add rehype-raw).
 * - No syntax highlighting in v1.
 *
 * Heading sizes are deliberately small — memos are short notes, not
 * articles. h1 inside a memo should not compete with the page title.
 */
export default function MemoMarkdown({ source }: { source: string }) {
  return (
    <div className="memo-md text-[var(--ink)]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) => (
            <h2
              {...props}
              className="mt-4 mb-2 font-serif text-lg text-[var(--ink)]"
            />
          ),
          h2: (props) => (
            <h3
              {...props}
              className="mt-4 mb-2 font-serif text-base text-[var(--ink)]"
            />
          ),
          h3: (props) => (
            <h4
              {...props}
              className="mt-3 mb-2 text-sm font-semibold text-[var(--ink)]"
            />
          ),
          p: (props) => (
            <p
              {...props}
              className="my-2 text-[var(--ink-muted)] leading-relaxed"
            />
          ),
          ul: (props) => (
            <ul
              {...props}
              className="my-2 list-disc pl-5 text-[var(--ink-muted)]"
            />
          ),
          ol: (props) => (
            <ol
              {...props}
              className="my-2 list-decimal pl-5 text-[var(--ink-muted)]"
            />
          ),
          li: (props) => <li {...props} className="my-1" />,
          a: (props) => (
            <a
              {...props}
              className="text-[var(--ink)] underline decoration-[var(--rule-strong)] underline-offset-4 hover:decoration-[var(--ink)]"
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
          code: ({ className, children, ...rest }) => {
            const isBlock = /\blanguage-/.test(className ?? "");
            if (isBlock) {
              return (
                <code
                  className="block overflow-x-auto rounded border border-[var(--rule)] bg-[var(--bg-soft)] p-3 font-mono text-xs text-[var(--ink)]"
                  {...rest}
                >
                  {children}
                </code>
              );
            }
            return (
              <code
                className="rounded bg-[var(--bg-soft)] px-1 py-0.5 font-mono text-[0.9em] text-[var(--ink)]"
                {...rest}
              >
                {children}
              </code>
            );
          },
          pre: (props) => (
            <pre {...props} className="my-3 overflow-x-auto" />
          ),
          blockquote: (props) => (
            <blockquote
              {...props}
              className="my-3 border-l-2 border-[var(--rule-strong)] pl-3 text-[var(--ink-muted)] italic"
            />
          ),
          hr: () => (
            <hr className="my-4 border-0 border-t border-[var(--rule)]" />
          ),
          table: (props) => (
            <div className="my-3 overflow-x-auto">
              <table
                {...props}
                className="min-w-full border-collapse text-sm"
              />
            </div>
          ),
          th: (props) => (
            <th
              {...props}
              className="border-b border-[var(--rule-strong)] px-2 py-1 text-left font-semibold text-[var(--ink)]"
            />
          ),
          td: (props) => (
            <td
              {...props}
              className="border-b border-[var(--rule)] px-2 py-1 text-[var(--ink-muted)]"
            />
          ),
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
