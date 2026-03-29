"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitCompareArrows,
  Lightbulb,
  Target,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { PromptComparison } from "@/components/workbench/prompt-comparison";
import { Button } from "@/components/ui/button";

const DEFAULT_BAD_PROMPT = "make a website";
const DEFAULT_GOOD_PROMPT =
  "Create a personal bio page called about.html with my name 'Alex' centered at the top, three bullet points about my hobbies (basketball, coding, music), and a dark blue color scheme with white text";

const DEFAULT_BAD_RESPONSE = `Sure, I can help you make a website. What kind of website do you want? Here are some questions:

- What is it for?
- What pages do you need?
- What should it look like?
- Do you have any content ready?

Please provide more details so I can help you better.`;

const DEFAULT_GOOD_RESPONSE = `I'll create your personal bio page right away. Here's about.html:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>About Alex</title>
  <style>
    body {
      background-color: #1a237e;
      color: white;
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
    }
    h1 { font-size: 2.5rem; margin-bottom: 30px; }
    ul { list-style: none; padding: 0; }
    li { font-size: 1.2rem; margin: 10px 0; }
  </style>
</head>
<body>
  <h1>Alex</h1>
  <ul>
    <li>Basketball</li>
    <li>Coding</li>
    <li>Music</li>
  </ul>
</body>
</html>
\`\`\`

I've created the page with:
- Your name "Alex" centered at the top
- Three hobby bullet points
- Dark blue (#1a237e) background with white text

The file is ready. Want me to add anything else?`;

const TIPS = [
  {
    title: "Be specific about WHAT",
    bad: "Make something",
    good: 'Create a login form with email and password fields',
    explanation:
      "Tell the AI exactly what you want it to build or do. Vague requests get vague results.",
  },
  {
    title: "Name your files (WHERE)",
    bad: "Put it somewhere",
    good: 'Save it as components/LoginForm.tsx',
    explanation:
      "AI agents work with real files. Telling them WHERE to put things means less back-and-forth.",
  },
  {
    title: "Describe the details (HOW)",
    bad: "Make it look nice",
    good: 'Use a blue gradient header, rounded corners, and a shadow effect',
    explanation:
      'Subjective words like "nice" or "good" mean different things to everyone. Be concrete.',
  },
  {
    title: "Add verification (VERIFY)",
    bad: "(nothing)",
    good: 'Make sure the form validates email format before submitting',
    explanation:
      "Tell the AI how to check its own work. This catches mistakes before you even see the result.",
  },
];

const CHALLENGE_BAD_PROMPT = "fix the bug";
const CHALLENGE_GOOD_PROMPT =
  "In src/utils/auth.ts, the login function throws a TypeError on line 42 when the user's email contains a '+' character. Fix the email validation regex to allow '+' characters in the local part of the email address. Test it with 'user+tag@gmail.com'.";

export default function PromptLabPage() {
  const [leftPrompt, setLeftPrompt] = React.useState(DEFAULT_BAD_PROMPT);
  const [rightPrompt, setRightPrompt] = React.useState(DEFAULT_GOOD_PROMPT);
  const [leftResponse] = React.useState(DEFAULT_BAD_RESPONSE);
  const [rightResponse] = React.useState(DEFAULT_GOOD_RESPONSE);
  const [showChallengeSolution, setShowChallengeSolution] =
    React.useState(false);

  return (
    <div className="space-y-8">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[oklch(0.55_0.25_290/0.15)]">
            <GitCompareArrows className="w-5 h-5 text-[oklch(0.7_0.2_290)]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">
              Prompt Comparison Lab
            </h1>
            <p className="text-sm text-[var(--muted-foreground)]">
              Compare good and bad prompts side by side
            </p>
          </div>
        </div>
      </motion.div>

      {/* Prompt Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <PromptComparison
          leftPrompt={leftPrompt}
          rightPrompt={rightPrompt}
          leftResponse={leftResponse}
          rightResponse={rightResponse}
          onLeftPromptChange={setLeftPrompt}
          onRightPromptChange={setRightPrompt}
        />
      </motion.div>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-[var(--border)] bg-gradient-to-r from-[oklch(0.75_0.15_80/0.15)] to-transparent">
          <Lightbulb className="w-4 h-4 text-[oklch(0.8_0.12_80)]" />
          <h2 className="text-sm font-semibold text-[var(--foreground)]">
            Prompt Improvement Patterns
          </h2>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {TIPS.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="rounded-lg border border-[var(--border)] p-4 space-y-3"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[oklch(0.65_0.2_155)]" />
                <h3 className="text-sm font-semibold text-[var(--foreground)]">
                  {tip.title}
                </h3>
              </div>

              <div className="space-y-2">
                {/* Bad example */}
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-[oklch(0.63_0.24_25/0.2)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[8px] text-[oklch(0.75_0.18_25)]">
                      X
                    </span>
                  </div>
                  <code className="text-xs text-[oklch(0.75_0.18_25)] bg-[oklch(0.63_0.24_25/0.08)] px-2 py-1 rounded font-mono">
                    {tip.bad}
                  </code>
                </div>

                {/* Good example */}
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-[oklch(0.65_0.2_155/0.2)] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5 text-[oklch(0.75_0.15_155)]" />
                  </div>
                  <code className="text-xs text-[oklch(0.75_0.15_155)] bg-[oklch(0.65_0.2_155/0.08)] px-2 py-1 rounded font-mono">
                    {tip.good}
                  </code>
                </div>
              </div>

              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                {tip.explanation}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Try It Challenge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="rounded-xl border-2 border-dashed border-[oklch(0.55_0.25_290/0.3)] bg-[oklch(0.55_0.25_290/0.03)] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-[oklch(0.55_0.25_290/0.2)] bg-gradient-to-r from-[oklch(0.55_0.25_290/0.1)] to-transparent">
          <Target className="w-4 h-4 text-[oklch(0.7_0.2_290)]" />
          <h2 className="text-sm font-bold text-[var(--foreground)]">
            Challenge: Improve This Prompt
          </h2>
          <Sparkles className="w-3.5 h-3.5 text-[oklch(0.75_0.15_80)]" />
        </div>

        <div className="p-5 space-y-4">
          {/* The bad prompt */}
          <div className="space-y-2">
            <p className="text-sm text-[var(--muted-foreground)]">
              A student wrote this prompt. How would you improve it using the
              WHAT-WHERE-HOW-VERIFY formula?
            </p>
            <div className="rounded-lg bg-[oklch(0.63_0.24_25/0.08)] border border-[oklch(0.63_0.24_25/0.2)] px-4 py-3">
              <p className="text-base font-mono text-[oklch(0.8_0.15_25)]">
                &ldquo;{CHALLENGE_BAD_PROMPT}&rdquo;
              </p>
            </div>
          </div>

          {/* Think about it prompt */}
          <div className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
            <BookOpen className="w-4 h-4 flex-shrink-0" />
            <p>
              Think about it: What is missing? What would the AI need to know to
              actually fix the right bug? Where is the bug? How should it be
              fixed?
            </p>
          </div>

          {/* Reveal button */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => setShowChallengeSolution((prev) => !prev)}
              className="gap-2"
            >
              {showChallengeSolution ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Hide Suggestion
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Reveal Suggested Improvement
                </>
              )}
            </Button>
          </div>

          {/* Suggested improvement */}
          <AnimatePresence>
            {showChallengeSolution && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[oklch(0.75_0.15_155)]">
                    <ArrowRight className="w-4 h-4" />
                    Improved version:
                  </div>
                  <div className="rounded-lg bg-[oklch(0.65_0.2_155/0.08)] border border-[oklch(0.65_0.2_155/0.2)] px-4 py-3">
                    <p className="text-sm font-mono text-[oklch(0.8_0.12_155)] leading-relaxed">
                      &ldquo;{CHALLENGE_GOOD_PROMPT}&rdquo;
                    </p>
                  </div>

                  {/* Breakdown */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                    {[
                      {
                        label: "WHAT",
                        detail: "Fix email validation regex",
                        color: "oklch(0.6 0.2 250)",
                      },
                      {
                        label: "WHERE",
                        detail: "src/utils/auth.ts, line 42",
                        color: "oklch(0.7 0.15 200)",
                      },
                      {
                        label: "HOW",
                        detail: "Allow '+' in local part",
                        color: "oklch(0.65 0.2 155)",
                      },
                      {
                        label: "VERIFY",
                        detail: "Test with user+tag@gmail.com",
                        color: "oklch(0.75 0.15 80)",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-2.5 text-center"
                      >
                        <div
                          className="text-xs font-bold mb-0.5"
                          style={{ color: item.color }}
                        >
                          {item.label}
                        </div>
                        <div className="text-[10px] text-[var(--muted-foreground)]">
                          {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-[var(--muted-foreground)] italic mt-2">
                    Notice how the improved prompt tells the AI exactly where the
                    problem is, what the problem is, how to fix it, and how to
                    verify the fix. The AI can act immediately without asking
                    clarifying questions.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
