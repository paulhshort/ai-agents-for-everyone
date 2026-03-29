"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hash, BarChart3, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Token, TOKEN_BG_CLASSES } from "@/lib/tokenizer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TokenDisplayProps {
  tokens: Token[];
  animated?: boolean;
  className?: string;
}

export function TokenDisplay({
  tokens,
  animated = true,
  className,
}: TokenDisplayProps) {
  const nonSpaceTokens = tokens.filter((t) => t.type !== "space");
  const uniqueTokens = new Set(nonSpaceTokens.map((t) => t.text)).size;
  const wordCount = tokens.filter(
    (t) => t.type === "word" || t.type === "subword"
  ).length;
  const rawWordCount = tokens.filter((t) => t.type === "word").length || 1;
  const tokensPerWord = wordCount > 0 ? (nonSpaceTokens.length / rawWordCount).toFixed(1) : "0";

  const typeCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    for (const token of tokens) {
      counts[token.type] = (counts[token.type] || 0) + 1;
    }
    return counts;
  }, [tokens]);

  return (
    <div className={cn("space-y-4", className)}>
      {/* Token chips area */}
      <div className="relative rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 min-h-[80px]">
        {/* Decorative header */}
        <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r from-[oklch(0.6_0.2_250)] via-[oklch(0.7_0.15_200)] to-[oklch(0.65_0.2_155)]" />

        {tokens.length === 0 ? (
          <div className="flex items-center justify-center py-8 text-[var(--muted-foreground)] text-sm">
            Type something above to see tokens appear here...
          </div>
        ) : (
          <TooltipProvider delayDuration={200}>
            <div className="flex flex-wrap gap-1 items-center">
              <AnimatePresence mode="popLayout">
                {tokens.map((token, index) => (
                  <TokenChip
                    key={`${index}-${token.text}`}
                    token={token}
                    index={index}
                    animated={animated}
                  />
                ))}
              </AnimatePresence>
            </div>
          </TooltipProvider>
        )}
      </div>

      {/* Stats bar */}
      {tokens.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          <StatCard
            icon={<Hash className="w-4 h-4" />}
            label="Total Tokens"
            value={nonSpaceTokens.length.toString()}
            color="oklch(0.6 0.2 250)"
          />
          <StatCard
            icon={<Layers className="w-4 h-4" />}
            label="Unique Tokens"
            value={uniqueTokens.toString()}
            color="oklch(0.7 0.15 200)"
          />
          <StatCard
            icon={<BarChart3 className="w-4 h-4" />}
            label="Tokens / Word"
            value={tokensPerWord}
            color="oklch(0.65 0.2 155)"
          />
          <StatCard
            icon={
              <div className="flex gap-0.5">
                {Object.entries(typeCounts)
                  .filter(([type]) => type !== "space")
                  .slice(0, 3)
                  .map(([type]) => (
                    <div
                      key={type}
                      className="w-2 h-2 rounded-full"
                      style={{
                        background:
                          type === "word"
                            ? "oklch(0.6 0.2 250)"
                            : type === "subword"
                            ? "oklch(0.7 0.15 200)"
                            : type === "number"
                            ? "oklch(0.65 0.2 155)"
                            : "oklch(0.75 0.15 80)",
                      }}
                    />
                  ))}
              </div>
            }
            label="Types Found"
            value={Object.keys(typeCounts).filter((t) => t !== "space").length.toString()}
            color="oklch(0.75 0.15 80)"
          />
        </motion.div>
      )}

      {/* Legend */}
      {tokens.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 text-xs text-[var(--muted-foreground)]"
        >
          {(
            [
              ["word", "Words", "oklch(0.6 0.2 250)"],
              ["subword", "Subwords", "oklch(0.7 0.15 200)"],
              ["punctuation", "Punctuation", "oklch(0.75 0.15 80)"],
              ["number", "Numbers", "oklch(0.65 0.2 155)"],
              ["space", "Spaces", "oklch(0.5 0 0)"],
            ] as const
          ).map(([type, label, color]) => (
            <div key={type} className="flex items-center gap-1.5">
              <div
                className="w-2.5 h-2.5 rounded-sm"
                style={{ background: color }}
              />
              <span>{label}</span>
              {typeCounts[type] && (
                <span className="text-[var(--foreground)] font-medium">
                  ({typeCounts[type]})
                </span>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function TokenChip({
  token,
  index,
  animated,
}: {
  token: Token;
  index: number;
  animated: boolean;
}) {
  const byteSize = new TextEncoder().encode(token.text).length;
  const bgClasses = TOKEN_BG_CLASSES[token.type];

  const displayText =
    token.type === "space" ? token.text.replace(/ /g, "\u00B7") : token.text;

  const chip = (
    <motion.span
      layout
      initial={animated ? { opacity: 0, scale: 0.7, y: 8 } : false}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={{
        duration: 0.25,
        delay: animated ? Math.min(index * 0.03, 1.5) : 0,
        type: "spring",
        bounce: 0.3,
      }}
      className={cn(
        "inline-flex items-center px-1.5 py-0.5 rounded-md border text-xs font-mono cursor-default transition-all hover:scale-110 hover:shadow-lg",
        bgClasses
      )}
    >
      {displayText}
    </motion.span>
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>{chip}</TooltipTrigger>
      <TooltipContent>
        <div className="space-y-1">
          <div className="font-semibold">
            &ldquo;{token.text}&rdquo;
          </div>
          <div className="text-[var(--muted-foreground)]">
            Token ID: {token.id}
          </div>
          <div className="text-[var(--muted-foreground)]">
            {byteSize} byte{byteSize !== 1 ? "s" : ""} &middot;{" "}
            {token.type}
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2.5">
      <div
        className="flex items-center justify-center w-8 h-8 rounded-lg"
        style={{ background: `color-mix(in oklch, ${color}, transparent 85%)` }}
      >
        <div style={{ color }}>{icon}</div>
      </div>
      <div>
        <div className="text-lg font-bold leading-tight text-[var(--foreground)]">
          {value}
        </div>
        <div className="text-xs text-[var(--muted-foreground)]">{label}</div>
      </div>
    </div>
  );
}
