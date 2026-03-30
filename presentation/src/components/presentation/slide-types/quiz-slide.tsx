"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Slide } from "@/data/types";

interface QuizSlideProps {
  slide: Slide;
  slideIndex: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  angle: number;
  speed: number;
  life: number;
}

const PARTICLE_COLORS = [
  "oklch(0.75 0.2 290)",
  "oklch(0.7 0.15 250)",
  "oklch(0.8 0.12 200)",
  "oklch(0.75 0.18 155)",
  "oklch(0.8 0.15 80)",
];

export function QuizSlide({ slide, slideIndex }: QuizSlideProps) {
  const quiz = slide.quizQuestion;
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  // Reset state when slide changes
  useEffect(() => {
    setSelected(null);
    setRevealed(false);
    setParticles([]);
  }, [slideIndex]);

  const spawnParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: 50 + Math.random() * (window.innerWidth - 100),
        y: window.innerHeight / 2,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        size: 4 + Math.random() * 8,
        angle: (Math.PI * 2 * i) / 40 + (Math.random() - 0.5) * 0.5,
        speed: 3 + Math.random() * 6,
        life: 1,
      });
    }
    setParticles(newParticles);
  }, []);

  // Particle animation
  useEffect(() => {
    if (particles.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let currentParticles = [...particles];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      currentParticles = currentParticles.map((p) => {
        const newP = { ...p };
        newP.x += Math.cos(newP.angle) * newP.speed;
        newP.y += Math.sin(newP.angle) * newP.speed - 1; // slight upward drift
        newP.speed *= 0.97;
        newP.life -= 0.015;

        if (newP.life > 0) {
          alive = true;
          ctx.beginPath();
          ctx.arc(newP.x, newP.y, newP.size * newP.life, 0, Math.PI * 2);
          ctx.fillStyle = newP.color;
          ctx.globalAlpha = newP.life;
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        return newP;
      });

      if (alive) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setParticles([]);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [particles]);

  if (!quiz) return null;

  const handleSelect = (key: string) => {
    if (revealed) return;
    setSelected(key);
    setRevealed(true);
    if (key === quiz.answer) {
      spawnParticles();
    }
  };

  const isCorrect = selected === quiz.answer;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8 py-12">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50"
        style={{ width: "100vw", height: "100vh" }}
      />

      <div className="w-full max-w-3xl">
        {/* Question */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
            Knowledge Check
          </p>
          <h2 className="text-[calc(2rem*var(--font-scale))] font-bold leading-tight text-[var(--foreground)]">
            {quiz.question}
          </h2>
        </motion.div>

        {/* Options */}
        <div className="grid gap-4">
          {quiz.options.map((option, i) => {
            let optionStyle = "";
            if (revealed) {
              if (option.key === quiz.answer) {
                optionStyle =
                  "border-[oklch(0.65_0.2_155)] bg-[oklch(0.65_0.2_155/0.1)]";
              } else if (option.key === selected) {
                optionStyle =
                  "border-[oklch(0.577_0.245_27)] bg-[oklch(0.577_0.245_27/0.1)]";
              } else {
                optionStyle = "opacity-50";
              }
            }

            return (
              <motion.div
                key={option.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
              >
                <Button
                  variant="outline"
                  className={`w-full justify-start gap-4 rounded-xl border-2 px-6 py-5 text-left transition-all duration-300 h-auto ${
                    optionStyle ||
                    "hover:border-[var(--primary)] hover:bg-[var(--accent)]"
                  }`}
                  onClick={() => handleSelect(option.key)}
                  disabled={revealed}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--muted)] text-sm font-bold">
                    {option.key}
                  </span>
                  <span className="text-[calc(1.1rem*var(--font-scale))]">
                    {option.text}
                  </span>
                  {revealed && option.key === quiz.answer && (
                    <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-[oklch(0.7_0.18_155)]" />
                  )}
                  {revealed &&
                    option.key === selected &&
                    option.key !== quiz.answer && (
                      <XCircle className="ml-auto h-5 w-5 shrink-0 text-[oklch(0.65_0.2_25)]" />
                    )}
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Explanation */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-6"
            >
              <Accordion type="single" defaultValue="explanation" collapsible>
                <AccordionItem value="explanation" className="border-0">
                  <AccordionTrigger className="rounded-xl bg-[var(--muted)] px-5 py-3 hover:no-underline">
                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-[oklch(0.7_0.18_155)]" />
                      ) : (
                        <XCircle className="h-5 w-5 text-[oklch(0.65_0.2_25)]" />
                      )}
                      <span className="font-semibold">
                        {isCorrect ? "Correct!" : "Not quite..."}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pt-3">
                    <p className="text-[calc(1.1rem*var(--font-scale))] leading-relaxed text-[var(--muted-foreground)]">
                      {quiz.explanation}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
