"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Snowflake, Flame, HelpCircle, Brain, Zap, Code2, Gauge, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ParameterPanelProps {
  temperature: number;
  onTemperatureChange: (value: number) => void;
  reasoningEffort: "low" | "medium" | "high";
  onReasoningEffortChange: (value: "low" | "medium" | "high") => void;
  maxTokens: number;
  onMaxTokensChange: (value: number) => void;
  model: string;
  onModelChange: (value: string) => void;
  className?: string;
}

function InfoTooltip({ text }: { text: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="inline-flex items-center justify-center w-4 h-4 rounded-full text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors cursor-pointer">
          <HelpCircle className="w-3.5 h-3.5" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-[240px]">
        <p className="text-xs leading-relaxed">{text}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function ParameterPanel({
  temperature,
  onTemperatureChange,
  reasoningEffort,
  onReasoningEffortChange,
  maxTokens,
  onMaxTokensChange,
  model,
  onModelChange,
  className,
}: ParameterPanelProps) {
  // Temperature visual mapping (blue=cold to red=hot)
  const tempHue = 250 - (temperature / 2.0) * 220; // 250 (blue) -> 30 (red)
  const tempChroma = 0.15 + (temperature / 2.0) * 0.1;
  const tempColor = `oklch(0.65 ${tempChroma} ${tempHue})`;

  return (
    <TooltipProvider delayDuration={300}>
      <div className={cn("space-y-4", className)}>
        {/* Temperature */}
        <ParameterCard
          title="Temperature"
          tooltip="Controls randomness. Lower = more predictable, higher = more creative and surprising. Like adjusting how adventurous the AI is."
          headerGradient={`linear-gradient(135deg, oklch(0.6 0.2 250 / 0.3), ${tempColor.replace("0.65", "0.4")})`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <motion.div
                animate={{ color: tempColor }}
                className="flex items-center gap-2"
              >
                {temperature < 0.5 ? (
                  <Snowflake className="w-5 h-5" />
                ) : temperature > 1.5 ? (
                  <Flame className="w-5 h-5" />
                ) : (
                  <Gauge className="w-5 h-5" />
                )}
                <span className="text-2xl font-bold font-mono">
                  {temperature.toFixed(1)}
                </span>
              </motion.div>
              <span className="text-xs text-[var(--muted-foreground)]">
                {temperature < 0.3
                  ? "Very focused"
                  : temperature < 0.8
                  ? "Balanced"
                  : temperature < 1.5
                  ? "Creative"
                  : "Very random"}
              </span>
            </div>

            <div className="relative">
              <Slider
                value={[temperature]}
                onValueChange={([v]) => onTemperatureChange(v)}
                min={0}
                max={2}
                step={0.1}
              />
              {/* Temperature scale */}
              <div className="flex justify-between mt-1.5 text-[10px] text-[var(--muted-foreground)]">
                <span className="flex items-center gap-0.5">
                  <Snowflake className="w-2.5 h-2.5" /> 0.0
                </span>
                <span>1.0</span>
                <span className="flex items-center gap-0.5">
                  2.0 <Flame className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>
          </div>
        </ParameterCard>

        {/* Reasoning Effort */}
        <ParameterCard
          title="Reasoning Effort"
          tooltip="How hard the AI tries to think through a problem. Higher effort = more thorough but slower. Like asking someone to think carefully vs. give a quick answer."
          headerGradient="linear-gradient(135deg, oklch(0.55 0.25 290 / 0.3), oklch(0.6 0.2 250 / 0.3))"
        >
          <div className="grid grid-cols-3 gap-2">
            {(
              [
                { value: "low", label: "Low", desc: "Quick answer", icon: "lightning" },
                { value: "medium", label: "Medium", desc: "Balanced", icon: "brain" },
                { value: "high", label: "High", desc: "Deep thinking", icon: "telescope" },
              ] as const
            ).map((option) => (
              <button
                key={option.value}
                onClick={() => onReasoningEffortChange(option.value)}
                className={cn(
                  "flex flex-col items-center gap-1.5 p-3 rounded-lg border transition-all duration-200 cursor-pointer",
                  reasoningEffort === option.value
                    ? "border-[var(--primary)] bg-[oklch(0.55_0.25_290/0.1)] shadow-[0_0_12px_oklch(0.55_0.25_290/0.2)]"
                    : "border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--accent)]"
                )}
              >
                <div
                  className={cn(
                    "text-xs font-semibold",
                    reasoningEffort === option.value
                      ? "text-[var(--primary)]"
                      : "text-[var(--foreground)]"
                  )}
                >
                  {option.label}
                </div>
                <div className="text-[10px] text-[var(--muted-foreground)]">
                  {option.desc}
                </div>
              </button>
            ))}
          </div>
        </ParameterCard>

        {/* Max Tokens */}
        <ParameterCard
          title="Max Tokens"
          tooltip="The maximum length of the AI's response. Think of it as a word limit for the AI. More tokens = longer possible responses."
          headerGradient="linear-gradient(135deg, oklch(0.7 0.15 200 / 0.3), oklch(0.65 0.2 155 / 0.3))"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[oklch(0.7_0.15_200)]" />
                <span className="text-2xl font-bold font-mono text-[var(--foreground)]">
                  {maxTokens.toLocaleString()}
                </span>
              </div>
              <span className="text-xs text-[var(--muted-foreground)]">
                ~{Math.round(maxTokens * 0.75)} words
              </span>
            </div>

            <Slider
              value={[maxTokens]}
              onValueChange={([v]) => onMaxTokensChange(v)}
              min={100}
              max={4000}
              step={100}
            />
            <div className="flex justify-between text-[10px] text-[var(--muted-foreground)]">
              <span>100</span>
              <span>2000</span>
              <span>4000</span>
            </div>
          </div>
        </ParameterCard>

        {/* Model Selector */}
        <ParameterCard
          title="Model"
          tooltip="Which AI model to use. Different models have different strengths and costs. Like choosing between a sports car, sedan, or truck."
          headerGradient="linear-gradient(135deg, oklch(0.75 0.15 80 / 0.3), oklch(0.6 0.2 10 / 0.3))"
        >
          <div className="space-y-2">
            {[
              {
                id: "gpt-5.4",
                name: "GPT-5.4",
                desc: "Most capable",
                detail: "Best for complex tasks",
                icon: Brain,
                color: "oklch(0.55 0.25 290)",
              },
              {
                id: "gpt-5.4-mini",
                name: "GPT-5.4-mini",
                desc: "Fastest",
                detail: "Best for simple tasks",
                icon: Zap,
                color: "oklch(0.7 0.15 200)",
              },
              {
                id: "gpt-5.3-codex",
                name: "GPT-5.3-codex",
                desc: "Code specialist",
                detail: "Best for programming",
                icon: Code2,
                color: "oklch(0.75 0.15 80)",
              },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => onModelChange(m.id)}
                className={cn(
                  "flex items-center gap-3 w-full p-3 rounded-lg border transition-all duration-200 text-left cursor-pointer",
                  model === m.id
                    ? "border-[var(--primary)] bg-[oklch(0.55_0.25_290/0.08)] shadow-[0_0_12px_oklch(0.55_0.25_290/0.15)]"
                    : "border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--accent)]"
                )}
              >
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-lg"
                  style={{
                    background: `color-mix(in oklch, ${m.color}, transparent 85%)`,
                  }}
                >
                  <m.icon className="w-4.5 h-4.5" style={{ color: m.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-[var(--foreground)]">
                    {m.name}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)]">
                    {m.desc} &middot; {m.detail}
                  </div>
                </div>
                {model === m.id && (
                  <motion.div
                    layoutId="model-check"
                    className="w-2 h-2 rounded-full"
                    style={{ background: m.color }}
                    transition={{ type: "spring", bounce: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </ParameterCard>
      </div>
    </TooltipProvider>
  );
}

function ParameterCard({
  title,
  tooltip,
  headerGradient,
  children,
}: {
  title: string;
  tooltip: string;
  headerGradient: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
      {/* Gradient header */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ background: headerGradient }}
      >
        <h3 className="text-sm font-semibold text-[var(--foreground)]">
          {title}
        </h3>
        <InfoTooltip text={tooltip} />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
