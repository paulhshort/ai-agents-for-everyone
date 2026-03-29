'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { quizCategories, getAllQuestions } from '@/data/quizzes';
import { ArrowRight, Shuffle } from 'lucide-react';

/* Difficulty dots: filled = harder */
function DifficultyDots({ questions }: { questions: { difficulty: 'easy' | 'medium' | 'hard' }[] }) {
  const counts = { easy: 0, medium: 0, hard: 0 };
  questions.forEach((q) => counts[q.difficulty]++);
  const total = questions.length;
  if (total === 0) return null;

  // Show 3 dots: first filled if has easy, second if has medium, third if has hard
  const levels: ('easy' | 'medium' | 'hard')[] = ['easy', 'medium', 'hard'];
  return (
    <div className="flex items-center gap-1">
      {levels.map((level) => (
        <span
          key={level}
          className={`w-1.5 h-1.5 rounded-full ${
            counts[level] > 0
              ? 'bg-[var(--foreground)]'
              : 'bg-[var(--border)]'
          }`}
        />
      ))}
    </div>
  );
}

export default function QuizIndexPage() {
  const totalQuestions = getAllQuestions().length;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-2xl font-semibold tracking-tight mb-2">
              Knowledge Check
            </h1>
            <p className="text-[var(--muted-foreground)] mb-6">
              {totalQuestions} questions across {quizCategories.length} categories.
              Test your understanding of AI agents, prompts, and safety.
            </p>

            {/* Random mix link */}
            <Link
              href="/quiz/random"
              className="inline-flex items-center gap-2 text-sm font-medium bg-[var(--foreground)] text-[var(--background)] rounded-lg px-4 py-2.5 hover:opacity-90 transition-opacity"
            >
              <Shuffle className="w-4 h-4" />
              Random Mix
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category list */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="border border-[var(--border)] rounded-lg divide-y divide-[var(--border)]">
            {quizCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.04, duration: 0.3 }}
              >
                <Link
                  href={`/quiz/${category.id}`}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-[var(--muted)]"
                >
                  {/* Category name */}
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-medium truncate">
                      {category.name}
                    </span>
                    <span className="block text-xs text-[var(--muted-foreground)] mt-0.5">
                      {category.description}
                    </span>
                  </span>

                  {/* Question count */}
                  <span className="flex-shrink-0 text-xs text-[var(--muted-foreground)] tabular-nums">
                    {category.questions.length}q
                  </span>

                  {/* Difficulty indicator */}
                  <DifficultyDots questions={category.questions} />

                  {/* Start arrow */}
                  <span className="flex-shrink-0 text-xs font-medium text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                    Start
                  </span>
                  <ArrowRight className="flex-shrink-0 w-4 h-4 text-[var(--muted-foreground)] transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
