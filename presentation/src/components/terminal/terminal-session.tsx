'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { TerminalMockup, type ScriptLine } from './terminal-mockup';
import { cn } from '@/lib/utils';

/* ---------- Demo data ---------- */
interface DemoData {
  title: string;
  description: string;
  takeaway: string;
  terminalTitle: string;
  script: ScriptLine[];
}

const DEMOS: Record<string, DemoData> = {
  'hello-codex': {
    title: 'Your First Codex Command',
    description:
      'See how easy it is to start a conversation with an AI coding agent right from your terminal.',
    takeaway:
      'Codex understands natural language. You just tell it what you want, and it figures out the steps.',
    terminalTitle: 'codex-demo ~ Terminal',
    script: [
      { type: 'comment', text: 'Launch Codex in your project directory' },
      { type: 'input', text: 'codex', delay: 600 },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '  ╔══════════════════════════════════════╗',
      },
      {
        type: 'output',
        text: '  ║   Welcome to OpenAI Codex CLI        ║',
      },
      {
        type: 'output',
        text: '  ║   Model: o4-mini    Approval: suggest ║',
      },
      {
        type: 'output',
        text: '  ╚══════════════════════════════════════╝',
      },
      { type: 'output', text: '' },
      {
        type: 'input',
        text: 'Add a dark mode toggle to the header component',
        delay: 800,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '🔍 Reading src/components/Header.tsx...',
        delay: 200,
      },
      {
        type: 'output',
        text: '🔍 Reading src/styles/globals.css...',
        delay: 100,
      },
      {
        type: 'output',
        text: '🔍 Reading package.json...',
        delay: 100,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '📝 Proposed changes:',
        delay: 300,
      },
      {
        type: 'output',
        text: '   EDIT src/components/Header.tsx (+24 lines)',
      },
      {
        type: 'output',
        text: '   EDIT src/styles/globals.css (+15 lines)',
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '   Apply changes? [y/n]',
        delay: 200,
      },
      { type: 'input', text: 'y', delay: 600 },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '✅ Changes applied successfully!',
        delay: 300,
      },
    ],
  },

  'agentic-loop': {
    title: 'The Agentic Loop in Action',
    description:
      'Watch the THINK → ACT → OBSERVE → DECIDE cycle play out as Codex fixes a bug.',
    takeaway:
      'The agent loops autonomously: it reads code, forms a plan, executes changes, checks results, and decides whether to continue or stop.',
    terminalTitle: 'codex ~ bug-fix',
    script: [
      { type: 'comment', text: 'Ask Codex to fix a failing test' },
      {
        type: 'input',
        text: 'Fix the failing test in src/utils/__tests__/parser.test.ts',
        delay: 600,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '💭 THINK: Let me read the failing test to understand what\'s expected...',
        delay: 400,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '⚡ ACT: shell cat src/utils/__tests__/parser.test.ts',
        delay: 300,
      },
      {
        type: 'output',
        text: '   (reading 45 lines...)',
        delay: 200,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '👁  OBSERVE: Test expects parseConfig() to handle nested objects,',
        delay: 300,
      },
      {
        type: 'output',
        text: '   but the function only handles flat key-value pairs.',
        delay: 100,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '🤔 DECIDE: I need to update parseConfig(). Let me read the source...',
        delay: 400,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '⚡ ACT: shell cat src/utils/parser.ts',
        delay: 300,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '💭 THINK: I\'ll add recursive parsing for nested objects...',
        delay: 400,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '⚡ ACT: edit src/utils/parser.ts (+12 lines)',
        delay: 300,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '⚡ ACT: shell npm test -- --testPathPattern parser',
        delay: 300,
      },
      {
        type: 'output',
        text: '   PASS src/utils/__tests__/parser.test.ts',
        delay: 600,
      },
      {
        type: 'output',
        text: '   ✓ parses flat config (3ms)',
      },
      {
        type: 'output',
        text: '   ✓ parses nested config (2ms)',
      },
      {
        type: 'output',
        text: '   ✓ handles empty input (1ms)',
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '👁  OBSERVE: All 3 tests pass!',
        delay: 200,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '🤔 DECIDE: ✅ DONE — Bug fixed, all tests passing.',
        delay: 300,
      },
    ],
  },

  'context-window': {
    title: 'Context Window Management',
    description:
      'See how Codex manages its context window and what happens when it gets full.',
    takeaway:
      'The /compact command summarizes the conversation to free up context space — like clearing your desk to make room for new work.',
    terminalTitle: 'codex ~ context-demo',
    script: [
      { type: 'comment', text: 'Working on a large refactoring task...' },
      {
        type: 'input',
        text: 'Refactor the entire auth module to use JWT tokens',
        delay: 600,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '🔍 Reading src/auth/session.ts...',
        delay: 200,
      },
      {
        type: 'output',
        text: '🔍 Reading src/auth/middleware.ts...',
        delay: 150,
      },
      {
        type: 'output',
        text: '🔍 Reading src/auth/routes.ts...',
        delay: 150,
      },
      {
        type: 'output',
        text: '🔍 Reading src/auth/types.ts...',
        delay: 150,
      },
      {
        type: 'output',
        text: '🔍 Reading 12 more files...',
        delay: 300,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '⚠️  Context usage: 178,000 / 200,000 tokens (89%)',
        delay: 400,
      },
      {
        type: 'output',
        text: '⚠️  Running low on context space!',
        delay: 200,
      },
      { type: 'output', text: '' },
      {
        type: 'comment',
        text: 'Use /compact to free up space',
        delay: 400,
      },
      { type: 'input', text: '/compact', delay: 500 },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '📦 Compacting conversation history...',
        delay: 300,
      },
      {
        type: 'output',
        text: '   Summarizing 47 messages into concise context...',
        delay: 400,
      },
      {
        type: 'output',
        text: '   Preserving: file changes, key decisions, current task',
        delay: 200,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '✅ Context compacted: 178,000 → 42,000 tokens',
        delay: 400,
      },
      {
        type: 'output',
        text: '   Free space: 158,000 tokens available',
        delay: 200,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '   Ready to continue refactoring!',
        delay: 300,
      },
    ],
  },

  'tool-use': {
    title: 'Tool Use & File Operations',
    description:
      'Watch Codex use its built-in tools to read files, run commands, and apply patches.',
    takeaway:
      'Codex has a small set of powerful tools: shell commands, file edits, and web fetches. It chains them together to accomplish complex tasks.',
    terminalTitle: 'codex ~ tools',
    script: [
      { type: 'comment', text: 'Ask Codex to set up a new API endpoint' },
      {
        type: 'input',
        text: 'Create a GET /api/health endpoint that returns system status',
        delay: 600,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '💭 Planning: I\'ll create the route handler and add a health check...',
        delay: 300,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '🔧 TOOL: shell ls src/app/api/',
        delay: 200,
      },
      {
        type: 'output',
        text: '   auth/  users/  posts/',
        delay: 150,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '🔧 TOOL: write src/app/api/health/route.ts',
        delay: 300,
      },
      {
        type: 'output',
        text: '   Created file with GET handler (18 lines)',
        delay: 200,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '🔧 TOOL: shell curl -s http://localhost:3000/api/health',
        delay: 400,
      },
      {
        type: 'output',
        text: '   {"status":"ok","uptime":12345,"version":"1.2.0"}',
        delay: 300,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '✅ Health endpoint created and verified!',
        delay: 300,
      },
    ],
  },

  'approval-modes': {
    title: 'Approval Modes Comparison',
    description:
      'Compare how Codex behaves in suggest, auto-edit, and full-auto modes.',
    takeaway:
      'Start with "suggest" mode to build trust. Move to "auto-edit" for faster iteration. Use "full-auto" only in sandboxed environments you trust.',
    terminalTitle: 'codex ~ modes',
    script: [
      { type: 'comment', text: '--- SUGGEST MODE (default, safest) ---' },
      {
        type: 'input',
        text: 'codex --approval-mode suggest "Add input validation"',
        delay: 500,
      },
      { type: 'output', text: '' },
      { type: 'output', text: '📝 Proposed changes:', delay: 300 },
      {
        type: 'output',
        text: '   EDIT src/api/users.ts (+8 lines)',
      },
      { type: 'output', text: '   Apply? [y/n/e(dit)]', delay: 200 },
      { type: 'output', text: '' },
      {
        type: 'comment',
        text: '--- AUTO-EDIT MODE (auto-applies file edits) ---',
      },
      {
        type: 'input',
        text: 'codex --approval-mode auto-edit "Add input validation"',
        delay: 500,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '✏️  Auto-applied: EDIT src/api/users.ts (+8 lines)',
        delay: 300,
      },
      {
        type: 'output',
        text: '⏸  Needs approval: shell npm test',
        delay: 200,
      },
      { type: 'output', text: '   Run command? [y/n]', delay: 200 },
      { type: 'output', text: '' },
      {
        type: 'comment',
        text: '--- FULL-AUTO MODE (no approvals needed) ---',
      },
      {
        type: 'input',
        text: 'codex --approval-mode full-auto "Add input validation"',
        delay: 500,
      },
      { type: 'output', text: '' },
      {
        type: 'output',
        text: '✏️  Applied: EDIT src/api/users.ts (+8 lines)',
        delay: 200,
      },
      {
        type: 'output',
        text: '⚡ Ran: npm test (all passing)',
        delay: 300,
      },
      {
        type: 'output',
        text: '✅ Done — no human intervention needed!',
        delay: 200,
      },
    ],
  },
};

/* ---------- Props ---------- */
interface TerminalSessionProps {
  demoId: string;
  className?: string;
  autoPlay?: boolean;
}

/* ---------- Component ---------- */
export function TerminalSession({
  demoId,
  className,
  autoPlay = true,
}: TerminalSessionProps) {
  const demo = useMemo(() => DEMOS[demoId], [demoId]);

  if (!demo) {
    return (
      <div
        className={cn(
          'rounded-2xl p-8 text-center',
          className
        )}
        style={{
          background: 'oklch(0.12 0.02 280)',
          border: '1px solid oklch(0.25 0.03 280)',
        }}
      >
        <p style={{ color: 'oklch(0.6 0.03 280)' }}>
          Demo &quot;{demoId}&quot; not found.
        </p>
      </div>
    );
  }

  return (
    <div className={cn('space-y-4', className)}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center space-y-1"
      >
        <h3
          className="text-lg font-semibold"
          style={{ color: 'oklch(0.9 0.03 280)' }}
        >
          {demo.title}
        </h3>
        <p
          className="text-sm max-w-xl mx-auto leading-relaxed"
          style={{ color: 'oklch(0.6 0.02 280)' }}
        >
          {demo.description}
        </p>
      </motion.div>

      {/* Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <TerminalMockup
          script={demo.script}
          title={demo.terminalTitle}
          autoPlay={autoPlay}
        />
      </motion.div>

      {/* Key Takeaway card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="rounded-xl p-4 max-w-3xl mx-auto"
        style={{
          background:
            'linear-gradient(135deg, oklch(0.15 0.06 280), oklch(0.12 0.04 260))',
          border: '1px solid oklch(0.28 0.08 280)',
          boxShadow: '0 0 20px oklch(0.2 0.1 280 / 0.2)',
        }}
      >
        <div className="flex items-start gap-3">
          <div
            className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
            style={{
              background: 'oklch(0.25 0.1 280)',
              border: '1px solid oklch(0.35 0.1 280)',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: '#a78bfa' }}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <h4
              className="text-sm font-semibold mb-1"
              style={{ color: '#c4b5fd' }}
            >
              Key Takeaway
            </h4>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'oklch(0.75 0.03 280)' }}
            >
              {demo.takeaway}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default TerminalSession;
