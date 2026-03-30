"use client";

import { motion } from "framer-motion";
import type { Slide } from "@/data/types";

interface TitleSlideProps {
  slide: Slide;
}

export function TitleSlide({ slide }: TitleSlideProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center">
      <div className="max-w-4xl px-8">
        {/* Main heading */}
        <motion.h1
          className="mb-4 text-[var(--foreground)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {slide.title}
        </motion.h1>

        {/* Subtitle */}
        {slide.subtitle && (
          <motion.p
            className="text-[calc(1.4rem*var(--font-scale))] font-normal leading-relaxed text-[var(--muted-foreground)] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            {slide.subtitle}
          </motion.p>
        )}

        {/* Subtle accent line */}
        <motion.div
          className="mx-auto mt-8 h-px w-16 bg-[var(--border)]"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
