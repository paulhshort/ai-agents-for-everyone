"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  Plus,
  Minus,
  StickyNote,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SlideControlsProps {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
  onFontIncrease: () => void;
  onFontDecrease: () => void;
  onToggleNotes: () => void;
  showNotes: boolean;
  showControls: boolean;
}

export function SlideControls({
  current,
  total,
  onNext,
  onPrev,
  onToggleFullscreen,
  isFullscreen,
  onFontIncrease,
  onFontDecrease,
  onToggleNotes,
  showNotes,
  showControls,
}: SlideControlsProps) {
  const { theme, setTheme } = useTheme();

  return (
    <AnimatePresence>
      {showControls && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
        >
          <TooltipProvider delayDuration={300}>
            <div className="glass flex items-center gap-1 rounded-2xl px-3 py-2 shadow-2xl shadow-[oklch(0_0_0/0.3)]">
              {/* Prev */}
              <ControlButton
                tooltip="Previous (Left Arrow)"
                onClick={onPrev}
                disabled={current <= 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </ControlButton>

              {/* Slide counter */}
              <div className="flex items-center px-3">
                <span className="text-sm font-semibold tabular-nums text-[var(--foreground)]">
                  {current + 1}
                </span>
                <span className="mx-1.5 text-xs text-[var(--muted-foreground)]">/</span>
                <span className="text-sm tabular-nums text-[var(--muted-foreground)]">
                  {total}
                </span>
              </div>

              {/* Next */}
              <ControlButton
                tooltip="Next (Right Arrow)"
                onClick={onNext}
                disabled={current >= total - 1}
              >
                <ChevronRight className="h-4 w-4" />
              </ControlButton>

              {/* Divider */}
              <div className="mx-1 h-6 w-px bg-[var(--border)]" />

              {/* Fullscreen */}
              <ControlButton
                tooltip={isFullscreen ? "Exit Fullscreen (F)" : "Fullscreen (F)"}
                onClick={onToggleFullscreen}
              >
                {isFullscreen ? (
                  <Minimize className="h-4 w-4" />
                ) : (
                  <Maximize className="h-4 w-4" />
                )}
              </ControlButton>

              {/* Font controls */}
              <ControlButton tooltip="Decrease Font (-)" onClick={onFontDecrease}>
                <Minus className="h-3.5 w-3.5" />
              </ControlButton>
              <ControlButton tooltip="Increase Font (+)" onClick={onFontIncrease}>
                <Plus className="h-3.5 w-3.5" />
              </ControlButton>

              {/* Divider */}
              <div className="mx-1 h-6 w-px bg-[var(--border)]" />

              {/* Theme toggle */}
              <ControlButton
                tooltip={theme === "dark" ? "Light Mode" : "Dark Mode"}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </ControlButton>

              {/* Notes */}
              <ControlButton
                tooltip={showNotes ? "Hide Notes (N)" : "Show Notes (N)"}
                onClick={onToggleNotes}
                active={showNotes}
              >
                <StickyNote className="h-4 w-4" />
              </ControlButton>
            </div>
          </TooltipProvider>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ControlButton({
  tooltip,
  onClick,
  disabled,
  active,
  children,
}: {
  tooltip: string;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClick}
          disabled={disabled}
          className={`h-8 w-8 rounded-lg transition-all duration-200 ${
            active
              ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
              : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          }`}
        >
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}
