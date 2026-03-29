'use client';

import { use, useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getQuizCategory, getRandomMix, type QuizQuestion } from '@/data/quizzes';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

/* ---------- Confetti particles ---------- */
function ConfettiParticle({ delay }: { delay: number }) {
  const colors = [
    'oklch(0.55 0.25 290)',
    'oklch(0.6 0.2 250)',
    'oklch(0.7 0.15 200)',
    'oklch(0.65 0.2 155)',
    'oklch(0.75 0.15 80)',
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const x = Math.random() * 100;
  const rotation = Math.random() * 360;
  const size = 4 + Math.random() * 8;

  return (
    <motion.div
      className="absolute rounded-sm pointer-events-none"
      style={{
        left: `${x}%`,
        top: '-5%',
        width: size,
        height: size * 0.6,
        backgroundColor: color,
      }}
      initial={{ y: -20, rotate: 0, opacity: 1 }}
      animate={{
        y: '120vh',
        rotate: rotation + 720,
        opacity: [1, 1, 0],
        x: (Math.random() - 0.5) * 200,
      }}
      transition={{
        duration: 2 + Math.random() * 2,
        delay,
        ease: 'easeOut',
      }}
    />
  );
}

function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: 60 }, (_, i) => (
        <ConfettiParticle key={i} delay={i * 0.03} />
      ))}
    </div>
  );
}

/* ---------- Answer option key colors ---------- */
const optionKeyColors = [
  'oklch(0.55 0.25 290)',
  'oklch(0.6 0.2 250)',
  'oklch(0.7 0.15 200)',
  'oklch(0.65 0.2 155)',
];

/* ---------- Rating helper ---------- */
function getRating(percentage: number): { label: string; emoji: string; message: string } {
  if (percentage >= 90) return { label: 'AI Expert', emoji: '', message: 'Outstanding! You have mastered the material.' };
  if (percentage >= 70) return { label: 'Power User', emoji: '', message: 'Great job! You have a solid understanding.' };
  if (percentage >= 50) return { label: 'Getting There', emoji: '', message: 'Good effort! Review the topics you missed.' };
  return { label: 'Keep Learning', emoji: '', message: 'No worries! Learning takes time. Try again!' };
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
  const [showConfetti, setShowConfetti] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const confettiTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentQuestion = questions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion?.answer;
  const progress = ((currentIndex + (selectedAnswer ? 1 : 0)) / questions.length) * 100;

  // Cleanup confetti timeout
  useEffect(() => {
    return () => {
      if (confettiTimeoutRef.current) clearTimeout(confettiTimeoutRef.current);
    };
  }, []);

  const handleSelectAnswer = useCallback(
    (key: string) => {
      if (selectedAnswer) return; // Already answered
      setSelectedAnswer(key);
      setShowExplanation(true);

      const correct = key === currentQuestion.answer;
      if (correct) {
        setScore((s) => s + 1);
        setShowConfetti(true);
        confettiTimeoutRef.current = setTimeout(() => setShowConfetti(false), 3000);
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

  // Results screen
  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    const rating = getRating(percentage);

    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 40%, oklch(0.55 0.25 290 / 0.08), transparent 70%)',
          }}
        />

        {percentage >= 70 && <Confetti />}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-lg"
        >
          <Card className="overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-[var(--brand-purple)] via-[var(--brand-blue)] to-[var(--brand-cyan)]" />
            <CardContent className="p-8 sm:p-12 text-center">
              {/* Score circle */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60" cy="60" r="52"
                    fill="none"
                    stroke="var(--secondary)"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="60" cy="60" r="52"
                    fill="none"
                    stroke="url(#scoreGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 52}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - percentage / 100) }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--brand-purple)" />
                      <stop offset="50%" stopColor="var(--brand-blue)" />
                      <stop offset="100%" stopColor="var(--brand-cyan)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span
                    className="text-3xl font-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {percentage}%
                  </motion.span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-1">{rating.label}</h2>
              <p className="text-[var(--muted-foreground)] mb-6">{rating.message}</p>

              <div className="flex items-center justify-center gap-6 text-sm text-[var(--muted-foreground)] mb-8">
                <span>
                  <span className="font-bold text-[var(--foreground)]">{score}</span> correct
                </span>
                <span>
                  <span className="font-bold text-[var(--foreground)]">{questions.length - score}</span> incorrect
                </span>
                <span>
                  <span className="font-bold text-[var(--foreground)]">{questions.length}</span> total
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button onClick={handleRestart} size="lg" className="rounded-xl">
                  Try Again
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link href="/quiz">All Quizzes</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Quiz question screen
  return (
    <div className="min-h-screen flex flex-col">
      {/* Confetti on correct answer */}
      {showConfetti && <Confetti />}

      {/* Top bar */}
      <div className="sticky top-0 z-40 glass">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            href="/quiz"
            className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            Exit
          </Link>

          <div className="flex-1 mx-8">
            <Progress value={progress} className="h-2" />
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="text-xs">
              {currentIndex + 1} / {questions.length}
            </Badge>
            <Badge variant="purple" className="text-xs">
              Score: {score}
            </Badge>
          </div>
        </div>
      </div>

      {/* Question area */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              {/* Category label */}
              <p className="text-sm text-[var(--muted-foreground)] mb-3 text-center uppercase tracking-wider font-medium">
                {categoryName}
              </p>

              {/* Question */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 leading-snug">
                {currentQuestion.question}
              </h2>

              {/* Options grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {currentQuestion.options.map((option, optIdx) => {
                  const isSelected = selectedAnswer === option.key;
                  const isCorrectOption = option.key === currentQuestion.answer;
                  const hasAnswered = selectedAnswer !== null;

                  let borderColor = 'var(--border)';
                  let bgColor = 'transparent';
                  let textColor = 'var(--foreground)';

                  if (hasAnswered) {
                    if (isCorrectOption) {
                      borderColor = 'oklch(0.65 0.2 155)';
                      bgColor = 'oklch(0.65 0.2 155 / 0.1)';
                    } else if (isSelected && !isCorrectOption) {
                      borderColor = 'oklch(0.6 0.2 10)';
                      bgColor = 'oklch(0.6 0.2 10 / 0.1)';
                    }
                  }

                  return (
                    <motion.button
                      key={option.key}
                      onClick={() => handleSelectAnswer(option.key)}
                      disabled={hasAnswered}
                      className="relative p-5 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer disabled:cursor-default"
                      style={{ borderColor, backgroundColor: bgColor, color: textColor }}
                      whileHover={!hasAnswered ? { scale: 1.02 } : undefined}
                      whileTap={!hasAnswered ? { scale: 0.98 } : undefined}
                      animate={
                        isSelected && !isCorrectOption
                          ? { x: [0, -8, 8, -4, 4, 0] }
                          : undefined
                      }
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm text-white"
                          style={{ backgroundColor: optionKeyColors[optIdx] }}
                        >
                          {option.key}
                        </span>
                        <span className="text-base sm:text-lg font-medium leading-snug pt-0.5">
                          {option.text}
                        </span>
                      </div>

                      {/* Correct/incorrect indicator */}
                      {hasAnswered && isCorrectOption && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-3 right-3"
                        >
                          <svg className="w-6 h-6 text-[oklch(0.65_0.2_155)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                      {hasAnswered && isSelected && !isCorrectOption && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-3 right-3"
                        >
                          <svg className="w-6 h-6 text-[oklch(0.6_0.2_10)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation accordion */}
              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${isCorrect ? 'bg-[oklch(0.65_0.2_155/0.2)]' : 'bg-[oklch(0.6_0.2_10/0.2)]'}`}>
                            {isCorrect ? (
                              <svg className="w-5 h-5 text-[oklch(0.65_0.2_155)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-[oklch(0.6_0.2_10)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <p className={`font-semibold mb-1 ${isCorrect ? 'text-[oklch(0.65_0.2_155)]' : 'text-[oklch(0.6_0.2_10)]'}`}>
                              {isCorrect ? 'Correct!' : 'Not quite...'}
                            </p>
                            <p className="text-[var(--muted-foreground)] leading-relaxed">
                              {currentQuestion.explanation}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex justify-center">
                      <Button onClick={handleNext} size="lg" className="rounded-xl px-8">
                        {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Button>
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
