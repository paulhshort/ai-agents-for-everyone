"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContextMeterProps {
  used: number;
  total: number;
  onCompact?: () => void;
  className?: string;
}

type Zone = "green" | "yellow" | "orange" | "red";

function getZone(pct: number): Zone {
  if (pct < 50) return "green";
  if (pct < 70) return "yellow";
  if (pct < 85) return "orange";
  return "red";
}

const ZONE_CONFIG: Record<
  Zone,
  { color: string; bg: string; label: string; icon: React.ReactNode; glow: string }
> = {
  green: {
    color: "oklch(0.65 0.2 155)",
    bg: "oklch(0.65 0.2 155 / 0.2)",
    label: "Plenty of room",
    icon: <CheckCircle className="w-4 h-4" />,
    glow: "none",
  },
  yellow: {
    color: "oklch(0.78 0.17 95)",
    bg: "oklch(0.78 0.17 95 / 0.2)",
    label: "Getting full",
    icon: <AlertCircle className="w-4 h-4" />,
    glow: "none",
  },
  orange: {
    color: "oklch(0.7 0.18 55)",
    bg: "oklch(0.7 0.18 55 / 0.2)",
    label: "Compact soon",
    icon: <AlertTriangle className="w-4 h-4" />,
    glow: "none",
  },
  red: {
    color: "oklch(0.63 0.24 25)",
    bg: "oklch(0.63 0.24 25 / 0.2)",
    label: "Compact NOW",
    icon: <XCircle className="w-4 h-4" />,
    glow: "0 0 20px oklch(0.63 0.24 25 / 0.4)",
  },
};

export function ContextMeter({
  used,
  total,
  onCompact,
  className,
}: ContextMeterProps) {
  const percentage = total > 0 ? Math.min((used / total) * 100, 100) : 0;
  const zone = getZone(percentage);
  const config = ZONE_CONFIG[zone];

  return (
    <div className={cn("space-y-3", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[var(--foreground)]">
          Context Window
        </h3>
        <div
          className="flex items-center gap-1.5 text-xs font-medium"
          style={{ color: config.color }}
        >
          {config.icon}
          {config.label}
        </div>
      </div>

      {/* Bar */}
      <div className="relative">
        <div className="relative h-6 rounded-full overflow-hidden bg-[var(--secondary)]">
          {/* Zone markers */}
          <div className="absolute inset-0 flex">
            <div className="w-[50%] border-r border-[oklch(0.5_0_0/0.2)]" />
            <div className="w-[20%] border-r border-[oklch(0.5_0_0/0.2)]" />
            <div className="w-[15%] border-r border-[oklch(0.5_0_0/0.2)]" />
            <div className="w-[15%]" />
          </div>

          {/* Fill */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${percentage}%`,
              boxShadow: config.glow,
            }}
            transition={{
              width: { type: "spring", bounce: 0.15, duration: 0.8 },
              boxShadow: { duration: 0.3 },
            }}
            style={{
              background:
                zone === "green"
                  ? `linear-gradient(90deg, oklch(0.65 0.2 155), oklch(0.7 0.18 155))`
                  : zone === "yellow"
                  ? `linear-gradient(90deg, oklch(0.65 0.2 155), oklch(0.78 0.17 95))`
                  : zone === "orange"
                  ? `linear-gradient(90deg, oklch(0.65 0.2 155), oklch(0.78 0.17 95), oklch(0.7 0.18 55))`
                  : `linear-gradient(90deg, oklch(0.65 0.2 155), oklch(0.78 0.17 95), oklch(0.7 0.18 55), oklch(0.63 0.24 25))`,
            }}
          >
            {/* Pulse effect in red zone */}
            {zone === "red" && (
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: "oklch(0.63 0.24 25 / 0.4)",
                }}
              />
            )}
          </motion.div>

          {/* Percentage label on bar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              {percentage.toFixed(0)}%
            </span>
          </div>
        </div>

        {/* Zone labels under bar */}
        <div className="flex mt-1 text-[9px] text-[var(--muted-foreground)]">
          <div className="w-[50%] text-center">Safe</div>
          <div className="w-[20%] text-center">Caution</div>
          <div className="w-[15%] text-center">Warning</div>
          <div className="w-[15%] text-center">Critical</div>
        </div>
      </div>

      {/* Token counts */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-[var(--muted-foreground)]">
          <span className="text-[var(--foreground)] font-semibold font-mono">
            {used.toLocaleString()}
          </span>
          {" / "}
          <span className="font-mono">{total.toLocaleString()}</span>
          {" tokens"}
        </div>

        {onCompact && zone !== "green" && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCompact}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer",
              zone === "red"
                ? "bg-[oklch(0.63_0.24_25/0.15)] border-[oklch(0.63_0.24_25/0.4)] text-[oklch(0.75_0.18_25)] hover:bg-[oklch(0.63_0.24_25/0.25)] animate-pulse"
                : "bg-[oklch(0.75_0.15_80/0.15)] border-[oklch(0.75_0.15_80/0.3)] text-[oklch(0.8_0.12_80)] hover:bg-[oklch(0.75_0.15_80/0.25)]"
            )}
          >
            /compact
          </motion.button>
        )}
      </div>
    </div>
  );
}
