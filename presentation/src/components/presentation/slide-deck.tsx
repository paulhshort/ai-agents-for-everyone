"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import type { Slide as SlideType } from "@/data/types";
import { Slide } from "./slide";
import { SlideControls } from "./slide-controls";
import { SlideProgress } from "./slide-progress";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";
import { useFullscreen } from "@/hooks/use-fullscreen";
import { useSwipe } from "@/hooks/use-swipe";
import { useFontSize } from "@/providers/font-size-provider";

interface SlideDeckProps {
  slides: SlideType[];
  moduleTitle: string;
}

export function SlideDeck({ slides, moduleTitle }: SlideDeckProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isFullscreen, toggle: toggleFullscreen } = useFullscreen();
  const { increase: fontIncrease, decrease: fontDecrease } = useFontSize();

  // Current slide from URL
  const slideParam = searchParams.get("slide");
  const currentSlide = Math.min(
    Math.max(0, slideParam ? parseInt(slideParam, 10) - 1 : 0),
    slides.length - 1
  );

  // Direction for slide animation
  const [direction, setDirection] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [showNotes, setShowNotes] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevSlideRef = useRef(currentSlide);

  // Navigate to slide (1-indexed in URL)
  const goToSlide = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, slides.length - 1));
      const params = new URLSearchParams(searchParams.toString());
      params.set("slide", String(clamped + 1));
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams, slides.length]
  );

  const goNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, slides.length, goToSlide]);

  const goPrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  // Track direction from URL changes
  useEffect(() => {
    if (currentSlide > prevSlideRef.current) {
      setDirection(1);
    } else if (currentSlide < prevSlideRef.current) {
      setDirection(-1);
    }
    prevSlideRef.current = currentSlide;
  }, [currentSlide]);

  // Keyboard navigation
  useKeyboardNavigation({
    onNext: goNext,
    onPrev: goPrev,
    onToggleFullscreen: toggleFullscreen,
    onToggleNotes: () => setShowNotes((n) => !n),
    onFontIncrease: fontIncrease,
    onFontDecrease: fontDecrease,
  });

  // Touch/swipe support
  const { handlers: swipeHandlers } = useSwipe({
    onSwipeLeft: goNext,
    onSwipeRight: goPrev,
  });

  // Auto-hide controls
  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const handleMouseMove = () => resetHideTimer();
    window.addEventListener("mousemove", handleMouseMove);
    resetHideTimer();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [resetHideTimer]);

  // Slide transition variants based on direction
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.96,
    }),
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-[var(--background)]"
      {...swipeHandlers}
    >
      {/* Progress bar */}
      <SlideProgress current={currentSlide} total={slides.length} />

      {/* Slide content with direction-aware transitions */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlideData?.id ?? currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          {currentSlideData && (
            <Slide slide={currentSlideData} slideIndex={currentSlide} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Presenter notes panel */}
      <AnimatePresence>
        {showNotes && currentSlideData?.notes && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-20 left-4 right-4 z-40 mx-auto max-w-2xl"
          >
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Presenter Notes
              </p>
              <p className="text-sm leading-relaxed text-[var(--foreground)]">
                {currentSlideData.notes}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls */}
      <SlideControls
        current={currentSlide}
        total={slides.length}
        onNext={goNext}
        onPrev={goPrev}
        onToggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
        onFontIncrease={fontIncrease}
        onFontDecrease={fontDecrease}
        onToggleNotes={() => setShowNotes((n) => !n)}
        showNotes={showNotes}
        showControls={showControls}
      />
    </div>
  );
}
