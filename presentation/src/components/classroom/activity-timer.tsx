"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTimer } from "@/hooks/use-timer";

interface ActivityTimerProps {
  duration?: number; // seconds
  label?: string;
  onComplete?: () => void;
}

const PRESETS = [
  { label: "2m", seconds: 120 },
  { label: "5m", seconds: 300 },
  { label: "10m", seconds: 600 },
  { label: "15m", seconds: 900 },
];

function getTimerColor(percent: number): string {
  if (percent > 60) return "oklch(0.65 0.2 155)"; // green
  if (percent > 25) return "oklch(0.75 0.15 80)"; // amber/yellow
  return "oklch(0.65 0.2 25)"; // red
}

function formatTime(seconds: number): { minutes: string; secs: string } {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return {
    minutes: String(m).padStart(2, "0"),
    secs: String(s).padStart(2, "0"),
  };
}

export function ActivityTimer({
  duration = 300,
  label,
  onComplete,
}: ActivityTimerProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const { timeLeft, isRunning, start, pause, reset, percentRemaining } =
    useTimer({ duration: currentDuration, onComplete });

  const timerColor = getTimerColor(percentRemaining);
  const { minutes, secs } = formatTime(timeLeft);

  const handlePreset = useCallback(
    (seconds: number) => {
      setCurrentDuration(seconds);
      reset(seconds);
    },
    [reset]
  );

  // SVG ring parameters
  const size = 220;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentRemaining / 100);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Label */}
      {label && (
        <p className="text-sm font-medium uppercase tracking-widest text-[var(--muted-foreground)]">
          {label}
        </p>
      )}

      {/* Timer ring */}
      <div className="relative flex items-center justify-center">
        <svg
          width={size}
          height={size}
          className="-rotate-90"
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Background ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--muted)"
            strokeWidth={strokeWidth}
          />
          {/* Progress ring */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={timerColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.3, ease: "linear" }}
            style={{
              filter: `drop-shadow(0 0 8px ${timerColor})`,
            }}
          />
        </svg>

        {/* Time display */}
        <div className="absolute flex items-baseline gap-1 tabular-nums">
          <motion.span
            className="text-[4rem] font-bold leading-none"
            style={{ color: timerColor }}
            animate={{ color: timerColor }}
            transition={{ duration: 0.5 }}
          >
            {minutes}
          </motion.span>
          <span
            className="text-[3rem] font-light opacity-50"
            style={{ color: timerColor }}
          >
            :
          </span>
          <motion.span
            className="text-[4rem] font-bold leading-none"
            style={{ color: timerColor }}
            animate={{ color: timerColor }}
            transition={{ duration: 0.5 }}
          >
            {secs}
          </motion.span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={() => reset()}
          className="h-10 w-10 rounded-full"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>

        <Button
          size="lg"
          onClick={isRunning ? pause : start}
          className="h-12 w-12 rounded-full p-0 shadow-lg"
          style={{
            boxShadow: isRunning ? `0 0 20px ${timerColor}` : undefined,
          }}
        >
          {isRunning ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5 ml-0.5" />
          )}
        </Button>
      </div>

      {/* Presets */}
      <div className="flex gap-2">
        {PRESETS.map((preset) => (
          <Button
            key={preset.label}
            variant={currentDuration === preset.seconds ? "default" : "outline"}
            size="sm"
            onClick={() => handlePreset(preset.seconds)}
            className="rounded-full px-3 text-xs"
          >
            {preset.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
