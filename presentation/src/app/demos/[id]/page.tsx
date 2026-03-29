'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { getDemo, getDemoNavigation } from '@/data/demos';
import { TerminalMockup } from '@/components/terminal/terminal-mockup';
import { ArrowLeft, ArrowRight, Lightbulb } from 'lucide-react';

export default function DemoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const demo = getDemo(id);

  if (!demo) {
    notFound();
  }

  const { prev, next } = getDemoNavigation(id);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Demo header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <p className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-3 font-medium">
            {demo.concept}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight mb-2">{demo.title}</h1>
          <p className="text-[var(--muted-foreground)] max-w-2xl">
            {demo.description}
          </p>
        </motion.div>

        {/* Terminal mockup */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mb-8"
        >
          <TerminalMockup
            script={demo.terminalScript}
            title={demo.terminalTitle}
            autoPlay
          />
        </motion.div>

        {/* Key Takeaway callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mb-12"
        >
          <div className="border border-[var(--border)] rounded-lg p-5">
            <div className="flex items-start gap-3">
              <Lightbulb className="flex-shrink-0 w-5 h-5 text-[var(--muted-foreground)] mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-1">Key Takeaway</p>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {demo.takeaway}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation: prev / next */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="flex items-center justify-between border-t border-[var(--border)] pt-8"
        >
          {prev ? (
            <Link
              href={`/demos/${prev.id}`}
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {prev.title}
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/demos/${next.id}`}
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--muted-foreground)] transition-colors"
            >
              {next.title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              href="/demos"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors border border-[var(--border)] rounded-lg px-4 py-2"
            >
              All Demos
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
}
