"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  CheckCircle2,
  XCircle,
  Target,
  MapPin,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { countTokens } from "@/lib/tokenizer";
import { Button } from "@/components/ui/button";

interface PromptComparisonProps {
  leftPrompt: string;
  rightPrompt: string;
  leftResponse: string;
  rightResponse: string;
  onLeftPromptChange: (value: string) => void;
  onRightPromptChange: (value: string) => void;
  onGenerate?: () => void;
  isGenerating?: boolean;
  className?: string;
}

// WHAT-WHERE-HOW-VERIFY formula analysis
function analyzeFormula(prompt: string) {
  const lower = prompt.toLowerCase();
  const checks = {
    what: {
      label: "WHAT",
      desc: "What do you want?",
      icon: Target,
      found: false,
      hints: [] as string[],
    },
    where: {
      label: "WHERE",
      desc: "Where should it go?",
      icon: MapPin,
      found: false,
      hints: [] as string[],
    },
    how: {
      label: "HOW",
      desc: "How should it look/work?",
      icon: Wrench,
      found: false,
      hints: [] as string[],
    },
    verify: {
      label: "VERIFY",
      desc: "How to check it worked?",
      icon: ShieldCheck,
      found: false,
      hints: [] as string[],
    },
  };

  // WHAT: The action or thing requested
  const whatPatterns = [
    /create|build|make|write|generate|design|develop|set up|implement/,
    /page|website|app|file|component|function|script|document/,
  ];
  for (const p of whatPatterns) {
    const match = lower.match(p);
    if (match) {
      checks.what.found = true;
      checks.what.hints.push(match[0]);
    }
  }

  // WHERE: File names, locations, placement
  const wherePatterns = [
    /called\s+[\w.-]+/,
    /in\s+(?:the\s+)?[\w./]+/,
    /\.html|\.css|\.js|\.tsx?|\.py/,
    /at\s+the\s+(?:top|bottom|center|left|right)/,
    /centered|above|below|next\s+to/,
  ];
  for (const p of wherePatterns) {
    const match = lower.match(p);
    if (match) {
      checks.where.found = true;
      checks.where.hints.push(match[0]);
    }
  }

  // HOW: Style, format, specific details
  const howPatterns = [
    /color|scheme|style|theme|font|size|layout/,
    /blue|red|green|dark|light|white|black/,
    /bullet|list|grid|flex|column|row/,
    /three|two|four|five|\d+\s+(?:items|points|sections)/,
    /with\s+(?:my|a|the)\s+\w+/,
  ];
  for (const p of howPatterns) {
    const match = lower.match(p);
    if (match) {
      checks.how.found = true;
      checks.how.hints.push(match[0]);
    }
  }

  // VERIFY: Testing, checking, validation
  const verifyPatterns = [
    /test|check|verify|ensure|make\s+sure|confirm|validate/,
    /should\s+(?:be|have|show|display|include)/,
    /must\s+(?:be|have|show|display|include)/,
  ];
  for (const p of verifyPatterns) {
    const match = lower.match(p);
    if (match) {
      checks.verify.found = true;
      checks.verify.hints.push(match[0]);
    }
  }

  const score = Object.values(checks).filter((c) => c.found).length;
  return { checks, score };
}

export function PromptComparison({
  leftPrompt,
  rightPrompt,
  leftResponse,
  rightResponse,
  onLeftPromptChange,
  onRightPromptChange,
  onGenerate,
  isGenerating = false,
  className,
}: PromptComparisonProps) {
  const [showLeftResponse, setShowLeftResponse] = React.useState(false);
  const [showRightResponse, setShowRightResponse] = React.useState(false);
  const [leftDisplayed, setLeftDisplayed] = React.useState("");
  const [rightDisplayed, setRightDisplayed] = React.useState("");

  const leftTokens = countTokens(leftPrompt);
  const rightTokens = countTokens(rightPrompt);
  const leftAnalysis = analyzeFormula(leftPrompt);
  const rightAnalysis = analyzeFormula(rightPrompt);

  // Typing animation for left response
  React.useEffect(() => {
    if (!showLeftResponse || !leftResponse) return;
    setLeftDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setLeftDisplayed(leftResponse.slice(0, i));
      if (i >= leftResponse.length) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, [showLeftResponse, leftResponse]);

  // Typing animation for right response
  React.useEffect(() => {
    if (!showRightResponse || !rightResponse) return;
    setRightDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setRightDisplayed(rightResponse.slice(0, i));
      if (i >= rightResponse.length) clearInterval(interval);
    }, 8);
    return () => clearInterval(interval);
  }, [showRightResponse, rightResponse]);

  const handleGenerate = () => {
    setShowLeftResponse(true);
    setShowRightResponse(true);
    onGenerate?.();
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Side-by-side panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* LEFT: "Before" panel */}
        <PromptPanel
          label="Before"
          labelColor="oklch(0.63 0.24 25)"
          tint="oklch(0.63 0.24 25 / 0.05)"
          borderColor="oklch(0.63 0.24 25 / 0.3)"
          prompt={leftPrompt}
          onPromptChange={onLeftPromptChange}
          tokenCount={leftTokens}
          response={showLeftResponse ? leftDisplayed : null}
          analysis={leftAnalysis}
        />

        {/* RIGHT: "After" panel */}
        <PromptPanel
          label="After"
          labelColor="oklch(0.65 0.2 155)"
          tint="oklch(0.65 0.2 155 / 0.05)"
          borderColor="oklch(0.65 0.2 155 / 0.3)"
          prompt={rightPrompt}
          onPromptChange={onRightPromptChange}
          tokenCount={rightTokens}
          response={showRightResponse ? rightDisplayed : null}
          analysis={rightAnalysis}
        />
      </div>

      {/* Comparison stats card */}
      <motion.div
        className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-xs text-[var(--muted-foreground)] mb-1">
                Before
              </div>
              <div className="text-lg font-bold font-mono text-[oklch(0.75_0.18_25)]">
                {leftTokens}
              </div>
              <div className="text-[10px] text-[var(--muted-foreground)]">
                tokens
              </div>
            </div>

            <ArrowRight className="w-5 h-5 text-[var(--muted-foreground)]" />

            <div className="text-center">
              <div className="text-xs text-[var(--muted-foreground)] mb-1">
                After
              </div>
              <div className="text-lg font-bold font-mono text-[oklch(0.75_0.15_155)]">
                {rightTokens}
              </div>
              <div className="text-[10px] text-[var(--muted-foreground)]">
                tokens
              </div>
            </div>

            <div className="h-8 w-px bg-[var(--border)]" />

            <div className="text-center">
              <div className="text-xs text-[var(--muted-foreground)] mb-1">
                Formula Score
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[oklch(0.75_0.18_25)]">
                  {leftAnalysis.score}/4
                </span>
                <ArrowRight className="w-3 h-3 text-[var(--muted-foreground)]" />
                <span className="text-sm font-bold text-[oklch(0.75_0.15_155)]">
                  {rightAnalysis.score}/4
                </span>
              </div>
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={isGenerating || (!leftPrompt && !rightPrompt)}
            size="lg"
            className="gap-2"
          >
            {isGenerating ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                Generating...
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Generate Responses
              </>
            )}
          </Button>
        </div>
      </motion.div>

      {/* WHAT-WHERE-HOW-VERIFY checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FormulaChecklist analysis={leftAnalysis} label="Before" />
        <FormulaChecklist analysis={rightAnalysis} label="After" />
      </div>
    </div>
  );
}

function PromptPanel({
  label,
  labelColor,
  tint,
  borderColor,
  prompt,
  onPromptChange,
  tokenCount,
  response,
  analysis,
}: {
  label: string;
  labelColor: string;
  tint: string;
  borderColor: string;
  prompt: string;
  onPromptChange: (v: string) => void;
  tokenCount: number;
  response: string | null;
  analysis: ReturnType<typeof analyzeFormula>;
}) {
  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{ borderColor, background: tint }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ borderColor }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: labelColor }}
          />
          <span className="text-sm font-semibold" style={{ color: labelColor }}>
            {label}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
          <span className="font-mono">{tokenCount} tokens</span>
          <span>&middot;</span>
          <span>{analysis.score}/4 formula</span>
        </div>
      </div>

      {/* Prompt input */}
      <div className="p-3">
        <textarea
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          className="w-full min-h-[100px] bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] resize-none focus:outline-none leading-relaxed"
          placeholder={`Type your "${label.toLowerCase()}" prompt...`}
        />
      </div>

      {/* Response area */}
      <AnimatePresence>
        {response !== null && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t overflow-hidden"
            style={{ borderColor }}
          >
            <div className="px-4 py-2 text-[10px] uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">
              Simulated Response
            </div>
            <div className="px-4 pb-3 text-sm text-[var(--foreground)] leading-relaxed whitespace-pre-wrap font-mono">
              {response}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-4 ml-0.5 bg-[var(--primary)] align-text-bottom"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FormulaChecklist({
  analysis,
  label,
}: {
  analysis: ReturnType<typeof analyzeFormula>;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
      <h4 className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-3">
        Formula Check: {label}
      </h4>
      <div className="space-y-2">
        {Object.values(analysis.checks).map((check) => (
          <div
            key={check.label}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg border transition-all",
              check.found
                ? "border-[oklch(0.65_0.2_155/0.3)] bg-[oklch(0.65_0.2_155/0.05)]"
                : "border-[var(--border)] bg-transparent opacity-50"
            )}
          >
            {check.found ? (
              <CheckCircle2 className="w-4 h-4 text-[oklch(0.65_0.2_155)] flex-shrink-0" />
            ) : (
              <XCircle className="w-4 h-4 text-[var(--muted-foreground)] flex-shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <check.icon className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
                <span className="text-sm font-semibold text-[var(--foreground)]">
                  {check.label}
                </span>
                <span className="text-xs text-[var(--muted-foreground)]">
                  {check.desc}
                </span>
              </div>
              {check.found && check.hints.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-1">
                  {check.hints.slice(0, 3).map((hint, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-[oklch(0.65_0.2_155/0.15)] text-[oklch(0.75_0.15_155)] font-mono"
                    >
                      {hint}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
