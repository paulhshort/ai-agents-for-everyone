'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { getCourseModule } from '@/data/course-structure';
import { slideDecks } from '@/data/slides';
import { SlideDeck } from '@/components/presentation/slide-deck';
import { ArrowLeft, FlaskConical, Terminal, Users, Clock, BookOpen } from 'lucide-react';

/* ---------- Module type icon mapping ---------- */
const moduleTypeIcons: Record<string, React.ReactNode> = {
  lab: <FlaskConical className="w-6 h-6 text-[var(--muted-foreground)]" />,
  demo: <Terminal className="w-6 h-6 text-[var(--muted-foreground)]" />,
  activity: <Users className="w-6 h-6 text-[var(--muted-foreground)]" />,
  break: <Clock className="w-6 h-6 text-[var(--muted-foreground)]" />,
  lecture: <BookOpen className="w-6 h-6 text-[var(--muted-foreground)]" />,
  recap: <BookOpen className="w-6 h-6 text-[var(--muted-foreground)]" />,
};

export default function ModulePage({
  params,
}: {
  params: Promise<{ dayId: string; moduleId: string }>;
}) {
  const { dayId, moduleId } = use(params);
  const result = getCourseModule(moduleId);

  if (!result) {
    notFound();
  }

  const { day, module: mod } = result;

  // Load slides if the module has a slideFile
  const slides = mod.slideFile ? slideDecks[mod.slideFile] : undefined;

  // If this module has slides, render the slide deck
  if (slides && slides.length > 0) {
    return <SlideDeck slides={slides} moduleTitle={mod.title} />;
  }

  // Otherwise, show a placeholder/info page
  const icon = moduleTypeIcons[mod.type] ?? moduleTypeIcons.lecture;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div
        className="w-full max-w-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg border border-[var(--border)] mb-6">
          {icon}
        </div>

        {/* Type label */}
        <p className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-3 font-medium capitalize">
          {mod.type}
        </p>

        {/* Title */}
        <h1 className="text-2xl font-semibold tracking-tight mb-2">{mod.title}</h1>

        {/* Metadata */}
        <p className="text-xs text-[var(--muted-foreground)] mb-4">
          Day {day.day} &middot; {mod.timeRange} &middot; {mod.duration} min
        </p>

        {/* Description */}
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-10 max-w-md mx-auto">
          {mod.description}
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {mod.type === 'lab' && (
            <Link
              href="/workbench"
              className="inline-flex items-center gap-2 text-sm font-medium bg-[var(--foreground)] text-[var(--background)] rounded-lg px-5 py-2.5 hover:opacity-90 transition-opacity"
            >
              <FlaskConical className="w-4 h-4" />
              Open Workbench
            </Link>
          )}
          {mod.type === 'demo' && (
            <Link
              href="/demos"
              className="inline-flex items-center gap-2 text-sm font-medium bg-[var(--foreground)] text-[var(--background)] rounded-lg px-5 py-2.5 hover:opacity-90 transition-opacity"
            >
              <Terminal className="w-4 h-4" />
              Launch Demos
            </Link>
          )}
          {mod.type === 'activity' && (
            <Link
              href="/timer"
              className="inline-flex items-center gap-2 text-sm font-medium bg-[var(--foreground)] text-[var(--background)] rounded-lg px-5 py-2.5 hover:opacity-90 transition-opacity"
            >
              <Clock className="w-4 h-4" />
              Open Timer
            </Link>
          )}
          <Link
            href={`/day/${day.day}`}
            className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-[var(--border)] rounded-lg px-5 py-2.5 hover:border-[var(--foreground)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Day {day.day}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
