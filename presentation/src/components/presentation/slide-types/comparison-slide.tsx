"use client";

import { motion } from "framer-motion";
import { X, Check, Minus } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Slide } from "@/data/types";

interface ComparisonSlideProps {
  slide: Slide;
}

const variantStyles = {
  negative: {
    border: "border-[oklch(0.577_0.245_27/0.4)]",
    bg: "bg-[oklch(0.577_0.245_27/0.05)]",
    glow: "hover:shadow-[0_0_30px_oklch(0.577_0.245_27/0.15)]",
    icon: <X className="h-5 w-5 text-[oklch(0.65_0.2_25)]" />,
    iconBg: "bg-[oklch(0.577_0.245_27/0.15)]",
    titleColor: "text-[oklch(0.65_0.2_25)]",
  },
  positive: {
    border: "border-[oklch(0.65_0.2_155/0.4)]",
    bg: "bg-[oklch(0.65_0.2_155/0.05)]",
    glow: "hover:shadow-[0_0_30px_oklch(0.65_0.2_155/0.15)]",
    icon: <Check className="h-5 w-5 text-[oklch(0.7_0.18_155)]" />,
    iconBg: "bg-[oklch(0.65_0.2_155/0.15)]",
    titleColor: "text-[oklch(0.7_0.18_155)]",
  },
  neutral: {
    border: "border-[var(--border)]",
    bg: "bg-[var(--card)]",
    glow: "hover:shadow-[0_0_30px_oklch(0.55_0.25_290/0.12)]",
    icon: <Minus className="h-5 w-5 text-[var(--muted-foreground)]" />,
    iconBg: "bg-[var(--muted)]",
    titleColor: "text-[var(--foreground)]",
  },
};

export function ComparisonSlide({ slide }: ComparisonSlideProps) {
  if (!slide.comparison) return null;

  const { left, right } = slide.comparison;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8 py-12">
      {/* Title */}
      {slide.title && (
        <motion.h2
          className="mb-10 gradient-text text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {slide.title}
        </motion.h2>
      )}

      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left panel */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ComparisonPanel {...left} />
        </motion.div>

        {/* Right panel */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ComparisonPanel {...right} />
        </motion.div>
      </div>
    </div>
  );
}

function ComparisonPanel({
  title,
  content,
  variant,
}: {
  title: string;
  content: string;
  variant: "negative" | "positive" | "neutral";
}) {
  const styles = variantStyles[variant];

  return (
    <Card
      className={`h-full transition-all duration-300 ${styles.border} ${styles.bg} ${styles.glow}`}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${styles.iconBg}`}>
            {styles.icon}
          </div>
          <CardTitle className={styles.titleColor}>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {content.split("\n").map((line, i) => (
            <p
              key={i}
              className="text-[calc(1.15rem*var(--font-scale))] leading-relaxed text-[var(--foreground)]"
            >
              {line}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
