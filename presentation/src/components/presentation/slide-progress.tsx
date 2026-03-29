"use client";

import { motion } from "framer-motion";

interface SlideProgressProps {
  current: number;
  total: number;
}

export function SlideProgress({ current, total }: SlideProgressProps) {
  const percent = total > 0 ? ((current + 1) / total) * 100 : 0;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-[oklch(0.2_0.02_280)]">
      <motion.div
        className="h-full"
        style={{
          background:
            "linear-gradient(90deg, var(--brand-purple), var(--brand-blue), var(--brand-cyan))",
        }}
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
}
