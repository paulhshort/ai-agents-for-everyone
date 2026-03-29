'use client';

import { use, useState, useCallback } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getQuizCategory, getRandomMix, type QuizQuestion } from '@/data/quizzes';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Check, X, RotateCcw } from 'lucide-react';

/* ---------- Rating helper ---------- */
function getRating(percentage: number): { label: string; message: string } {
  if (percentage >= 90) return { label: 'Excellent', message: 'Outstanding. You have mastered this material.' };
  if (percentage >= 70) return { label: 'Well Done', message: 'Solid understanding. Review what you missed.' };
  if (percentage >= 50) return { label: 'Getting There', message: 'Good effort. Try again to improve your score.' };
  return { label: 'Keep Learning', message: 'No worries. Learning takes time. Try again.' };
}

/* ========== MAIN COMPONENT ========== */
export default function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // Get questions based on category or random mix
  const [questions] = useState<QuizQuestion[]>(() => {
    if (id === 'random') {
      return getRandomMix(10);
    }
    const category = getQuizCategory(id);
    return category?.questions ?? [];
  });

  const categoryName = id === 'random' ? 'Random Mix' : (getQuizCategory(id)?.name ?? '');

  if (questions.length === 0) {
    notFound();
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion?.answer;
  const progress = ((currentIndex + (selectedAnswer ? 1 : 0)) / questions.length) * 100;

  const handleSelectAnswer = useCallback(
    (key: string) => {
      if (selectedAnswer) return;
      setSelectedAnswer(key);
      setShowExplanation(true);

      if (key === currentQuestion.answer) {
        setScore((s) => s + 1);
      }
      setAnswers((prev) => [...prev, key]);
    },
    [selectedAnswer, currentQuestion]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  }, [currentIndex, questions.length]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers([]);
    setIsFinished(false);
  }, []);

  // ===== Results screen =====
  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    const rating = getRating(percentage);

    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md text-center"
        >
          {/* Score */}
          <p className="text-6xl font-semibold tracking-tight mb-2">
            {percentage}%
          </p>
          <p className="text-lg font-medium mb-1">{rating.label}</p>
          <p className="text-sm text-[var(--muted-foreground)] mb-8">{rating.message}</p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 text-sm text-[var(--muted-foreground)] mb-10">
            <span>
              <span className="font-semibold text-[var(--foreground)]">{score}</span> correct
            </span>
            <span>
              <span className="font-semibold text-[var(--foreground)]">{questions.length - score}</span> incorrect
            </span>
            <span>
              <span className="font-semibold text-[var(--foreground)]">{questions.length}</span> total
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 text-sm font-medium bg-[var(--foreground)] text-[var(--background)] rounded-lg px-5 py-2.5 hover:opacity-90 transition-opacity"
            >
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 text-sm font-medium border border-[var(--border)] rounded-lg px-5 py-2.5 hover:border-[var(--foreground)] transition-colors"
            >
              All Quizzes
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // ===== Quiz question screen =====
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-[var(--background)] border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            href="/quiz"
            className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            Exit
          </Link>

          <div className="flex-1 mx-8">
            <Progress value={progress} className="h-1.5" />
          </div>

          <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)] tabular-nums">
            <span>{currentIndex + 1}/{questions.length}</span>
            <span className="font-medium text-[var(--foreground)]">{score} pts</span>
          </div>
        </div>
      </div>

      {/* Question area */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category label */}
              <p className="text-xs text-[var(--muted-foreground)] mb-3 text-center uppercase tracking-widest font-medium">
                {categoryName}
              </p>

              {/* Question */}
              <h2 className="text-xl sm:text-2xl font-semibold text-center mb-8 leading-snug tracking-tight">
                {currentQuestion.question}
              </h2>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedAnswer === option.key;
                  const isCorrectOption = option.key === currentQuestion.answer;
                  const hasAnswered = selectedAnswer !== null;

                  let borderClass = 'border-[var(--border)]';
                  let bgClass = 'bg-transparent';

                  if (hasAnswered) {
                    if (isCorrectOption) {
                      borderClass = 'border-green-500';
                      bgClass = 'bg-green-500/5';
                    } else if (isSelected && !isCorrectOption) {
                      borderClass = 'border-red-500';
                      bgClass = 'bg-red-500/5';
                    }
                  }

                  return (
                    <button
                      key={option.key}
                      onClick={() => handleSelectAnswer(option.key)}
                      disabled={hasAnswered}
                      className={`relative p-4 rounded-lg border text-left transition-colors ${borderClass} ${bgClass} ${
                        !hasAnswered
                          ? 'hover:border-[var(--foreground)] cursor-pointer'
                          : 'cursor-default'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded border border-[var(--border)] flex items-center justify-center text-xs font-medium text-[var(--muted-foreground)]">
                          {option.key}
                        </span>
                        <span className="text-sm font-medium leading-snug pt-0.5">
                          {option.text}
                        </span>
                      </div>

                      {/* Correct/incorrect indicator */}
                      {hasAnswered && isCorrectOption && (
                        <Check className="absolute top-3 right-3 w-4 h-4 text-green-500" />
                      )}
                      {hasAnswered && isSelected && !isCorrectOption && (
                        <X className="absolute top-3 right-3 w-4 h-4 text-red-500" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border border-[var(--border)] rounded-lg p-4 mb-6">
                      <p className={`text-sm font-semibold mb-1 ${
                        isCorrect ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </p>
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                        {currentQuestion.explanation}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <button
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 text-sm font-medium bg-[var(--foreground)] text-[var(--background)] rounded-lg px-5 py-2.5 hover:opacity-90 transition-opacity"
                      >
                        {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
