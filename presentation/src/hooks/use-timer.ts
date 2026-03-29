"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface UseTimerOptions {
  duration: number; // seconds
  onComplete?: () => void;
}

export interface UseTimerReturn {
  timeLeft: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  reset: (newDuration?: number) => void;
  percentRemaining: number;
}

export function useTimer({ duration, onComplete }: UseTimerOptions): UseTimerReturn {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const durationRef = useRef(duration);
  const startTimeRef = useRef<number | null>(null);
  const remainingAtPauseRef = useRef(duration);
  const rafRef = useRef<number | null>(null);
  const onCompleteRef = useRef(onComplete);

  onCompleteRef.current = onComplete;

  useEffect(() => {
    durationRef.current = duration;
    setTimeLeft(duration);
    remainingAtPauseRef.current = duration;
  }, [duration]);

  const tick = useCallback(() => {
    if (!startTimeRef.current) return;

    const elapsed = (performance.now() - startTimeRef.current) / 1000;
    const newTimeLeft = Math.max(0, remainingAtPauseRef.current - elapsed);

    setTimeLeft(newTimeLeft);

    if (newTimeLeft <= 0) {
      setIsRunning(false);
      startTimeRef.current = null;
      onCompleteRef.current?.();
      return;
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const start = useCallback(() => {
    if (timeLeft <= 0) return;
    startTimeRef.current = performance.now();
    remainingAtPauseRef.current = timeLeft;
    setIsRunning(true);
  }, [timeLeft]);

  const pause = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (startTimeRef.current) {
      const elapsed = (performance.now() - startTimeRef.current) / 1000;
      remainingAtPauseRef.current = Math.max(0, remainingAtPauseRef.current - elapsed);
    }
    startTimeRef.current = null;
    setIsRunning(false);
  }, []);

  const reset = useCallback(
    (newDuration?: number) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      const d = newDuration ?? durationRef.current;
      durationRef.current = d;
      remainingAtPauseRef.current = d;
      startTimeRef.current = null;
      setTimeLeft(d);
      setIsRunning(false);
    },
    []
  );

  useEffect(() => {
    if (isRunning) {
      rafRef.current = requestAnimationFrame(tick);
    }
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isRunning, tick]);

  const percentRemaining =
    durationRef.current > 0 ? (timeLeft / durationRef.current) * 100 : 0;

  return { timeLeft, isRunning, start, pause, reset, percentRemaining };
}
