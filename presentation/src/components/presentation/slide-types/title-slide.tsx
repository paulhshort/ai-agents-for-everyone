"use client";

import { motion } from "framer-motion";
import type { Slide } from "@/data/types";

interface TitleSlideProps {
  slide: Slide;
}

export function TitleSlide({ slide }: TitleSlideProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--brand-purple)] opacity-[0.07] blur-[120px]" />
        <div className="absolute -right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[var(--brand-blue)] opacity-[0.07] blur-[120px]" />
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[var(--brand-cyan)] opacity-[0.05] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl px-8">
        {/* Main heading */}
        <motion.h1
          className="gradient-text mb-6"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
          }}
        >
          {slide.title}
        </motion.h1>

        {/* Subtitle */}
        {slide.subtitle && (
          <motion.p
            className="text-[calc(1.5rem*var(--font-scale))] font-light leading-relaxed text-[var(--muted-foreground)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
          >
            {slide.subtitle}
          </motion.p>
        )}

        {/* Decorative line */}
        <motion.div
          className="mx-auto mt-8 h-1 w-24 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))",
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
