"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModelSelectorProps {
  selected: string;
  onChange: (model: string) => void;
  className?: string;
}

const MODELS = [
  {
    id: "gpt-5.4",
    name: "GPT-5.4",
    tagline: "Most capable",
    description: "Best for complex tasks",
    icon: Brain,
    accentColor: "oklch(0.55 0.25 290)",
    glowColor: "oklch(0.55 0.25 290 / 0.35)",
    bgColor: "oklch(0.55 0.25 290 / 0.08)",
    borderColor: "oklch(0.55 0.25 290 / 0.4)",
  },
  {
    id: "gpt-5.4-mini",
    name: "GPT-5.4-mini",
    tagline: "Fastest",
    description: "Best for simple tasks",
    icon: Zap,
    accentColor: "oklch(0.7 0.15 200)",
    glowColor: "oklch(0.7 0.15 200 / 0.35)",
    bgColor: "oklch(0.7 0.15 200 / 0.08)",
    borderColor: "oklch(0.7 0.15 200 / 0.4)",
  },
  {
    id: "gpt-5.3-codex",
    name: "GPT-5.3-codex",
    tagline: "Code specialist",
    description: "Best for programming",
    icon: Code2,
    accentColor: "oklch(0.75 0.15 80)",
    glowColor: "oklch(0.75 0.15 80 / 0.35)",
    bgColor: "oklch(0.75 0.15 80 / 0.08)",
    borderColor: "oklch(0.75 0.15 80 / 0.4)",
  },
];

export function ModelSelector({
  selected,
  onChange,
  className,
}: ModelSelectorProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3", className)}>
      {MODELS.map((model) => {
        const isSelected = selected === model.id;

        return (
          <motion.button
            key={model.id}
            onClick={() => onChange(model.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "relative flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer",
              isSelected
                ? "shadow-lg"
                : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--muted-foreground)]"
            )}
            style={
              isSelected
                ? {
                    borderColor: model.borderColor,
                    background: model.bgColor,
                    boxShadow: `0 0 24px ${model.glowColor}`,
                  }
                : undefined
            }
          >
            {/* Glow ring for selected */}
            {isSelected && (
              <motion.div
                layoutId="model-ring"
                className="absolute inset-0 rounded-xl"
                style={{
                  boxShadow: `inset 0 0 20px ${model.glowColor}`,
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            {/* Icon */}
            <div
              className={cn(
                "flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300",
                isSelected ? "scale-110" : ""
              )}
              style={{
                background: isSelected
                  ? `color-mix(in oklch, ${model.accentColor}, transparent 75%)`
                  : "var(--secondary)",
              }}
            >
              <model.icon
                className="w-6 h-6 transition-colors duration-300"
                style={{
                  color: isSelected
                    ? model.accentColor
                    : "var(--muted-foreground)",
                }}
              />
            </div>

            {/* Text */}
            <div className="text-center space-y-1">
              <div
                className="text-sm font-bold transition-colors duration-300"
                style={{
                  color: isSelected
                    ? model.accentColor
                    : "var(--foreground)",
                }}
              >
                {model.name}
              </div>
              <div className="text-xs font-medium text-[var(--muted-foreground)]">
                {model.tagline}
              </div>
              <div className="text-[10px] text-[var(--muted-foreground)]">
                {model.description}
              </div>
            </div>

            {/* Selection indicator */}
            {isSelected && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: model.accentColor }}
              >
                <svg
                  className="w-2.5 h-2.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
