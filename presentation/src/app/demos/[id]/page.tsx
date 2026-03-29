'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { getDemo, getDemoNavigation } from '@/data/demos';
import { TerminalMockup } from '@/components/terminal/terminal-mockup';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function DemoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const demo = getDemo(id);

  if (!demo) {
    notFound();
  }

  const { prev, next } = getDemoNavigation(id);

  return (
    <div className="min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 30%, oklch(0.6 0.2 250 / 0.08), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/demos"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All Demos
          </Link>
        </motion.div>

        {/* Demo header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Badge variant="blue" className="mb-3">
            Demo: {demo.concept}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">{demo.title}</h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl">
            {demo.description}
          </p>
        </motion.div>

        {/* Terminal mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <TerminalMockup
            script={demo.terminalScript}
            title={demo.terminalTitle}
            autoPlay
          />
        </motion.div>

        {/* Key Takeaway card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12"
        >
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--brand-green)] to-[var(--brand-cyan)]" />
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[oklch(0.65_0.2_155/0.15)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--brand-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Takeaway</h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {demo.takeaway}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation: prev / next */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex items-center justify-between border-t border-[var(--border)] pt-8"
        >
          {prev ? (
            <Button asChild variant="outline" className="rounded-xl">
              <Link href={`/demos/${prev.id}`}>
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                {prev.title}
              </Link>
            </Button>
          ) : (
            <div />
          )}

          {next ? (
            <Button asChild className="rounded-xl">
              <Link href={`/demos/${next.id}`}>
                {next.title}
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/demos">
                Back to All Demos
              </Link>
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
