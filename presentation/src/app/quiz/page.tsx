'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { quizCategories, getAllQuestions } from '@/data/quizzes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

/* ---------- Category icon mapping ---------- */
const categoryIcons: Record<string, React.ReactNode> = {
  Zap: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  Bot: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  ),
  Terminal: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  Brain: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
  Shield: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
};

/* ---------- Category gradient colors ---------- */
const categoryGradients = [
  { from: 'oklch(0.55 0.25 290)', to: 'oklch(0.6 0.2 250)' },
  { from: 'oklch(0.6 0.2 250)', to: 'oklch(0.7 0.15 200)' },
  { from: 'oklch(0.7 0.15 200)', to: 'oklch(0.65 0.2 155)' },
  { from: 'oklch(0.65 0.2 155)', to: 'oklch(0.75 0.15 80)' },
  { from: 'oklch(0.55 0.25 290)', to: 'oklch(0.7 0.15 200)' },
];

const difficultyColors: Record<string, string> = {
  easy: 'oklch(0.65 0.2 155)',
  medium: 'oklch(0.75 0.15 80)',
  hard: 'oklch(0.6 0.2 10)',
};

export default function QuizIndexPage() {
  const totalQuestions = getAllQuestions().length;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 30%, oklch(0.7 0.15 200 / 0.1), transparent 70%)',
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Course
            </Link>

            <Badge variant="cyan" className="mb-4 text-sm px-4 py-1.5">
              {totalQuestions} Questions Across {quizCategories.length} Categories
            </Badge>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 gradient-text">
              Knowledge Check
            </h1>

            <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mb-8">
              Test your understanding of AI agents, prompt engineering, safety, and more.
            </p>

            {/* Random mix button */}
            <Button asChild size="lg" className="rounded-2xl px-8 h-14 text-base">
              <Link href="/quiz/random">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                </svg>
                Random Mix (All Categories)
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Category cards */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizCategories.map((category, idx) => {
            const gradient = categoryGradients[idx % categoryGradients.length];
            const icon = categoryIcons[category.icon] ?? categoryIcons.Zap;

            // Difficulty distribution
            const difficulties = { easy: 0, medium: 0, hard: 0 };
            category.questions.forEach((q) => {
              difficulties[q.difficulty]++;
            });

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Link href={`/quiz/${category.id}`} className="block group h-full">
                  <Card className="relative overflow-hidden h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                    {/* Gradient bar */}
                    <div
                      className="absolute top-0 inset-x-0 h-1"
                      style={{
                        background: `linear-gradient(to right, ${gradient.from}, ${gradient.to})`,
                      }}
                    />

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${gradient.from} / 0.08, transparent 60%)`,
                      }}
                    />

                    <CardHeader className="relative pb-3">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 text-white"
                        style={{
                          background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                        }}
                      >
                        {icon}
                      </div>
                      <CardTitle className="text-xl group-hover:text-[var(--primary)] transition-colors">
                        {category.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative space-y-4">
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                        {category.description}
                      </p>

                      {/* Question count + difficulty */}
                      <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                        <span>{category.questions.length} questions</span>
                        <div className="flex items-center gap-2">
                          {Object.entries(difficulties).map(([level, count]) =>
                            count > 0 ? (
                              <span
                                key={level}
                                className="flex items-center gap-1"
                              >
                                <span
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: difficultyColors[level] }}
                                />
                                {count} {level}
                              </span>
                            ) : null
                          )}
                        </div>
                      </div>

                      <Button variant="ghost" className="w-full justify-between group-hover:bg-[var(--accent)]">
                        Start Quiz
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
