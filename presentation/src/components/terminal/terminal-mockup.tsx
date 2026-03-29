'use client';

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type CSSProperties,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ---------- Types ---------- */
export interface ScriptLine {
  type: 'input' | 'output' | 'comment';
  text: string;
  delay?: number; // ms before this line starts (default: 400 for input, 100 for output)
}

interface TerminalMockupProps {
  script: ScriptLine[];
  title?: string;
  className?: string;
  autoPlay?: boolean;
}

/* ---------- Syntax highlighting ---------- */
function highlightSyntax(text: string, type: 'input' | 'output' | 'comment'): React.ReactNode {
  if (type === 'comment') {
    return <span style={{ color: 'oklch(0.55 0.02 280)' }}>{text}</span>;
  }

  if (type === 'output') {
    // Light highlighting for output
    return <span style={{ color: 'oklch(0.82 0.02 280)' }}>{text}</span>;
  }

  // Input: full syntax highlighting
  const tokens: React.ReactNode[] = [];
  // Regex to match different token types
  const regex =
    /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(\s--?\w[\w-]*)|(\s(?:\/|\.\.?\/)[^\s]+)|(\||\>|>>|&&|\|\|)|([a-zA-Z_][\w.-]*)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    // Add any unmatched text before this match
    if (match.index > lastIndex) {
      tokens.push(
        <span key={key++} style={{ color: 'oklch(0.85 0.02 280)' }}>
          {text.slice(lastIndex, match.index)}
        </span>
      );
    }

    if (match[1]) {
      // String (quoted)
      tokens.push(
        <span key={key++} style={{ color: '#fbbf24' }}>
          {match[0]}
        </span>
      );
    } else if (match[2]) {
      // Flag
      tokens.push(
        <span key={key++} style={{ color: '#facc15' }}>
          {match[0]}
        </span>
      );
    } else if (match[3]) {
      // File path
      tokens.push(
        <span key={key++} style={{ color: '#22d3ee' }}>
          {match[0]}
        </span>
      );
    } else if (match[4]) {
      // Pipe / redirect / operator
      tokens.push(
        <span key={key++} style={{ color: '#a78bfa' }}>
          {match[0]}
        </span>
      );
    } else if (match[5]) {
      // Command (first word) or just a word
      const isFirst = match.index === 0 || text[match.index - 1] === '|' || text[match.index - 1] === ' ' && (text.lastIndexOf('|', match.index) === match.index - 2);
      if (match.index === 0) {
        tokens.push(
          <span key={key++} style={{ color: '#4ade80' }}>
            {match[0]}
          </span>
        );
      } else {
        tokens.push(
          <span key={key++} style={{ color: 'oklch(0.85 0.02 280)' }}>
            {match[0]}
          </span>
        );
      }
    } else {
      tokens.push(
        <span key={key++} style={{ color: 'oklch(0.85 0.02 280)' }}>
          {match[0]}
        </span>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Remaining text
  if (lastIndex < text.length) {
    tokens.push(
      <span key={key++} style={{ color: 'oklch(0.85 0.02 280)' }}>
        {text.slice(lastIndex)}
      </span>
    );
  }

  return <>{tokens}</>;
}

/* ---------- Main Component ---------- */
export function TerminalMockup({
  script,
  title = 'Terminal',
  className,
  autoPlay = true,
}: TerminalMockupProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [speed, setSpeed] = useState(1);
  const [visibleLines, setVisibleLines] = useState<
    { line: ScriptLine; typedText: string; complete: boolean }[]
  >([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines]);

  // Reset function
  const reset = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisibleLines([]);
    setCurrentLineIdx(0);
    setCurrentCharIdx(0);
    setIsTyping(false);
  }, []);

  // Main playback engine
  useEffect(() => {
    if (!isPlaying || currentLineIdx >= script.length) return;

    const line = script[currentLineIdx];
    const delay = line.delay ?? (line.type === 'input' ? 400 : 100);

    if (!isTyping) {
      // Wait before starting this line
      timerRef.current = setTimeout(
        () => {
          setIsTyping(true);
          setCurrentCharIdx(0);

          if (line.type !== 'input') {
            // Output and comments appear instantly
            setVisibleLines((prev) => [
              ...prev,
              { line, typedText: line.text, complete: true },
            ]);
            setIsTyping(false);
            setCurrentLineIdx((prev) => prev + 1);
          } else {
            // Start typing input
            setVisibleLines((prev) => [
              ...prev,
              { line, typedText: '', complete: false },
            ]);
          }
        },
        delay / speed
      );
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }

    // Typing input character by character
    if (line.type === 'input' && currentCharIdx <= line.text.length) {
      const charDelay = 30 + Math.random() * 30; // natural typing speed
      timerRef.current = setTimeout(
        () => {
          if (currentCharIdx < line.text.length) {
            setVisibleLines((prev) => {
              const updated = [...prev];
              const last = updated[updated.length - 1];
              updated[updated.length - 1] = {
                ...last,
                typedText: line.text.slice(0, currentCharIdx + 1),
              };
              return updated;
            });
            setCurrentCharIdx((prev) => prev + 1);
          } else {
            // Finished typing this line
            setVisibleLines((prev) => {
              const updated = [...prev];
              const last = updated[updated.length - 1];
              updated[updated.length - 1] = { ...last, complete: true };
              return updated;
            });
            setIsTyping(false);
            setCurrentLineIdx((prev) => prev + 1);
          }
        },
        charDelay / speed
      );
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [isPlaying, currentLineIdx, currentCharIdx, isTyping, script, speed]);

  const isFinished = currentLineIdx >= script.length && !isTyping;

  const containerStyle: CSSProperties = {
    background: 'oklch(0.1 0.02 280)',
    backdropFilter: 'blur(20px)',
    border: '1px solid oklch(0.25 0.04 280)',
    boxShadow:
      '0 0 30px oklch(0.2 0.08 280 / 0.3), 0 25px 50px oklch(0 0 0 / 0.5), inset 0 1px 0 oklch(0.3 0.04 280 / 0.3)',
  };

  const speeds = [0.5, 1, 2, 4] as const;

  return (
    <div
      className={cn(
        'rounded-2xl overflow-hidden w-full max-w-3xl mx-auto select-none',
        className
      )}
      style={containerStyle}
    >
      {/* Title bar with traffic lights */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: 'oklch(0.2 0.03 280)' }}
      >
        {/* Traffic lights */}
        <div className="flex gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: '#ff5f57', boxShadow: '0 0 6px #ff5f5780' }}
          />
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: '#ffbd2e', boxShadow: '0 0 6px #ffbd2e80' }}
          />
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: '#28c840', boxShadow: '0 0 6px #28c84080' }}
          />
        </div>
        {/* Title */}
        <div className="flex-1 text-center">
          <span
            className="text-xs font-medium tracking-wide"
            style={{ color: 'oklch(0.55 0.02 280)', fontFamily: 'Inter, sans-serif' }}
          >
            {title}
          </span>
        </div>
        {/* Spacer for symmetry */}
        <div className="w-12" />
      </div>

      {/* Terminal content */}
      <div
        ref={scrollRef}
        className="overflow-y-auto p-4 space-y-1"
        style={{
          maxHeight: '400px',
          scrollbarWidth: 'thin',
          scrollbarColor: 'oklch(0.3 0.03 280) transparent',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '13px',
          lineHeight: '1.7',
        }}
      >
        <AnimatePresence>
          {visibleLines.map((entry, idx) => {
            const isLastLine = idx === visibleLines.length - 1;
            const showBlinkCursor = isLastLine && !entry.complete && showCursor;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                {entry.line.type === 'input' && (
                  <span
                    className="mr-2 select-none shrink-0"
                    style={{ color: '#4ade80' }}
                  >
                    $
                  </span>
                )}
                {entry.line.type === 'comment' && (
                  <span
                    className="mr-2 select-none shrink-0"
                    style={{ color: 'oklch(0.45 0.02 280)' }}
                  >
                    #
                  </span>
                )}
                <span className="whitespace-pre-wrap break-all">
                  {highlightSyntax(entry.typedText, entry.line.type)}
                  {showBlinkCursor && (
                    <span
                      className="inline-block w-2 h-4 ml-0.5 -mb-0.5"
                      style={{
                        background: '#4ade80',
                        opacity: showCursor ? 1 : 0,
                        transition: 'opacity 0.1s',
                      }}
                    />
                  )}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Cursor on empty line when finished or waiting */}
        {visibleLines.length === 0 && (
          <div className="flex">
            <span style={{ color: '#4ade80' }} className="mr-2">$</span>
            <span
              className="inline-block w-2 h-4"
              style={{
                background: '#4ade80',
                opacity: showCursor ? 1 : 0,
              }}
            />
          </div>
        )}
        {isFinished && visibleLines.length > 0 && (
          <div className="flex">
            <span style={{ color: '#4ade80' }} className="mr-2">$</span>
            <span
              className="inline-block w-2 h-4"
              style={{
                background: '#4ade80',
                opacity: showCursor ? 1 : 0,
              }}
            />
          </div>
        )}
      </div>

      {/* Controls bar */}
      <div
        className="flex items-center gap-3 px-4 py-2.5 border-t"
        style={{
          borderColor: 'oklch(0.2 0.03 280)',
          background: 'oklch(0.08 0.02 280)',
        }}
      >
        {/* Play / Pause */}
        <button
          onClick={() => {
            if (isFinished) {
              reset();
              setIsPlaying(true);
            } else {
              setIsPlaying((p) => !p);
            }
          }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 hover:scale-105"
          style={{
            background: 'oklch(0.2 0.04 280)',
            color: 'oklch(0.8 0.05 280)',
            border: '1px solid oklch(0.3 0.04 280)',
          }}
        >
          {isFinished ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 4v6h6M23 20v-6h-6" />
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
              </svg>
              Reset
            </>
          ) : isPlaying ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
              Pause
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21" />
              </svg>
              Play
            </>
          )}
        </button>

        {/* Reset */}
        {!isFinished && (
          <button
            onClick={() => {
              reset();
              setIsPlaying(false);
            }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 hover:scale-105"
            style={{
              background: 'oklch(0.2 0.04 280)',
              color: 'oklch(0.65 0.03 280)',
              border: '1px solid oklch(0.3 0.04 280)',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 4v6h6M23 20v-6h-6" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
            </svg>
            Reset
          </button>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Speed selector */}
        <div className="flex items-center gap-1">
          <span
            className="text-xs mr-1"
            style={{ color: 'oklch(0.5 0.02 280)' }}
          >
            Speed:
          </span>
          {speeds.map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className="px-2 py-0.5 rounded text-xs font-mono transition-all duration-200"
              style={{
                background:
                  speed === s ? 'oklch(0.3 0.08 280)' : 'oklch(0.15 0.02 280)',
                color:
                  speed === s ? 'oklch(0.85 0.1 280)' : 'oklch(0.5 0.02 280)',
                border: `1px solid ${speed === s ? 'oklch(0.4 0.1 280)' : 'oklch(0.25 0.03 280)'}`,
              }}
            >
              {s}x
            </button>
          ))}
        </div>

        {/* Line count */}
        <span
          className="text-xs tabular-nums"
          style={{ color: 'oklch(0.4 0.02 280)' }}
        >
          {visibleLines.filter((l) => l.complete).length}/{script.length}
        </span>
      </div>
    </div>
  );
}

export default TerminalMockup;
