"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Slide } from "@/data/types";

interface DiscussionSlideProps {
  slide: Slide;
}

export function DiscussionSlide({ slide }: DiscussionSlideProps) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-8 py-12">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 animate-gradient opacity-30"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.25 290 / 0.15), oklch(0.6 0.2 250 / 0.1), oklch(0.7 0.15 200 / 0.15), oklch(0.55 0.25 290 / 0.1))",
            backgroundSize: "400% 400%",
          }}
        />
        {/* Floating orbs */}
        <div className="absolute left-1/4 top-1/3 h-[350px] w-[350px] rounded-full bg-[var(--brand-purple)] opacity-[0.06] blur-[100px] animate-float" />
        <div
          className="absolute right-1/4 bottom-1/3 h-[280px] w-[280px] rounded-full bg-[var(--brand-cyan)] opacity-[0.06] blur-[80px] animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex justify-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[oklch(0.55_0.25_290/0.15)] shadow-[0_0_30px_oklch(0.55_0.25_290/0.2)]">
            <MessageCircle className="h-8 w-8 text-[var(--brand-purple)]" />
          </div>
        </motion.div>

        {/* Category badge */}
        {slide.subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <Badge variant="purple" className="px-3 py-1 text-sm">
              {slide.subtitle}
            </Badge>
          </motion.div>
        )}

        {/* Question */}
        <motion.h1
          className="text-[calc(3rem*var(--font-scale))] font-bold leading-[1.15] tracking-tight text-[var(--foreground)] md:text-[calc(3.5rem*var(--font-scale))]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {slide.title}
        </motion.h1>

        {/* Optional content below */}
        {slide.content && (
          <motion.p
            className="mt-6 text-[calc(1.25rem*var(--font-scale))] leading-relaxed text-[var(--muted-foreground)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {slide.content}
          </motion.p>
        )}

        {/* Decorative */}
        <motion.div
          className="mx-auto mt-10 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
          <span className="text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
            Discuss
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
