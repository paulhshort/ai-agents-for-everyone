"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface FontSizeContextValue {
  scale: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
  setScale: (s: number) => void;
}

const FontSizeContext = createContext<FontSizeContextValue>({
  scale: 1,
  increase: () => {},
  decrease: () => {},
  reset: () => {},
  setScale: () => {},
});

const SCALES = [0.75, 0.875, 1, 1.25, 1.5, 1.75, 2];

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", String(scale));
  }, [scale]);

  const increase = useCallback(() => {
    setScale((s) => {
      const idx = SCALES.indexOf(s);
      return idx < SCALES.length - 1 ? SCALES[idx + 1] : s;
    });
  }, []);

  const decrease = useCallback(() => {
    setScale((s) => {
      const idx = SCALES.indexOf(s);
      return idx > 0 ? SCALES[idx - 1] : s;
    });
  }, []);

  const reset = useCallback(() => setScale(1), []);

  return (
    <FontSizeContext.Provider value={{ scale, increase, decrease, reset, setScale }}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  return useContext(FontSizeContext);
}
