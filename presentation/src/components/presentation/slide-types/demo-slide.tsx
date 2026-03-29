"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Slide } from "@/data/types";

interface DemoSlideProps {
  slide: Slide;
}

interface TerminalLine {
  type: "input" | "output" | "comment";
  text: string;
  visible: boolean;
}

export function DemoSlide({ slide }: DemoSlideProps) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(-1);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const script = slide.terminalScript ?? [];

  // Initialize hidden lines
  useEffect(() => {
    setLines(script.map((s) => ({ ...s, visible: false })));
    setCurrentLine(-1);
    setIsPlaying(false);
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [slide.id]);

  const playDemo = useCallback(() => {
    // Reset
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setLines(script.map((s) => ({ ...s, visible: false })));
    setCurrentLine(-1);
    setIsPlaying(true);

    let cumulativeDelay = 0;

    script.forEach((line, i) => {
      const delay = line.delay ?? (line.type === "input" ? 800 : 400);
      cumulativeDelay += i === 0 ? 300 : delay;

      const t = setTimeout(() => {
        setLines((prev) => {
          const next = [...prev];
          next[i] = { ...next[i], visible: true };
          return next;
        });
        setCurrentLine(i);

        // Auto-scroll
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }

        if (i === script.length - 1) {
          setIsPlaying(false);
        }
      }, cumulativeDelay);

      timeoutsRef.current.push(t);
    });
  }, [script]);

  const resetDemo = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setLines(script.map((s) => ({ ...s, visible: false })));
    setCurrentLine(-1);
    setIsPlaying(false);
  }, [script]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8 py-12">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <motion.div
          className="mb-6 flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <Badge variant="green" className="gap-1.5">
              <Terminal className="h-3 w-3" />
              Live Demo
            </Badge>
            {slide.title && (
              <h3 className="text-[calc(1.25rem*var(--font-scale))] font-semibold text-[var(--foreground)]">
                {slide.title}
              </h3>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={resetDemo}
              disabled={currentLine === -1 && !isPlaying}
            >
              <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
              Reset
            </Button>
            <Button
              size="sm"
              onClick={playDemo}
              disabled={isPlaying}
            >
              <Play className="mr-1.5 h-3.5 w-3.5" />
              {currentLine === -1 ? "Run" : "Replay"}
            </Button>
          </div>
        </motion.div>

        {/* Terminal */}
        <motion.div
          className="overflow-hidden rounded-xl border border-[var(--border)] shadow-2xl shadow-[oklch(0_0_0/0.3)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[oklch(0.12_0.02_280)] px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[oklch(0.65_0.2_25)]" />
              <div className="h-3 w-3 rounded-full bg-[oklch(0.75_0.15_80)]" />
              <div className="h-3 w-3 rounded-full bg-[oklch(0.65_0.2_155)]" />
            </div>
            <span className="ml-2 text-xs text-[var(--muted-foreground)]">
              terminal
            </span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="max-h-[50vh] min-h-[300px] overflow-y-auto bg-[oklch(0.06_0.01_280)] p-5 font-mono text-[calc(0.95rem*var(--font-scale))]"
          >
            {lines.map((line, i) => {
              if (!line.visible) return null;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mb-1 leading-relaxed"
                >
                  {line.type === "input" && (
                    <div className="flex items-start">
                      <span className="mr-2 select-none text-[oklch(0.65_0.2_155)]">
                        $
                      </span>
                      <span className="text-[var(--foreground)]">{line.text}</span>
                      {i === currentLine && isPlaying && (
                        <span className="ml-0.5 inline-block h-[1.2em] w-[2px] animate-pulse bg-[var(--foreground)]" />
                      )}
                    </div>
                  )}
                  {line.type === "output" && (
                    <div className="text-[var(--muted-foreground)] pl-5">
                      {line.text}
                    </div>
                  )}
                  {line.type === "comment" && (
                    <div className="text-[oklch(0.5_0.1_280)] italic pl-5">
                      {line.text}
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* Cursor when idle */}
            {!isPlaying && currentLine >= script.length - 1 && (
              <div className="flex items-center">
                <span className="mr-2 text-[oklch(0.65_0.2_155)]">$</span>
                <span className="inline-block h-[1.2em] w-[2px] animate-pulse bg-[var(--foreground)]" />
              </div>
            )}

            {/* Prompt when not started */}
            {currentLine === -1 && !isPlaying && (
              <div className="flex items-center text-[var(--muted-foreground)]">
                <span className="mr-2 text-[oklch(0.65_0.2_155)]">$</span>
                <span className="animate-pulse opacity-50">
                  Click &quot;Run&quot; to start the demo...
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Teaching point */}
        {slide.content && (
          <motion.p
            className="mt-6 text-center text-[calc(1.1rem*var(--font-scale))] leading-relaxed text-[var(--muted-foreground)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            {slide.content}
          </motion.p>
        )}
      </div>
    </div>
  );
}
