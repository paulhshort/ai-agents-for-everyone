"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Type, Hash, AlignLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { countTokens } from "@/lib/tokenizer";

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function PromptInput({
  value,
  onChange,
  placeholder = "Type a prompt here to explore...",
  className,
}: PromptInputProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isMonospace, setIsMonospace] = React.useState(false);

  const charCount = value.length;
  const tokenCount = countTokens(value);

  // Auto-resize textarea
  React.useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.max(120, textarea.scrollHeight)}px`;
  }, [value]);

  return (
    <div className={cn("relative", className)}>
      {/* Gradient border wrapper */}
      <motion.div
        className="relative rounded-xl p-[1px]"
        animate={{
          background: isFocused
            ? "linear-gradient(135deg, oklch(0.55 0.25 290), oklch(0.6 0.2 250), oklch(0.7 0.15 200))"
            : "linear-gradient(135deg, oklch(0.3 0.02 280), oklch(0.25 0.02 280))",
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative rounded-xl bg-[var(--card)] overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border)] bg-[oklch(0.1_0.02_280/0.5)]">
            <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
              <AlignLeft className="w-3.5 h-3.5" />
              <span>Prompt Editor</span>
            </div>
            <button
              onClick={() => setIsMonospace((prev) => !prev)}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-all duration-200 cursor-pointer",
                isMonospace
                  ? "bg-[oklch(0.55_0.25_290/0.2)] text-[oklch(0.75_0.2_290)] border border-[oklch(0.55_0.25_290/0.3)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]"
              )}
            >
              <Type className="w-3 h-3" />
              <span>Mono</span>
            </button>
          </div>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={cn(
              "w-full min-h-[120px] px-4 py-3 bg-transparent text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] resize-none focus:outline-none text-base leading-relaxed",
              isMonospace
                ? "font-[JetBrains_Mono,monospace]"
                : "font-[Inter,sans-serif]"
            )}
            spellCheck={false}
          />

          {/* Stats bar */}
          <motion.div
            className="flex items-center justify-between px-4 py-2 border-t border-[var(--border)] bg-[oklch(0.1_0.02_280/0.3)]"
            initial={false}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
                <Type className="w-3 h-3" />
                <span>
                  <span className="text-[var(--foreground)] font-medium">
                    {charCount.toLocaleString()}
                  </span>{" "}
                  chars
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
                <Hash className="w-3 h-3" />
                <span>
                  ~
                  <span className="text-[var(--foreground)] font-medium">
                    {tokenCount.toLocaleString()}
                  </span>{" "}
                  tokens
                </span>
              </div>
            </div>

            {isFocused && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-1 text-xs text-[oklch(0.7_0.15_200)]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.7_0.15_200)] animate-pulse" />
                Editing
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
