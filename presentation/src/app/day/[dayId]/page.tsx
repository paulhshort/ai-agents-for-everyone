'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { getCourseDay, getTeachingModuleCount } from '@/data/course-structure';
import { getSlideCount } from '@/data/slides';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

/* ---------- Module type styling ---------- */
const moduleTypeConfig: Record<string, { color: string; badge: 'purple' | 'blue' | 'cyan' | 'green' | 'amber'; icon: string }> = {
  lecture: { color: 'oklch(0.55 0.25 290)', badge: 'purple', icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' },
  activity: { color: 'oklch(0.65 0.2 155)', badge: 'green', icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
  lab: { color: 'oklch(0.6 0.2 250)', badge: 'blue', icon: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5' },
  demo: { color: 'oklch(0.7 0.15 200)', badge: 'cyan', icon: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z' },
  break: { color: 'oklch(0.75 0.15 80)', badge: 'amber', icon: 'M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z' },
  recap: { color: 'oklch(0.55 0.25 290)', badge: 'purple', icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605' },
};

/* ---------- Day gradient configs ---------- */
const dayGradients = [
  { from: 'oklch(0.55 0.25 290)', to: 'oklch(0.6 0.2 250)' },
  { from: 'oklch(0.6 0.2 250)', to: 'oklch(0.7 0.15 200)' },
  { from: 'oklch(0.7 0.15 200)', to: 'oklch(0.65 0.2 155)' },
];

export default function DayPage({ params }: { params: Promise<{ dayId: string }> }) {
  const { dayId } = use(params);
  const dayNumber = parseInt(dayId, 10);
  const day = getCourseDay(dayNumber);

  if (!day) {
    notFound();
  }

  const gradient = dayGradients[dayNumber - 1] ?? dayGradients[0];
  const teachingModules = getTeachingModuleCount(day);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 30%, ${gradient.from} / 0.1, transparent 70%)`,
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Course
            </Link>

            {/* Day badge */}
            <Badge variant="purple" className="mb-4 text-sm px-4 py-1.5">
              Day {day.day} of 3
            </Badge>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                }}
              >
                {day.title}
              </span>
            </h1>

            <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mb-6">
              {day.subtitle}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--muted-foreground)]">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {day.duration}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                {teachingModules} modules
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
            style={{
              background: `linear-gradient(to bottom, ${gradient.from}, ${gradient.to}, transparent)`,
            }}
          />

          {day.modules.map((mod, idx) => {
            const config = moduleTypeConfig[mod.type] ?? moduleTypeConfig.lecture;
            const slideCount = mod.slideFile ? getSlideCount(mod.slideFile) : 0;
            const isBreak = mod.type === 'break';

            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="relative pl-16 md:pl-20 pb-8 last:pb-0"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-6 w-4 h-4 rounded-full border-2 border-[var(--background)]"
                  style={{
                    backgroundColor: config.color,
                    boxShadow: `0 0 12px ${config.color} / 0.4`,
                  }}
                />

                {/* Module card */}
                {isBreak ? (
                  <div className="glass rounded-xl p-4 opacity-60">
                    <div className="flex items-center gap-3">
                      <Badge variant={config.badge} className="text-xs capitalize">
                        {mod.type}
                      </Badge>
                      <span className="text-sm font-medium">{mod.title}</span>
                      <span className="text-xs text-[var(--muted-foreground)] ml-auto">
                        {mod.timeRange}
                      </span>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={
                      mod.slideFile
                        ? `/day/${day.day}/module/${mod.id}`
                        : mod.type === 'demo'
                        ? '/demos'
                        : mod.type === 'lab'
                        ? '/workbench'
                        : `/day/${day.day}/module/${mod.id}`
                    }
                    className="block group"
                  >
                    <Card className="transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
                      <CardContent className="p-5 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                          {/* Module number */}
                          <div
                            className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                            style={{
                              background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                            }}
                          >
                            {mod.moduleNumber}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <h3 className="text-lg font-semibold group-hover:text-[var(--primary)] transition-colors">
                                {mod.title}
                              </h3>
                              <span className="flex-shrink-0 text-xs text-[var(--muted-foreground)] whitespace-nowrap mt-1">
                                {mod.timeRange}
                              </span>
                            </div>

                            <p className="text-sm text-[var(--muted-foreground)] mb-3 leading-relaxed">
                              {mod.description}
                            </p>

                            {/* Tags row */}
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge variant={config.badge} className="text-xs capitalize">
                                <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d={config.icon} />
                                </svg>
                                {mod.type}
                              </Badge>

                              <Badge variant="secondary" className="text-xs">
                                {mod.duration} min
                              </Badge>

                              {slideCount > 0 && (
                                <Badge variant="outline" className="text-xs">
                                  {slideCount} slides
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Arrow */}
                          <div className="hidden sm:flex items-center self-center">
                            <svg
                              className="w-5 h-5 text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-all group-hover:translate-x-1"
                              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Navigation footer */}
      <section className="py-12 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {dayNumber > 1 ? (
            <Button asChild variant="outline">
              <Link href={`/day/${dayNumber - 1}`}>
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Day {dayNumber - 1}
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline">
              <Link href="/">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Home
              </Link>
            </Button>
          )}

          {dayNumber < 3 && (
            <Button asChild>
              <Link href={`/day/${dayNumber + 1}`}>
                Day {dayNumber + 1}
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}
