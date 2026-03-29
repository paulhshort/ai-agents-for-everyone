"use client";

import { useCallback, useRef } from "react";

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

interface TouchPoint {
  x: number;
  y: number;
  time: number;
}

const MIN_SWIPE_DISTANCE = 50;
const MAX_SWIPE_TIME = 500;
const MAX_VERTICAL_RATIO = 0.75;

export function useSwipe({ onSwipeLeft, onSwipeRight }: SwipeHandlers) {
  const touchStartRef = useRef<TouchPoint | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent | TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent | TouchEvent) => {
      const touchEnd = e.changedTouches[0];
      if (!touchEnd || !touchStartRef.current) return;

      const deltaX = touchEnd.clientX - touchStartRef.current.x;
      const deltaY = touchEnd.clientY - touchStartRef.current.y;
      const deltaTime = Date.now() - touchStartRef.current.time;

      touchStartRef.current = null;

      // Reject if too slow or too vertical
      if (deltaTime > MAX_SWIPE_TIME) return;
      if (Math.abs(deltaX) < MIN_SWIPE_DISTANCE) return;
      if (Math.abs(deltaY) / Math.abs(deltaX) > MAX_VERTICAL_RATIO) return;

      if (deltaX < 0) {
        onSwipeLeft?.();
      } else {
        onSwipeRight?.();
      }
    },
    [onSwipeLeft, onSwipeRight]
  );

  return {
    onTouchStart,
    onTouchEnd,
    handlers: {
      onTouchStart,
      onTouchEnd,
    },
  };
}
