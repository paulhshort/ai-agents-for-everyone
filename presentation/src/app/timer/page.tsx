'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTimer } from '@/hooks/use-timer';
import { Button } from '@/components/ui/button';

/* ---------- Presets ---------- */
const presets = [
  { label: '2 min', seconds: 120 },
  { label: '5 min', seconds: 300 },
  { label: '10 min', seconds: 600 },
  { label: '15 min', seconds: 900 },
];

/* ---------- Color helpers ---------- */
function getTimerColor(percentRemaining: number): string {
  if (percentRemaining > 50) return 'oklch(0.65 0.2 155)'; // green
  if (percentRemaining > 20) return 'oklch(0.75 0.15 80)'; // amber/yellow
  return 'oklch(0.6 0.2 10)'; // red
}

function getTimerGlow(percentRemaining: number): string {
  if (percentRemaining > 50) return '0 0 80px oklch(0.65 0.2 155 / 0.3)';
  if (percentRemaining > 20) return '0 0 80px oklch(0.75 0.15 80 / 0.3)';
  return '0 0 80px oklch(0.6 0.2 10 / 0.4)';
}

function getBgGradient(percentRemaining: number): string {
  if (percentRemaining > 50) {
    return 'radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.65 0.2 155 / 0.06), transparent 70%)';
  }
  if (percentRemaining > 20) {
    return 'radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.75 0.15 80 / 0.06), transparent 70%)';
  }
  return 'radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.6 0.2 10 / 0.08), transparent 70%)';
}

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
  const [duration, setDuration] = useState(300); // 5 min default
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

  const timerColor = getTimerColor(percentRemaining);
  const timerGlow = getTimerGlow(percentRemaining);
  const bgGradient = getBgGradient(percentRemaining);
  const { minutes, secs } = formatTime(timeLeft);
  const isUnder30 = timeLeft > 0 && timeLeft <= 30 && isRunning;

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
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Dynamic background */}
      <div
        className="fixed inset-0 pointer-events-none transition-all duration-1000"
        style={{ background: bgGradient }}
      />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between p-6">
        <Link
          href="/"
          className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>

        {/* Activity name input */}
        <div className="flex-1 max-w-md mx-4">
          <input
            type="text"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            placeholder="Activity name (optional)"
            className="w-full text-center text-lg font-medium bg-transparent border-b border-[var(--border)] focus:border-[var(--primary)] outline-none py-2 px-4 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] transition-colors"
          />
        </div>

        <div className="w-5" /> {/* Spacer for alignment */}
      </div>

      {/* Main timer area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        {/* Activity name display */}
        <AnimatePresence>
          {activityName && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xl sm:text-2xl text-[var(--muted-foreground)] mb-8 font-medium text-center"
            >
              {activityName}
            </motion.p>
          )}
        </AnimatePresence>

        {/* TIME'S UP display */}
        <AnimatePresence>
          {timesUp && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="absolute inset-0 flex items-center justify-center z-20"
            >
              <div className="text-center">
                <motion.h1
                  className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tight"
                  style={{ color: 'oklch(0.6 0.2 10)' }}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  TIME&apos;S UP!
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Button onClick={handleReset} size="lg" className="rounded-2xl px-10 h-14 text-lg">
                    Reset Timer
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Timer digits */}
        {!timesUp && (
          <motion.div
            className="flex items-center justify-center select-none"
            animate={isUnder30 ? { scale: [1, 1.02, 1] } : { scale: 1 }}
            transition={isUnder30 ? { repeat: Infinity, duration: 1 } : undefined}
          >
            {/* Minutes */}
            <div className="flex">
              {minutes.split('').map((digit, i) => (
                <motion.span
                  key={`m-${i}-${digit}`}
                  className="font-black tabular-nums"
                  style={{
                    fontSize: 'clamp(120px, 25vw, 240px)',
                    lineHeight: 1,
                    color: timerColor,
                    textShadow: timerGlow,
                    transition: 'color 1s ease, text-shadow 1s ease',
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {digit}
                </motion.span>
              ))}
            </div>

            {/* Colon */}
            <motion.span
              className="font-black mx-2 sm:mx-4"
              style={{
                fontSize: 'clamp(80px, 20vw, 200px)',
                lineHeight: 1,
                color: timerColor,
                transition: 'color 1s ease',
              }}
              animate={isRunning ? { opacity: [1, 0.3, 1] } : { opacity: 1 }}
              transition={isRunning ? { repeat: Infinity, duration: 1 } : undefined}
            >
              :
            </motion.span>

            {/* Seconds */}
            <div className="flex">
              {secs.split('').map((digit, i) => (
                <motion.span
                  key={`s-${i}-${digit}`}
                  className="font-black tabular-nums"
                  style={{
                    fontSize: 'clamp(120px, 25vw, 240px)',
                    lineHeight: 1,
                    color: timerColor,
                    textShadow: timerGlow,
                    transition: 'color 1s ease, text-shadow 1s ease',
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {digit}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Controls */}
        {!timesUp && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mt-12"
          >
            {!isRunning ? (
              <Button
                onClick={handleStart}
                size="lg"
                className="rounded-2xl px-10 h-14 text-lg shadow-lg hover:shadow-[var(--glow-purple)] transition-shadow"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                Start
              </Button>
            ) : (
              <Button
                onClick={pause}
                variant="outline"
                size="lg"
                className="rounded-2xl px-10 h-14 text-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
                </svg>
                Pause
              </Button>
            )}

            <Button
              onClick={handleReset}
              variant="ghost"
              size="lg"
              className="rounded-2xl px-8 h-14 text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              Reset
            </Button>
          </motion.div>
        )}
      </div>

      {/* Bottom presets */}
      {!timesUp && (
        <div className="relative z-10 py-8 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {presets.map((preset) => (
                <Button
                  key={preset.seconds}
                  onClick={() => handlePreset(preset.seconds)}
                  variant={duration === preset.seconds && !isRunning ? 'default' : 'outline'}
                  className="rounded-xl px-6 h-11"
                >
                  {preset.label}
                </Button>
              ))}

              {/* Custom button */}
              {!showCustom ? (
                <Button
                  onClick={() => setShowCustom(true)}
                  variant="ghost"
                  className="rounded-xl px-6 h-11"
                >
                  Custom
                </Button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
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
                    className="w-20 h-11 rounded-xl border border-[var(--border)] bg-[var(--card)] text-center text-[var(--foreground)] outline-none focus:border-[var(--primary)] px-3"
                    autoFocus
                  />
                  <Button onClick={handleCustom} size="sm" className="rounded-xl h-11">
                    Set
                  </Button>
                  <Button onClick={() => setShowCustom(false)} variant="ghost" size="sm" className="rounded-xl h-11">
                    Cancel
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Progress bar at the very bottom */}
      {!timesUp && (
        <div className="relative z-10 h-1.5 w-full">
          <motion.div
            className="h-full"
            style={{
              width: `${percentRemaining}%`,
              backgroundColor: timerColor,
              transition: 'background-color 1s ease',
            }}
          />
        </div>
      )}
    </div>
  );
}
