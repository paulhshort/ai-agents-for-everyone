'use client';

import { useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, useInView } from 'framer-motion';
import { courseDays, getTeachingModuleCount } from '@/data/course-structure';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CanvasWrapper = dynamic(
  () => import('@/components/three/canvas-wrapper').then((m) => m.CanvasWrapper),
  { ssr: false }
);

const NeuralNetwork = dynamic(
  () => import('@/components/three/neural-network').then((m) => m.NeuralNetwork),
  { ssr: false }
);

/* ---------- Typewriter effect ---------- */
function TypewriterText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.3 }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 + i * 0.04, duration: 0.05 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-[var(--primary)] ml-1 align-text-bottom"
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
      />
    </motion.span>
  );
}

/* ---------- Animated section wrapper ---------- */
function AnimatedSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Day card colors ---------- */
const dayGradients = [
  'from-[oklch(0.55_0.25_290)] to-[oklch(0.6_0.2_250)]',
  'from-[oklch(0.6_0.2_250)] to-[oklch(0.7_0.15_200)]',
  'from-[oklch(0.7_0.15_200)] to-[oklch(0.65_0.2_155)]',
];

const dayAccents = [
  'oklch(0.65_0.25_290)',
  'oklch(0.7_0.2_250)',
  'oklch(0.8_0.15_200)',
];

/* ---------- Quick-jump items ---------- */
const quickJumpItems = [
  {
    title: 'Workbench',
    description: 'Experiment with tokens, temperature, and context windows interactively.',
    href: '/workbench',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    gradient: 'from-[oklch(0.55_0.25_290/0.15)] to-[oklch(0.6_0.2_250/0.1)]',
    border: 'oklch(0.55_0.25_290/0.3)',
  },
  {
    title: 'Demos',
    description: 'Watch AI agents in action through guided terminal demonstrations.',
    href: '/demos',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    gradient: 'from-[oklch(0.6_0.2_250/0.15)] to-[oklch(0.7_0.15_200/0.1)]',
    border: 'oklch(0.6_0.2_250/0.3)',
  },
  {
    title: 'Quiz',
    description: 'Test your knowledge with interactive quizzes across multiple categories.',
    href: '/quiz',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    gradient: 'from-[oklch(0.7_0.15_200/0.15)] to-[oklch(0.65_0.2_155/0.1)]',
    border: 'oklch(0.7_0.15_200/0.3)',
  },
];

/* ========== MAIN COMPONENT ========== */
export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Neural network background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <CanvasWrapper>
          <NeuralNetwork />
        </CanvasWrapper>
      </div>

      {/* Animated gradient background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 20%, oklch(0.55 0.25 290 / 0.12), transparent 70%), radial-gradient(ellipse 60% 50% at 70% 60%, oklch(0.6 0.2 250 / 0.08), transparent 60%), radial-gradient(ellipse 50% 40% at 30% 80%, oklch(0.7 0.15 200 / 0.06), transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* ===== HERO SECTION ===== */}
        <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Pre-title badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="purple" className="px-4 py-1.5 text-sm font-medium">
                3-Day Interactive Course
              </Badge>
            </motion.div>

            {/* Main title */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6">
              <span className="gradient-text">AI Agents:</span>
              <br />
              <span className="gradient-text">The Next Level</span>
            </h1>

            {/* Typewriter subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-[var(--muted-foreground)] max-w-3xl mx-auto mb-12 font-light">
              <TypewriterText text="What if AI could DO things, not just talk about things?" />
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              <Button asChild size="lg" className="text-lg px-10 h-14 rounded-2xl shadow-lg hover:shadow-[var(--glow-purple)] transition-shadow">
                <Link href="/day/1">Start Day 1</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 h-14 rounded-2xl">
                <Link href="#days">Explore the Course</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="text-[var(--muted-foreground)]"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* ===== DAY CARDS SECTION ===== */}
        <section id="days" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
                Your 3-Day Journey
              </h2>
              <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                From complete beginner to AI agent power user in three action-packed days.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courseDays.map((day, idx) => (
                <AnimatedSection key={day.day} delay={idx * 0.15}>
                  <Link href={`/day/${day.day}`} className="block group">
                    <Card className="relative overflow-hidden h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                      {/* Gradient accent bar */}
                      <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${dayGradients[idx]}`} />

                      {/* Glowing background on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 50% 0%, ${dayAccents[idx]} / 0.08, transparent 60%)`,
                        }}
                      />

                      <CardHeader className="relative pb-2">
                        {/* Day number badge */}
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${dayGradients[idx]} text-white font-bold text-lg mb-3 shadow-lg`}>
                          {day.day}
                        </div>
                        <CardTitle className="text-2xl font-bold">
                          {day.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="relative space-y-4">
                        <p className="text-[var(--muted-foreground)] leading-relaxed">
                          {day.subtitle}
                        </p>

                        {/* Stats */}
                        <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                          <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>
                            {getTeachingModuleCount(day)} modules
                          </span>
                          <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {day.duration}
                          </span>
                        </div>

                        {/* Module type badges */}
                        <div className="flex flex-wrap gap-1.5">
                          {Array.from(new Set(day.modules.filter(m => m.type !== 'break').map(m => m.type))).map(type => (
                            <Badge key={type} variant="secondary" className="text-xs capitalize">
                              {type}
                            </Badge>
                          ))}
                        </div>

                        {/* Enter button */}
                        <div className="pt-2">
                          <Button variant="ghost" className="group-hover:bg-[var(--accent)] w-full justify-between">
                            Enter Day {day.day}
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== QUICK JUMP SECTION ===== */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
                Quick Access
              </h2>
              <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                Jump directly to interactive tools and activities.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quickJumpItems.map((item, idx) => (
                <AnimatedSection key={item.title} delay={idx * 0.12}>
                  <Link href={item.href} className="block group">
                    <Card className="relative overflow-hidden h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${item.gradient.split(' ')[0].replace('from-[', '').replace(']', '')}, transparent)`,
                        }}
                      />
                      <CardContent className="relative p-8 flex flex-col items-center text-center">
                        <div
                          className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 text-[var(--primary)]"
                          style={{
                            background: `linear-gradient(135deg, oklch(0.55 0.25 290 / 0.1), oklch(0.6 0.2 250 / 0.05))`,
                            border: `1px solid ${item.border}`,
                          }}
                        >
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <Button variant="ghost" size="sm" className="mt-4 group-hover:bg-[var(--accent)]">
                          Open
                          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="py-12 px-6 border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto text-center text-sm text-[var(--muted-foreground)]">
            <p>
              AI Agents: The Next Level — An interactive course teaching the agentic AI paradigm.
            </p>
            <p className="mt-2 opacity-60">
              Built with Next.js, React, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
