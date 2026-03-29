"use client";

import { motion } from "framer-motion";
import type { Slide as SlideType } from "@/data/types";
import { TitleSlide } from "./slide-types/title-slide";
import { ContentSlide } from "./slide-types/content-slide";
import { ComparisonSlide } from "./slide-types/comparison-slide";
import { QuizSlide } from "./slide-types/quiz-slide";
import { ActivitySlide } from "./slide-types/activity-slide";
import { DiscussionSlide } from "./slide-types/discussion-slide";
import { DemoSlide } from "./slide-types/demo-slide";
import { DiagramSlide } from "./slide-types/diagram-slide";

interface SlideProps {
  slide: SlideType;
  slideIndex: number;
}

const animationVariants = {
  "fade-in": {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "slide-left": {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
  "slide-right": {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
  "slide-up": {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 },
  },
  "zoom-in": {
    initial: { opacity: 0, scale: 0.85 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  },
  none: {
    initial: {},
    animate: {},
    exit: {},
  },
  typewriter: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "reveal-steps": {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  },
} as const;

function getDefaultAnimation(type: SlideType["type"]): keyof typeof animationVariants {
  switch (type) {
    case "title":
      return "zoom-in";
    case "comparison":
      return "fade-in";
    case "quiz":
      return "slide-up";
    default:
      return "fade-in";
  }
}

export function Slide({ slide, slideIndex }: SlideProps) {
  const animKey = slide.animation ?? getDefaultAnimation(slide.type);
  const variants = animationVariants[animKey] ?? animationVariants["fade-in"];

  return (
    <motion.div
      key={slide.id}
      className="slide-container"
      initial={variants.initial}
      animate={variants.animate}
      exit={variants.exit}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="slide-inner slide-content">
        <SlideRenderer slide={slide} slideIndex={slideIndex} />
      </div>
    </motion.div>
  );
}

function SlideRenderer({ slide, slideIndex }: { slide: SlideType; slideIndex: number }) {
  switch (slide.type) {
    case "title":
      return <TitleSlide slide={slide} />;
    case "content":
    case "code":
      return <ContentSlide slide={slide} />;
    case "comparison":
      return <ComparisonSlide slide={slide} />;
    case "quiz":
      return <QuizSlide slide={slide} slideIndex={slideIndex} />;
    case "activity":
      return <ActivitySlide slide={slide} />;
    case "discussion":
      return <DiscussionSlide slide={slide} />;
    case "demo":
      return <DemoSlide slide={slide} />;
    case "diagram":
    case "threejs":
      return <DiagramSlide slide={slide} />;
    default:
      return <ContentSlide slide={slide} />;
  }
}
