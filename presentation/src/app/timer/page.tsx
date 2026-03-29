'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTimer } from '@/hooks/use-timer';
import { Play, Pause, RotateCcw } from 'lucide-react';

/* ---------- Presets ---------- */
const presets = [
  { label: '2 min', seconds: 120 },
  { label: '5 min', seconds: 300 },
  { label: '10 min', seconds: 600 },
  { label: '15 min', seconds: 900 },
];

/* ---------- Format time ---------- */
function formatTime(seconds: number): { minutes: string; secs: string } {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return {
    minutes: m.toString().padStart(2, '0'),
    secs: s.toString().padStart(2, '0'),
  };
}

/* ========== MAIN COMPONENT ========== */
export default function TimerPage() {
  const [duration, setDuration] = useState(300);
  const [activityName, setActivityName] = useState('');
  const [customMinutes, setCustomMinutes] = useState('');
  const [showCustom, setShowCustom] = useState(false);
  const [timesUp, setTimesUp] = useState(false);

  const handleComplete = useCallback(() => {
    setTimesUp(true);
  }, []);

  const { timeLeft, isRunning, start, pause, reset, percentRemaining } = useTimer({
    duration,
    onComplete: handleComplete,
  });

  const { minutes, secs } = formatTime(timeLeft);

  const handlePreset = useCallback(
    (seconds: number) => {
      setDuration(seconds);
      setTimesUp(false);
      reset(seconds);
    },
    [reset]
  );

  const handleCustom = useCallback(() => {
    const mins = parseInt(customMinutes, 10);
    if (mins > 0 && mins <= 120) {
      const s = mins * 60;
      setDuration(s);
      setTimesUp(false);
      setShowCustom(false);
      setCustomMinutes('');
      reset(s);
    }
  }, [customMinutes, reset]);

  const handleReset = useCallback(() => {
    setTimesUp(false);
    reset(duration);
  }, [reset, duration]);

  const handleStart = useCallback(() => {
    setTimesUp(false);
    start();
  }, [start]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar — activity name */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <input
            type="text"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            placeholder="Activity name (optional)"
            className="w-full text-center text-sm font-medium bg-transparent border-b border-[var(--border)] focus:border-[var(--foreground)] outline-none py-2 px-4 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] transition-colors"
          />
        </div>
      </div>

      {/* Main timer area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Activity name display */}
        <AnimatePresence>
          {activityName && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm text-[var(--muted-foreground)] mb-8 font-medium text-center uppercase tracking-widest"
            >
              {activityName}
            </motion.p>
          )}
        </AnimatePresence>

        {/* TIME'S UP display */}
        <AnimatePresence>
          {timesUp && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center z-20"
            >
              <div className="text-center">
                <h1
                  className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-[var(--foreground)]"
                >
                  TIME&apos;S UP
                </h1>
                <div className="mt-8">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-sm font-medium bg-[var(--foreground)] text-[var(--background)] rounded-lg px-6 py-3 hover:opacity-90 transition-opacity"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Timer digits */}
        {!timesUp && (
          <div className="flex items-center justify-center select-none">
            {/* Minutes */}
            <div className="flex">
              {minutes.split('').map((digit, i) => (
                <span
                  key={`m-${i}-${digit}`}
                  className="font-semibold tabular-nums text-[var(--foreground)]"
                  style={{
                    fontSize: 'clamp(100px, 22vw, 220px)',
                    lineHeight: 1,
                  }}
                >
                  {digit}
                </span>
              ))}
            </div>

            {/* Colon */}
            <motion.span
              className="font-semibold mx-2 sm:mx-4 text-[var(--foreground)]"
              style={{
                fontSize: 'clamp(70px, 18vw, 180px)',
                lineHeight: 1,
              }}
              animate={isRunning ? { opacity: [1, 0.2, 1] } : { opacity: 1 }}
              transition={isRunning ? { repeat: Infinity, duration: 1 } : undefined}
            >
              :
            </motion.span>

            {/* Seconds */}
            <div className="flex">
              {secs.split('').map((digit, i) => (
                <span
                  key={`s-${i}-${digit}`}
                  className="font-semibold tabular-nums text-[var(--foreground)]"
                  style={{
                    fontSize: 'clamp(100px, 22vw, 220px)',
                    lineHeight: 1,
                  }}
                >
                  {digit}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Controls */}
        {!timesUp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mt-12"
          >
            {!isRunning ? (
              <button
                onClick={handleStart}
                className="inline-flex items-center gap-2 text-sm font-medium bg-[var(--foreground)] text-[var(--background)] rounded-lg px-6 py-3 hover:opacity-90 transition-opacity"
              >
                <Play className="w-4 h-4" />
                Start
              </button>
            ) : (
              <button
                onClick={pause}
                className="inline-flex items-center gap-2 text-sm font-medium border border-[var(--border)] rounded-lg px-6 py-3 hover:border-[var(--foreground)] transition-colors"
              >
                <Pause className="w-4 h-4" />
                Pause
              </button>
            )}

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors px-4 py-3"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </motion.div>
        )}
      </div>

      {/* Bottom presets */}
      {!timesUp && (
        <div className="py-8 px-6">
          <div className="max-w-lg mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.seconds}
                  onClick={() => handlePreset(preset.seconds)}
                  className={`text-xs font-medium rounded-full px-4 py-1.5 border transition-colors ${
                    duration === preset.seconds && !isRunning
                      ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]'
                      : 'border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]'
                  }`}
                >
                  {preset.label}
                </button>
              ))}

              {/* Custom button */}
              {!showCustom ? (
                <button
                  onClick={() => setShowCustom(true)}
                  className="text-xs font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors px-4 py-1.5"
                >
                  Custom
                </button>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="number"
                    min="1"
                    max="120"
                    value={customMinutes}
                    onChange={(e) => setCustomMinutes(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleCustom()}
                    placeholder="min"
                    className="w-16 h-8 rounded-lg border border-[var(--border)] bg-transparent text-center text-xs text-[var(--foreground)] outline-none focus:border-[var(--foreground)] px-2"
                    autoFocus
                  />
                  <button
                    onClick={handleCustom}
                    className="text-xs font-medium bg-[var(--foreground)] text-[var(--background)] rounded-lg px-3 py-1.5"
                  >
                    Set
                  </button>
                  <button
                    onClick={() => setShowCustom(false)}
                    className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors px-2 py-1.5"
                  >
                    Cancel
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Progress bar at the bottom */}
      {!timesUp && (
        <div className="h-0.5 w-full bg-[var(--border)]">
          <div
            className="h-full bg-[var(--foreground)] transition-all duration-1000 ease-linear"
            style={{ width: `${percentRemaining}%` }}
          />
        </div>
      )}
    </div>
  );
}
