"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Hash,
  Layers,
  GitCompareArrows,
  ArrowRight,
  Sparkles,
  FlaskConical,
} from "lucide-react";
const TOOLS = [
  {
    title: "Token Visualizer",
    description:
      "See how AI breaks text into pieces. Watch words split into tokens in real time and understand why some sentences cost more than others.",
    icon: Hash,
    href: "/workbench/tokens",
    color: "oklch(0.6 0.2 250)",
    gradient: "from-[oklch(0.6_0.2_250)] to-[oklch(0.7_0.15_200)]",
    bgGlow: "oklch(0.6 0.2 250 / 0.15)",
  },
  {
    title: "Context Simulator",
    description:
      "Watch the AI's memory fill up. Add messages and see how the context window works, when it gets full, and what happens when you /compact.",
    icon: Layers,
    href: "/workbench/context",
    color: "oklch(0.65 0.2 155)",
    gradient: "from-[oklch(0.65_0.2_155)] to-[oklch(0.7_0.15_200)]",
    bgGlow: "oklch(0.65 0.2 155 / 0.15)",
  },
  {
    title: "Prompt Lab",
    description:
      'Compare good and bad prompts side by side. See exactly why "make a website" gives worse results than a detailed, specific prompt.',
    icon: GitCompareArrows,
    href: "/workbench/prompt-lab",
    color: "oklch(0.55 0.25 290)",
    gradient: "from-[oklch(0.55_0.25_290)] to-[oklch(0.6_0.2_10)]",
    bgGlow: "oklch(0.55 0.25 290 / 0.15)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function WorkbenchPage() {
  return (
    <div className="min-h-[calc(100vh-3rem)]">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        {/* Floating icon */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--brand-purple)] to-[var(--brand-blue)] shadow-xl shadow-[oklch(0.55_0.25_290/0.3)] mb-6"
        >
          <FlaskConical className="w-8 h-8 text-white" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          <span className="gradient-text">AI Workbench</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
          Explore How AI Thinks
        </p>
        <p className="text-sm text-[var(--muted-foreground)] mt-2 max-w-lg mx-auto">
          Interactive tools to help you understand tokens, context windows, and
          prompt engineering. Click a tool below to start exploring.
        </p>

        {/* Decorative line */}
        <div className="mt-8 mx-auto w-32 h-px bg-gradient-to-r from-transparent via-[var(--brand-purple)] to-transparent" />
      </motion.div>

      {/* Tool Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {TOOLS.map((tool) => (
          <motion.div key={tool.href} variants={itemVariants}>
            <Link href={tool.href} className="block group">
              <div className="relative rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 h-full transition-all duration-300 hover:border-[oklch(0.55_0.25_290/0.4)] hover:shadow-[0_0_30px_oklch(0.55_0.25_290/0.15)] overflow-hidden">
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: tool.bgGlow }}
                />

                {/* Icon */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `color-mix(in oklch, ${tool.color}, transparent 85%)`,
                  }}
                >
                  <tool.icon
                    className="w-6 h-6"
                    style={{ color: tool.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                  {tool.description}
                </p>

                {/* Launch button */}
                <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3" style={{ color: tool.color }}>
                  <Sparkles className="w-4 h-4" />
                  <span>Launch</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-12 text-xs text-[var(--muted-foreground)]"
      >
        These are teaching tools designed for classroom demonstration.
        <br />
        Token counts and costs are approximations.
      </motion.div>
    </div>
  );
}
