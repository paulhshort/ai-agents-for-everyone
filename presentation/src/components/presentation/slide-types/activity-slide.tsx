"use client";

import { motion } from "framer-motion";
import { Clock, Users, User, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ActivityTimer } from "@/components/classroom/activity-timer";
import type { Slide } from "@/data/types";

interface ActivitySlideProps {
  slide: Slide;
}

const activityTypeConfig = {
  individual: {
    icon: User,
    label: "Individual",
    variant: "blue" as const,
  },
  group: {
    icon: Users,
    label: "Group",
    variant: "purple" as const,
  },
  class: {
    icon: GraduationCap,
    label: "Class",
    variant: "cyan" as const,
  },
};

const bulletContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function ActivitySlide({ slide }: ActivitySlideProps) {
  const config = slide.activityConfig;
  if (!config) return null;

  const typeConfig = activityTypeConfig[config.type];
  const TypeIcon = typeConfig.icon;

  const instructions = config.instructions
    .split("\n")
    .filter((line) => line.trim());

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8 py-12">
      <div className="relative z-10 w-full max-w-4xl">
        {/* Header */}
        <motion.div
          className="mb-8 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant={typeConfig.variant} className="gap-1.5 px-3 py-1 text-sm">
            <TypeIcon className="h-3.5 w-3.5" />
            {typeConfig.label} Activity
          </Badge>

          <h2 className="text-center text-[calc(2.5rem*var(--font-scale))] font-bold leading-tight text-[var(--foreground)]">
            {config.title}
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Instructions */}
          <motion.div
            className="flex flex-col"
            variants={bulletContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
              Instructions
            </p>
            <ul className="space-y-3">
              {instructions.map((instruction, i) => (
                <motion.li
                  key={i}
                  variants={bulletVariants}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-[var(--primary-foreground)]">
                    {i + 1}
                  </span>
                  <span className="text-[calc(1.15rem*var(--font-scale))] leading-relaxed text-[var(--foreground)]">
                    {instruction.replace(/^[\d]+\.\s*/, "").replace(/^[-*]\s*/, "")}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Timer */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ActivityTimer duration={config.duration} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
