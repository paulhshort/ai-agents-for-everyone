"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import type { Slide } from "@/data/types";

interface DiagramSlideProps {
  slide: Slide;
}

export function DiagramSlide({ slide }: DiagramSlideProps) {
  const hasVisualization = !!slide.visualization;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8 py-12">
      <div className="w-full max-w-5xl">
        {/* Title */}
        {slide.title && (
          <motion.h2
            className="mb-8 text-center gradient-text"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {slide.title}
          </motion.h2>
        )}

        {/* Three.js visualization or ASCII diagram */}
        {hasVisualization ? (
          <motion.div
            className="relative mx-auto h-[50vh] w-full overflow-hidden rounded-xl border border-[var(--border)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Suspense
              fallback={
                <div className="flex h-full w-full items-center justify-center bg-[oklch(0.08_0.015_280)]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--primary)] border-t-transparent" />
                    <span className="text-sm text-[var(--muted-foreground)]">
                      Loading visualization...
                    </span>
                  </div>
                </div>
              }
            >
              <ThreeJsCanvas visualization={slide.visualization!} />
            </Suspense>
          </motion.div>
        ) : (
          <motion.div
            className="overflow-hidden rounded-xl border border-[var(--border)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[oklch(0.1_0.02_280)] px-4 py-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[oklch(0.65_0.2_25)]" />
                <div className="h-3 w-3 rounded-full bg-[oklch(0.75_0.15_80)]" />
                <div className="h-3 w-3 rounded-full bg-[oklch(0.65_0.2_155)]" />
              </div>
              <span className="ml-2 text-xs text-[var(--muted-foreground)]">
                diagram
              </span>
            </div>

            {/* ASCII diagram body */}
            <pre className="overflow-x-auto bg-[oklch(0.06_0.01_280)] p-6">
              <code className="font-mono text-[calc(1rem*var(--font-scale))] leading-relaxed">
                {colorizeAscii(slide.content ?? slide.codeBlock?.code ?? "")}
              </code>
            </pre>
          </motion.div>
        )}

        {/* Description below */}
        {slide.subtitle && (
          <motion.p
            className="mt-6 text-center text-[calc(1.1rem*var(--font-scale))] leading-relaxed text-[var(--muted-foreground)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            {slide.subtitle}
          </motion.p>
        )}

        {/* Bullets */}
        {slide.bullets && slide.bullets.length > 0 && (
          <motion.ul
            className="mt-6 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            {slide.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-center gap-2 rounded-lg bg-[var(--muted)] px-4 py-2 text-sm text-[var(--foreground)]"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: `oklch(0.7 0.15 ${(i * 60 + 200) % 360})`,
                  }}
                />
                {bullet}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
}

/**
 * Placeholder for Three.js visualization canvas.
 * Dynamically loads the appropriate visualization component.
 */
function ThreeJsCanvas({
  visualization,
}: {
  visualization: "neural-network" | "token-flow" | "context-window" | "agentic-loop";
}) {
  // Renders a placeholder that can be replaced with actual Three.js scenes
  // from @/components/three/ once those are built
  const labels: Record<string, string> = {
    "neural-network": "Neural Network Visualization",
    "token-flow": "Token Flow Visualization",
    "context-window": "Context Window Visualization",
    "agentic-loop": "Agentic Loop Visualization",
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-[oklch(0.06_0.01_280)]">
      <div className="flex flex-col items-center gap-4">
        {/* Animated rings placeholder */}
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-[var(--brand-purple)] border-t-transparent opacity-60" style={{ animationDuration: "3s" }} />
          <div className="absolute inset-3 animate-spin rounded-full border-2 border-[var(--brand-blue)] border-b-transparent opacity-50" style={{ animationDuration: "4s", animationDirection: "reverse" }} />
          <div className="absolute inset-6 animate-spin rounded-full border-2 border-[var(--brand-cyan)] border-t-transparent opacity-40" style={{ animationDuration: "5s" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-[var(--brand-purple)] animate-glow" />
          </div>
        </div>
        <span className="text-sm font-medium text-[var(--muted-foreground)]">
          {labels[visualization] ?? "3D Visualization"}
        </span>
      </div>
    </div>
  );
}

/**
 * Applies basic syntax coloring to ASCII art diagrams
 */
function colorizeAscii(text: string): React.ReactNode {
  // Split into lines and apply color patterns
  const lines = text.split("\n");

  return lines.map((line, i) => {
    // Color box-drawing and arrow characters
    const colored = line
      .replace(
        /([\u2500-\u257F\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2502\|+\-]+)/g,
        '\x01BORDER$1\x02'
      )
      .replace(
        /([═╔╗╚╝╠╣╦╩╬║])/g,
        '\x01BORDER$1\x02'
      )
      .replace(/(→|←|↑|↓|►|◄|▶|◀|-->|<--|==>|<==)/g, '\x01ARROW$1\x02')
      .replace(/(\[.*?\])/g, '\x01BRACKET$1\x02')
      .replace(/(<.*?>)/g, '\x01ANGLE$1\x02');

    const parts = colored.split(/(\x01(?:BORDER|ARROW|BRACKET|ANGLE).*?\x02)/g);

    return (
      <span key={i}>
        {parts.map((part, j) => {
          if (part.startsWith("\x01BORDER")) {
            return (
              <span key={j} style={{ color: "oklch(0.55 0.15 280)" }}>
                {part.replace(/\x01BORDER/, "").replace(/\x02/, "")}
              </span>
            );
          }
          if (part.startsWith("\x01ARROW")) {
            return (
              <span key={j} style={{ color: "oklch(0.7 0.15 200)" }}>
                {part.replace(/\x01ARROW/, "").replace(/\x02/, "")}
              </span>
            );
          }
          if (part.startsWith("\x01BRACKET")) {
            return (
              <span key={j} style={{ color: "oklch(0.75 0.18 155)" }}>
                {part.replace(/\x01BRACKET/, "").replace(/\x02/, "")}
              </span>
            );
          }
          if (part.startsWith("\x01ANGLE")) {
            return (
              <span key={j} style={{ color: "oklch(0.8 0.12 80)" }}>
                {part.replace(/\x01ANGLE/, "").replace(/\x02/, "")}
              </span>
            );
          }
          return <span key={j} style={{ color: "oklch(0.75 0 0)" }}>{part}</span>;
        })}
        {i < lines.length - 1 && "\n"}
      </span>
    );
  });
}
