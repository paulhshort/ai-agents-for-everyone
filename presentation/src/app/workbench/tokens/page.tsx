"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Hash, DollarSign, Type, BarChart3, Sparkles } from "lucide-react";
import { PromptInput } from "@/components/workbench/prompt-input";
import { TokenDisplay } from "@/components/workbench/token-display";
import { ModelSelector } from "@/components/workbench/model-selector";
import {
  approximateTokenize,
  countTokens,
  estimateCost,
  type Token,
} from "@/lib/tokenizer";

const DEFAULT_TEXT =
  "The AI agent reads your files and takes action on your behalf";

const EXAMPLE_SENTENCES = [
  {
    label: "Simple sentence",
    text: "Hello, how are you today?",
  },
  {
    label: "Technical term",
    text: "The transformer architecture uses self-attention mechanisms for sequence processing",
  },
  {
    label: "Code snippet",
    text: 'const result = await fetch("https://api.example.com/data").then(r => r.json());',
  },
  {
    label: "Numbers and punctuation",
    text: "On 2024-01-15, we processed 1,234,567 tokens at $0.002/1K — a 45.7% improvement!",
  },
  {
    label: "Long words",
    text: "Antidisestablishmentarianism and supercalifragilisticexpialidocious are extraordinarily long words",
  },
  {
    label: "Multilingual",
    text: "Hello world! Bonjour le monde! Hola mundo! Hallo Welt!",
  },
];

export default function TokenVisualizerPage() {
  const [text, setText] = React.useState(DEFAULT_TEXT);
  const [model, setModel] = React.useState("gpt-5.4");
  const [tokens, setTokens] = React.useState<Token[]>([]);
  const [animated, setAnimated] = React.useState(true);

  // Re-tokenize when text changes
  React.useEffect(() => {
    const result = approximateTokenize(text);
    setTokens(result);
  }, [text]);

  const nonSpaceTokens = tokens.filter((t) => t.type !== "space");
  const tokenCount = nonSpaceTokens.length;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const avgTokensPerWord = wordCount > 0 ? (tokenCount / wordCount).toFixed(1) : "0";
  const cost = estimateCost(tokenCount, model);

  return (
    <div className="space-y-8">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[oklch(0.6_0.2_250/0.15)]">
            <Hash className="w-5 h-5 text-[oklch(0.7_0.15_250)]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">
              Token Visualizer
            </h1>
            <p className="text-sm text-[var(--muted-foreground)]">
              See how AI breaks text into pieces
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left column: Input + Tokens */}
        <div className="xl:col-span-2 space-y-6">
          {/* Prompt Input */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <PromptInput value={text} onChange={setText} />
          </motion.div>

          {/* Token Display */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <TokenDisplay tokens={tokens} animated={animated} />
          </motion.div>

          {/* Try These section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[oklch(0.75_0.15_80)]" />
              <h3 className="text-sm font-semibold text-[var(--foreground)]">
                Try These Examples
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {EXAMPLE_SENTENCES.map((example) => (
                <button
                  key={example.label}
                  onClick={() => {
                    setAnimated(true);
                    setText(example.text);
                  }}
                  className="flex flex-col items-start gap-1 px-3 py-2.5 rounded-lg border border-[var(--border)] bg-transparent text-left transition-all duration-200 hover:border-[oklch(0.6_0.2_250/0.4)] hover:bg-[oklch(0.6_0.2_250/0.05)] cursor-pointer group"
                >
                  <span className="text-xs font-semibold text-[oklch(0.7_0.15_250)] group-hover:text-[oklch(0.8_0.12_250)]">
                    {example.label}
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)] line-clamp-1">
                    {example.text}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column: Stats + Model */}
        <div className="space-y-6">
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            <StatsCard
              icon={<Hash className="w-4 h-4" />}
              label="Total Tokens"
              value={tokenCount.toString()}
              color="oklch(0.6 0.2 250)"
            />
            <StatsCard
              icon={<Type className="w-4 h-4" />}
              label="Words"
              value={wordCount.toString()}
              color="oklch(0.7 0.15 200)"
            />
            <StatsCard
              icon={<BarChart3 className="w-4 h-4" />}
              label="Avg Tokens/Word"
              value={avgTokensPerWord}
              color="oklch(0.65 0.2 155)"
            />
            <StatsCard
              icon={<DollarSign className="w-4 h-4" />}
              label="Est. Input Cost"
              value={cost.input}
              color="oklch(0.75 0.15 80)"
            />
          </motion.div>

          {/* Cost breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4"
          >
            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3">
              Cost Estimate
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--muted-foreground)]">
                  Input cost
                </span>
                <span className="font-mono text-[var(--foreground)]">
                  {cost.input}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--muted-foreground)]">
                  Output cost (same length)
                </span>
                <span className="font-mono text-[var(--foreground)]">
                  {cost.output}
                </span>
              </div>
              <div className="h-px bg-[var(--border)] my-1" />
              <div className="text-xs text-[var(--muted-foreground)]">
                Based on {model} pricing (~{model === "gpt-5.4" ? "$5" : model === "gpt-5.4-mini" ? "$0.50" : "$3"}/M input tokens)
              </div>
            </div>
          </motion.div>

          {/* Model Selector */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3">
              Select Model
            </h3>
            <ModelSelector selected={model} onChange={setModel} />
          </motion.div>

          {/* Animation toggle */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <label className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] cursor-pointer transition-all hover:border-[var(--muted-foreground)]">
              <input
                type="checkbox"
                checked={animated}
                onChange={(e) => setAnimated(e.target.checked)}
                className="w-4 h-4 rounded accent-[var(--primary)]"
              />
              <div>
                <div className="text-sm font-medium text-[var(--foreground)]">
                  Animate tokens
                </div>
                <div className="text-xs text-[var(--muted-foreground)]">
                  Show staggered entrance animation
                </div>
              </div>
            </label>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function StatsCard({
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
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
      <div
        className="flex items-center justify-center w-8 h-8 rounded-lg mb-2"
        style={{
          background: `color-mix(in oklch, ${color}, transparent 85%)`,
        }}
      >
        <div style={{ color }}>{icon}</div>
      </div>
      <div className="text-xl font-bold font-mono text-[var(--foreground)]">
        {value}
      </div>
      <div className="text-xs text-[var(--muted-foreground)]">{label}</div>
    </div>
  );
}
