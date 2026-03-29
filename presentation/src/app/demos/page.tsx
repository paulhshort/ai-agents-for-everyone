'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { demos } from '@/data/demos';
import { ArrowRight } from 'lucide-react';

export default function DemosPage() {
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
            <h1 className="text-2xl font-semibold tracking-tight mb-2">
              Demos
            </h1>
            <p className="text-[var(--muted-foreground)]">
              Watch AI agents in action through guided terminal demonstrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo list */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="border border-[var(--border)] rounded-lg divide-y divide-[var(--border)]">
            {demos.map((demo, idx) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.04, duration: 0.3 }}
              >
                <Link
                  href={`/demos/${demo.id}`}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-[var(--muted)]"
                >
                  {/* Number */}
                  <span className="flex-shrink-0 w-7 text-sm font-medium text-[var(--muted-foreground)] tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* Title */}
                  <span className="flex-1 min-w-0 text-sm font-medium truncate">
                    {demo.title}
                  </span>

                  {/* Concept badge */}
                  <span className="hidden sm:inline-flex flex-shrink-0 text-xs text-[var(--muted-foreground)] border border-[var(--border)] rounded-full px-2.5 py-0.5">
                    {demo.concept}
                  </span>

                  {/* Arrow */}
                  <ArrowRight className="flex-shrink-0 w-4 h-4 text-[var(--muted-foreground)] transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
