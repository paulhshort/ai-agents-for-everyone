'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { courseDays, getTeachingModuleCount } from '@/data/course-structure';
import {
  ArrowRight,
  ArrowDown,
  Beaker,
  Terminal,
  HelpCircle,
  Clock,
  Layers,
  MessageSquare,
  Zap,
  Users,
  Sparkles,
  Brain,
  Shield,
  Wrench,
  Network,
  Eye,
} from 'lucide-react';

/* ---------- Animated section ---------- */
function Section({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Module type icons ---------- */
const typeIcons: Record<string, string> = {
  lecture: '\u{1F4D6}',
  activity: '\u270B',
  lab: '\u{1F52C}',
  demo: '\u25B6\uFE0F',
  recap: '\u{1F4CB}',
};

/* ---------- Day teasers ---------- */
const dayTeasers: Record<number, string> = {
  1: "From 'what IS AI?' to watching it create files on your computer",
  2: 'Master the art of talking to AI \u2014 and know when to trust it',
  3: "Build something real that you'll actually use",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ===== SECTION 1: HERO ===== */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
          }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-6">
            A Free Interactive Course
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
            AI Agents
            <span className="block text-[var(--muted-foreground)] font-normal text-3xl sm:text-4xl md:text-5xl mt-2 tracking-tight">
              for <span className="text-[var(--accent)]">Everyone</span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            What if your computer could actually <em className="font-medium text-[var(--foreground)] not-italic">do things</em> for you &mdash; not just answer questions?
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Link
              href="/day/1"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[var(--foreground)] text-[var(--background)] font-medium text-base hover:opacity-90 transition-opacity"
            >
              Start Learning
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#the-moment"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-[var(--border)] font-medium text-base text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors"
            >
              See what&apos;s possible
              <ArrowDown className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ===== WHO IS THIS FOR? ===== */}
      <section className="py-20 px-6 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <Section>
            <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-3">
              Who is this for?
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10">
              You don&apos;t need to be a programmer.
            </h2>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                Icon: Users,
                text: "Students who've used ChatGPT but want to go further",
              },
              {
                Icon: Sparkles,
                text: 'Anyone curious about what AI can actually DO',
              },
              {
                Icon: Wrench,
                text: 'People who want practical skills, not theory',
              },
              {
                Icon: Shield,
                text: 'No coding required. No technical background needed.',
              },
            ].map((item, i) => (
              <Section key={item.text} delay={i * 0.06}>
                <div className="flex items-start gap-4 p-5 rounded-xl border border-[var(--border)]">
                  <item.Icon className="w-5 h-5 text-[var(--muted-foreground)] mt-0.5 shrink-0" />
                  <p className="text-base leading-relaxed">{item.text}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: THE MOMENT — PARADIGM SHIFT ===== */}
      <section
        id="the-moment"
        className="py-24 px-6 border-t border-[var(--border)]"
      >
        <div className="max-w-4xl mx-auto">
          <Section>
            <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-3">
              The big idea
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Here&apos;s what most people don&apos;t know.
            </h2>
            <p className="text-[var(--muted-foreground)] mb-14 max-w-2xl leading-relaxed text-lg">
              Most people use AI like a search engine: ask a question, get an
              answer. But a new kind of AI doesn&apos;t just <em>talk</em> about
              what to do. It actually <em>does it</em>.
            </p>
          </Section>

          {/* Comparison rows */}
          <div className="space-y-5">
            {[
              {
                oldPrompt: '"How do I organize these files?"',
                oldResult: 'AI gives you a list of instructions to follow',
                newPrompt: '"Organize these files"',
                newResult:
                  'AI actually moves the files, creates folders, and renames everything',
              },
              {
                oldPrompt: '"Write me an essay outline"',
                oldResult: 'AI gives you text inside a chat window',
                newPrompt:
                  '"Draft an essay about climate change and save it"',
                newResult:
                  'AI creates the actual document on your computer, ready to open',
              },
              {
                oldPrompt: '"What\'s wrong with my spreadsheet?"',
                oldResult: 'AI describes the problem and tells you how to fix it',
                newPrompt: '"Fix my spreadsheet"',
                newResult: 'AI finds the error, corrects it, and saves the file',
              },
            ].map((row, i) => (
              <Section key={i} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[var(--border)] rounded-xl overflow-hidden">
                  {/* OLD WAY */}
                  <div className="p-6 md:border-r border-b md:border-b-0 border-[var(--border)] bg-[var(--card)]">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare className="w-4 h-4 text-[var(--muted-foreground)]" />
                      <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                        The old way
                      </span>
                    </div>
                    <p className="font-medium text-[var(--muted-foreground)] mb-2 text-sm">
                      You type: {row.oldPrompt}
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)] opacity-60 leading-relaxed">
                      {row.oldResult}
                    </p>
                  </div>

                  {/* NEW WAY */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-4 h-4 text-[var(--muted-foreground)]" />
                      <span className="text-xs font-medium tracking-widest uppercase text-[var(--foreground)]">
                        The new way
                      </span>
                    </div>
                    <p className="font-medium mb-2 text-sm">
                      You type: {row.newPrompt}
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {row.newResult}
                    </p>
                  </div>
                </div>
              </Section>
            ))}
          </div>

          <Section delay={0.3}>
            <p className="text-center text-[var(--muted-foreground)] mt-12 text-lg leading-relaxed max-w-xl mx-auto">
              This is the shift from <span className="text-[var(--foreground)] font-medium">chatbot</span> to{' '}
              <span className="text-[var(--accent)] font-medium">agent</span>.
              <br />
              And it changes everything about how you work with AI.
            </p>
          </Section>
        </div>
      </section>

      {/* ===== SECTION 3: WHAT YOU'LL LEARN ===== */}
      <section className="py-20 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <Section>
            <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-3">
              What you&apos;ll learn
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
              Six skills that actually matter.
            </h2>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                Icon: Brain,
                title: 'Understand how AI actually thinks',
                desc: 'Tokens, context windows, and why AI sometimes makes things up \u2014 explained so it actually makes sense.',
              },
              {
                Icon: MessageSquare,
                title: 'Give AI instructions that actually work',
                desc: 'A simple formula for writing prompts that get you exactly what you want, the first time.',
              },
              {
                Icon: Shield,
                title: 'Keep your work safe and private',
                desc: 'What to never share with AI, how sandbox modes protect you, and the one rule you always follow.',
              },
              {
                Icon: Wrench,
                title: 'Get AI to organize, write, and research for you',
                desc: 'Practical workflows you can use right now \u2014 file organization, writing, research, data analysis.',
              },
              {
                Icon: Network,
                title: 'Connect AI to other tools and services',
                desc: 'How agents talk to other software, and why that makes them so much more powerful.',
              },
              {
                Icon: Eye,
                title: 'See why agents change everything',
                desc: 'The difference between an AI that answers and an AI that acts \u2014 and why it matters for your future.',
              },
            ].map((item, i) => (
              <Section key={item.title} delay={i * 0.06}>
                <div className="flex items-start gap-4">
                  <item.Icon className="w-5 h-5 text-[var(--muted-foreground)] mt-1 shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: MODULES ===== */}
      <section
        id="modules"
        className="py-20 px-6 border-t border-[var(--border)]"
      >
        <div className="max-w-4xl mx-auto">
          <Section>
            <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-3">
              The Course
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Pick where to start.
            </h2>
            <p className="text-[var(--muted-foreground)] mb-12 max-w-lg">
              Three days, each one self-contained. Start from the beginning or
              jump to the topic that interests you most.
            </p>
          </Section>

          <div className="space-y-6">
            {courseDays.map((day, dayIdx) => (
              <Section key={day.day} delay={dayIdx * 0.1}>
                <div className="border border-[var(--border)] rounded-xl overflow-hidden">
                  {/* Day header */}
                  <Link
                    href={`/day/${day.day}`}
                    className="flex items-center justify-between px-6 py-4 bg-[var(--card)] hover:bg-[var(--muted)] transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--foreground)] text-[var(--background)] text-sm font-semibold">
                        {day.day}
                      </span>
                      <div>
                        <h3 className="font-semibold text-lg">{day.title}</h3>
                        <p className="text-sm text-[var(--muted-foreground)]">
                          {dayTeasers[day.day] || day.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                      <span className="hidden sm:flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        {getTeachingModuleCount(day)} modules
                      </span>
                      <span className="hidden sm:flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {day.duration}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors" />
                    </div>
                  </Link>

                  {/* Module list */}
                  <div className="divide-y divide-[var(--border)]">
                    {day.modules
                      .filter((m) => m.type !== 'break')
                      .map((mod) => (
                        <Link
                          key={mod.id}
                          href={`/day/${day.day}/module/${mod.moduleNumber}`}
                          className="flex items-center gap-4 px-6 py-3 text-sm hover:bg-[var(--muted)] transition-colors group"
                        >
                          <span className="text-base w-6 text-center">
                            {typeIcons[mod.type] || '\u{1F4D6}'}
                          </span>
                          <span className="flex-1 font-medium group-hover:text-[var(--foreground)] text-[var(--muted-foreground)] transition-colors">
                            {mod.title}
                          </span>
                          <span className="text-xs text-[var(--muted-foreground)] hidden sm:block">
                            {mod.timeRange}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded bg-[var(--muted)] text-[var(--muted-foreground)] capitalize">
                            {mod.type}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: TOOLS ===== */}
      <section className="py-20 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <Section>
            <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-3">
              Interactive Tools
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
              Learn by doing.
            </h2>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Workbench',
                desc: 'Explore tokens, context windows, and AI parameters hands-on.',
                href: '/workbench',
                Icon: Beaker,
              },
              {
                title: 'Demos',
                desc: 'Watch AI agents work through guided terminal sessions.',
                href: '/demos',
                Icon: Terminal,
              },
              {
                title: 'Quiz',
                desc: 'Test what you have learned across all topics.',
                href: '/quiz',
                Icon: HelpCircle,
              },
            ].map((item, i) => (
              <Section key={item.title} delay={i * 0.08}>
                <Link
                  href={item.href}
                  className="flex flex-col p-6 rounded-xl border border-[var(--border)] hover:border-[var(--foreground)] transition-colors group h-full"
                >
                  <item.Icon className="w-5 h-5 text-[var(--muted-foreground)] mb-4 group-hover:text-[var(--foreground)] transition-colors" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium mt-4 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                    Open <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: FOOTER ===== */}
      <footer className="py-10 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-[var(--muted-foreground)]">
          <span>AI Agents for Everyone</span>
          <span>Open source</span>
        </div>
      </footer>
    </div>
  );
}
