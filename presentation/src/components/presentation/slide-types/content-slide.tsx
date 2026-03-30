"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import type { Slide } from "@/data/types";

interface ContentSlideProps {
  slide: Slide;
}

const bulletContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export function ContentSlide({ slide }: ContentSlideProps) {
  return (
    <div className="flex h-full w-full flex-col justify-center px-8 py-12">
      <div className="mx-auto w-full max-w-4xl">
        {/* Title */}
        {slide.title && (
          <motion.h2
            className="mb-8 text-[var(--foreground)]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {slide.title}
          </motion.h2>
        )}

        {/* Markdown content */}
        {slide.content && (
          <motion.div
            className="prose prose-invert max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ReactMarkdown
              components={{
                h1: ({ children }: { children?: React.ReactNode }) => (
                  <h1 className="text-[var(--foreground)]">{children}</h1>
                ),
                h2: ({ children }: { children?: React.ReactNode }) => (
                  <h2 className="text-[var(--foreground)]">{children}</h2>
                ),
                h3: ({ children }: { children?: React.ReactNode }) => (
                  <h3 className="text-[var(--foreground)]">{children}</h3>
                ),
                p: ({ children }: { children?: React.ReactNode }) => (
                  <p className="text-[var(--foreground)] leading-relaxed">{children}</p>
                ),
                strong: ({ children }: { children?: React.ReactNode }) => (
                  <strong className="font-bold text-[var(--primary)]">{children}</strong>
                ),
                code: ({ children, className }: { children?: React.ReactNode; className?: string }) => {
                  const isBlock = className?.includes("language-");
                  if (isBlock) {
                    return (
                      <code className={`${className} block`}>{children}</code>
                    );
                  }
                  return <code>{children}</code>;
                },
                pre: ({ children }: { children?: React.ReactNode }) => (
                  <pre className="rounded-xl border border-[var(--border)] bg-[oklch(0.1_0.02_280)] p-5 overflow-x-auto">
                    {children}
                  </pre>
                ),
                table: ({ children }: { children?: React.ReactNode }) => (
                  <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
                    <table className="w-full text-left">{children}</table>
                  </div>
                ),
                th: ({ children }: { children?: React.ReactNode }) => (
                  <th className="border-b border-[var(--border)] bg-[var(--muted)] px-4 py-3 text-sm font-semibold">
                    {children}
                  </th>
                ),
                td: ({ children }: { children?: React.ReactNode }) => (
                  <td className="border-b border-[var(--border)] px-4 py-3 text-sm">
                    {children}
                  </td>
                ),
              }}
            >
              {slide.content}
            </ReactMarkdown>
          </motion.div>
        )}

        {/* Bullets */}
        {slide.bullets && slide.bullets.length > 0 && (
          <motion.ul
            className="mt-6 space-y-4"
            variants={bulletContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {slide.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                variants={bulletVariants}
                className="flex items-start gap-4"
              >
                <span
                  className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--foreground)]"
                />
                <span className="text-[var(--foreground)] leading-relaxed">
                  {bullet}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* Code block */}
        {slide.codeBlock && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="overflow-hidden rounded-xl border border-[var(--border)]">
              {/* Code header */}
              <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[oklch(0.1_0.02_280)] px-4 py-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[oklch(0.65_0.2_25)]" />
                  <div className="h-3 w-3 rounded-full bg-[oklch(0.75_0.15_80)]" />
                  <div className="h-3 w-3 rounded-full bg-[oklch(0.65_0.2_155)]" />
                </div>
                <span className="ml-2 text-xs text-[var(--muted-foreground)]">
                  {slide.codeBlock.lang}
                </span>
              </div>
              {/* Code body */}
              <pre className="overflow-x-auto bg-[oklch(0.08_0.015_280)] p-5">
                <code className="font-mono text-sm leading-relaxed text-[var(--foreground)]">
                  {slide.codeBlock.code}
                </code>
              </pre>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
