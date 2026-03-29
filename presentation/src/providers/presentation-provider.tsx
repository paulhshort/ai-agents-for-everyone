"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface PresentationState {
  currentDay: number;
  currentModule: number;
  currentSlide: number;
  isFullscreen: boolean;
  showPresenterNotes: boolean;
  showControls: boolean;
}

interface PresentationContextValue extends PresentationState {
  setSlide: (day: number, module: number, slide: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  toggleFullscreen: () => void;
  togglePresenterNotes: () => void;
  setShowControls: (show: boolean) => void;
  totalSlides: number;
  setTotalSlides: (n: number) => void;
}

const PresentationContext = createContext<PresentationContextValue | null>(null);

export function PresentationProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PresentationState>({
    currentDay: 1,
    currentModule: 1,
    currentSlide: 0,
    isFullscreen: false,
    showPresenterNotes: false,
    showControls: true,
  });
  const [totalSlides, setTotalSlides] = useState(0);

  const setSlide = useCallback((day: number, module: number, slide: number) => {
    setState((s) => ({ ...s, currentDay: day, currentModule: module, currentSlide: slide }));
  }, []);

  const nextSlide = useCallback(() => {
    setState((s) => ({
      ...s,
      currentSlide: Math.min(s.currentSlide + 1, totalSlides - 1),
    }));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setState((s) => ({
      ...s,
      currentSlide: Math.max(s.currentSlide - 1, 0),
    }));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setState((s) => ({ ...s, isFullscreen: true }));
    } else {
      document.exitFullscreen();
      setState((s) => ({ ...s, isFullscreen: false }));
    }
  }, []);

  const togglePresenterNotes = useCallback(() => {
    setState((s) => ({ ...s, showPresenterNotes: !s.showPresenterNotes }));
  }, []);

  const setShowControls = useCallback((show: boolean) => {
    setState((s) => ({ ...s, showControls: show }));
  }, []);

  return (
    <PresentationContext.Provider
      value={{
        ...state,
        setSlide,
        nextSlide,
        prevSlide,
        toggleFullscreen,
        togglePresenterNotes,
        setShowControls,
        totalSlides,
        setTotalSlides,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
}

export function usePresentation() {
  const ctx = useContext(PresentationContext);
  if (!ctx) throw new Error("usePresentation must be used within PresentationProvider");
  return ctx;
}
