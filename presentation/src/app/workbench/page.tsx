"use client";

import Link from "next/link";
import { Hash, Layers, GitCompareArrows, ArrowRight } from "lucide-react";

const tools = [
  {
    title: "Token Visualizer",
    description:
      "Type any text and see how AI breaks it into tokens. Understand why some sentences cost more than others.",
    href: "/workbench/tokens",
    Icon: Hash,
  },
  {
    title: "Context Simulator",
    description:
      "Add messages to a conversation and watch the AI's memory fill up. See what happens when you /compact.",
    href: "/workbench/context",
    Icon: Layers,
  },
  {
    title: "Prompt Lab",
    description:
      'Compare a vague prompt with a specific one side by side. See why "make a website" gets worse results than a detailed request.',
    href: "/workbench/prompt-lab",
    Icon: GitCompareArrows,
  },
];

export default function WorkbenchPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          AI Workbench
        </h1>
        <p className="text-[var(--muted-foreground)] max-w-lg">
          Interactive tools for understanding how AI works under the hood.
          These are teaching tools — token counts and costs are approximations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {tools.map((tool) => (
          <Link
            key={tool.title}
            href={tool.href}
            className="flex items-start gap-4 p-5 rounded-xl border border-[var(--border)] hover:border-[var(--foreground)] transition-colors group"
          >
            <div className="mt-0.5 p-2 rounded-lg bg-[var(--muted)]">
              <tool.Icon className="w-4 h-4 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold mb-1 group-hover:text-[var(--foreground)] transition-colors">
                {tool.title}
              </h2>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {tool.description}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 mt-1 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
