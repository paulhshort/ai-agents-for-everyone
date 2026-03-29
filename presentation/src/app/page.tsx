'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { courseDays, getTeachingModuleCount } from '@/data/course-structure';
import { ArrowRight, Beaker, Terminal, HelpCircle, BookOpen, Clock, Layers } from 'lucide-react';

/* ---------- Animated section ---------- */
function Section({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Module type icons ---------- */
const typeIcons: Record<string, string> = {
  lecture: '📖',
  activity: '✋',
  lab: '🔬',
  demo: '▶️',
  recap: '📋',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-6">
            Interactive Course
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
            AI Agents
            <span className="block text-[var(--muted-foreground)] font-normal text-3xl sm:text-4xl md:text-5xl mt-2 tracking-tight">
              for <span className="text-[var(--accent)]">Everyone</span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--muted-foreground)] max-w-xl mx-auto mb-10 leading-relaxed">
            Learn how AI can actually do things for you — organize files, write documents, research topics, analyze data — not just answer questions.
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
              href="#modules"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-[var(--border)] font-medium text-base text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors"
            >
              Browse Modules
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ===== WHAT YOU'LL LEARN ===== */}
      <section className="py-20 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <Section>
            <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-3">
              What you will learn
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
              From &quot;what is AI?&quot; to building with agents.
            </h2>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { title: 'How AI actually works', desc: 'Tokens, context windows, and why AI sometimes makes things up — explained simply.' },
              { title: 'The agent paradigm', desc: 'Why AI agents that DO things are fundamentally different from chatbots that just talk.' },
              { title: 'Effective prompting', desc: 'The WHAT-WHERE-HOW-VERIFY formula for getting exactly what you want.' },
              { title: 'Safety and permissions', desc: 'Sandbox modes, approval policies, and what to never share with AI.' },
              { title: 'Practical workflows', desc: 'Organizing files, reviewing writing, researching topics, analyzing data.' },
              { title: 'The AI ecosystem', desc: 'How agents connect to other tools, and where this technology is heading.' },
            ].map((item, i) => (
              <Section key={item.title} delay={i * 0.06}>
                <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{item.desc}</p>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODULES ===== */}
      <section id="modules" className="py-20 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <Section>
            <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-3">
              Modules
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Pick your own path.
            </h2>
            <p className="text-[var(--muted-foreground)] mb-12 max-w-lg">
              Use these as a structured multi-day course, or pick individual modules for a shorter session. Each one stands on its own.
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
                        <p className="text-sm text-[var(--muted-foreground)]">{day.subtitle}</p>
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
                    {day.modules.filter(m => m.type !== 'break').map((mod) => (
                      <Link
                        key={mod.id}
                        href={`/day/${day.day}/module/${mod.moduleNumber}`}
                        className="flex items-center gap-4 px-6 py-3 text-sm hover:bg-[var(--muted)] transition-colors group"
                      >
                        <span className="text-base w-6 text-center">{typeIcons[mod.type] || '📖'}</span>
                        <span className="flex-1 font-medium group-hover:text-[var(--foreground)] text-[var(--muted-foreground)] transition-colors">
                          {mod.title}
                        </span>
                        <span className="text-xs text-[var(--muted-foreground)] hidden sm:block">{mod.timeRange}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-[var(--muted)] text-[var(--muted-foreground)] capitalize">{mod.type}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOOLS ===== */}
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
              { title: 'Workbench', desc: 'Explore tokens, context windows, and AI parameters hands-on.', href: '/workbench', Icon: Beaker },
              { title: 'Demos', desc: 'Watch AI agents work through guided terminal sessions.', href: '/demos', Icon: Terminal },
              { title: 'Quiz', desc: 'Test what you have learned across all topics.', href: '/quiz', Icon: HelpCircle },
            ].map((item, i) => (
              <Section key={item.title} delay={i * 0.08}>
                <Link
                  href={item.href}
                  className="flex flex-col p-6 rounded-xl border border-[var(--border)] hover:border-[var(--foreground)] transition-colors group h-full"
                >
                  <item.Icon className="w-5 h-5 text-[var(--muted-foreground)] mb-4 group-hover:text-[var(--foreground)] transition-colors" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">{item.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium mt-4 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                    Open <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-[var(--muted-foreground)]">
          <span>AI Agents for Everyone</span>
          <span>An open-source interactive course</span>
        </div>
      </footer>
    </div>
  );
}
