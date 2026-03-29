'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { getCourseDay, getTeachingModuleCount } from '@/data/course-structure';
import { getSlideCount } from '@/data/slides';
import { ArrowLeft, ArrowRight, Clock, BookOpen } from 'lucide-react';

/* ---------- Module type labels ---------- */
const moduleTypeLabels: Record<string, string> = {
  lecture: 'Lecture',
  activity: 'Activity',
  lab: 'Lab',
  demo: 'Demo',
  break: 'Break',
  recap: 'Recap',
};

export default function DayPage({ params }: { params: Promise<{ dayId: string }> }) {
  const { dayId } = use(params);
  const dayNumber = parseInt(dayId, 10);
  const day = getCourseDay(dayNumber);

  if (!day) {
    notFound();
  }

  const teachingModules = getTeachingModuleCount(day);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-3 font-medium">
              Day {day.day} of 3
            </p>

            <h1 className="text-2xl font-semibold tracking-tight mb-2">
              {day.title}
            </h1>

            <p className="text-[var(--muted-foreground)] mb-6">
              {day.subtitle}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 text-xs text-[var(--muted-foreground)]">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {day.duration}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {teachingModules} modules
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Module list */}
      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="border border-[var(--border)] rounded-lg divide-y divide-[var(--border)]">
            {day.modules.map((mod, idx) => {
              const slideCount = mod.slideFile ? getSlideCount(mod.slideFile) : 0;
              const isBreak = mod.type === 'break';
              const typeLabel = moduleTypeLabels[mod.type] ?? mod.type;

              const href = mod.slideFile
                ? `/day/${day.day}/module/${mod.id}`
                : mod.type === 'demo'
                ? '/demos'
                : mod.type === 'lab'
                ? '/workbench'
                : `/day/${day.day}/module/${mod.id}`;

              return (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                >
                  {isBreak ? (
                    <div className="flex items-center gap-4 px-5 py-3 opacity-50">
                      <span className="flex-shrink-0 w-7 text-xs font-medium text-[var(--muted-foreground)] tabular-nums">
                        {mod.moduleNumber ? String(mod.moduleNumber).padStart(2, '0') : '--'}
                      </span>
                      <span className="flex-1 text-sm text-[var(--muted-foreground)]">
                        {mod.title}
                      </span>
                      <span className="text-xs text-[var(--muted-foreground)]">
                        {mod.timeRange}
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={href}
                      className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-[var(--muted)]"
                    >
                      {/* Module number */}
                      <span className="flex-shrink-0 w-7 text-sm font-medium text-[var(--muted-foreground)] tabular-nums">
                        {mod.moduleNumber ? String(mod.moduleNumber).padStart(2, '0') : '--'}
                      </span>

                      {/* Content */}
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-medium truncate">
                          {mod.title}
                        </span>
                        <span className="block text-xs text-[var(--muted-foreground)] mt-0.5">
                          {mod.description}
                        </span>
                      </span>

                      {/* Type badge */}
                      <span className="hidden sm:inline-flex flex-shrink-0 text-xs text-[var(--muted-foreground)] border border-[var(--border)] rounded-full px-2.5 py-0.5 capitalize">
                        {typeLabel}
                      </span>

                      {/* Duration */}
                      <span className="flex-shrink-0 text-xs text-[var(--muted-foreground)] tabular-nums whitespace-nowrap">
                        {mod.duration}m
                      </span>

                      {/* Slide count */}
                      {slideCount > 0 && (
                        <span className="hidden sm:inline-flex flex-shrink-0 text-xs text-[var(--muted-foreground)] tabular-nums">
                          {slideCount}s
                        </span>
                      )}

                      {/* Arrow */}
                      <ArrowRight className="flex-shrink-0 w-4 h-4 text-[var(--muted-foreground)] transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Navigation footer */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto flex items-center justify-between border-t border-[var(--border)] pt-8">
          {dayNumber > 1 ? (
            <Link
              href={`/day/${dayNumber - 1}`}
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Day {dayNumber - 1}
            </Link>
          ) : (
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Home
            </Link>
          )}

          {dayNumber < 3 && (
            <Link
              href={`/day/${dayNumber + 1}`}
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--muted-foreground)] transition-colors"
            >
              Day {dayNumber + 1}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
