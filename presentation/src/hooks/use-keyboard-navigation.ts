"use client";

import { useCallback, useEffect } from "react";

export interface KeyboardNavigationCallbacks {
  onNext?: () => void;
  onPrev?: () => void;
  onToggleFullscreen?: () => void;
  onToggleNotes?: () => void;
  onFontIncrease?: () => void;
  onFontDecrease?: () => void;
}

export function useKeyboardNavigation({
  onNext,
  onPrev,
  onToggleFullscreen,
  onToggleNotes,
  onFontIncrease,
  onFontDecrease,
}: KeyboardNavigationCallbacks) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Ignore when typing in inputs
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.isContentEditable
      ) {
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          e.preventDefault();
          onNext?.();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          onPrev?.();
          break;
        case "Escape":
          e.preventDefault();
          if (document.fullscreenElement) {
            onToggleFullscreen?.();
          }
          break;
        case "f":
        case "F":
          if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            onToggleFullscreen?.();
          }
          break;
        case "n":
        case "N":
          if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            onToggleNotes?.();
          }
          break;
        case "+":
        case "=":
          e.preventDefault();
          onFontIncrease?.();
          break;
        case "-":
        case "_":
          e.preventDefault();
          onFontDecrease?.();
          break;
      }
    },
    [onNext, onPrev, onToggleFullscreen, onToggleNotes, onFontIncrease, onFontDecrease]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
}
