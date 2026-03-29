'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { demos } from '@/data/demos';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

/* ---------- Star rating ---------- */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-[var(--brand-amber)]' : 'text-[var(--muted-foreground)] opacity-30'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ---------- Demo gradient accents ---------- */
const demoGradients = [
  'from-[oklch(0.55_0.25_290)] to-[oklch(0.6_0.2_250)]',
  'from-[oklch(0.6_0.2_250)] to-[oklch(0.7_0.15_200)]',
  'from-[oklch(0.7_0.15_200)] to-[oklch(0.65_0.2_155)]',
  'from-[oklch(0.65_0.2_155)] to-[oklch(0.75_0.15_80)]',
  'from-[oklch(0.55_0.25_290)] to-[oklch(0.7_0.15_200)]',
  'from-[oklch(0.6_0.2_250)] to-[oklch(0.65_0.2_155)]',
  'from-[oklch(0.7_0.15_200)] to-[oklch(0.55_0.25_290)]',
];

export default function DemosPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 30%, oklch(0.6 0.2 250 / 0.1), transparent 70%)',
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Course
            </Link>

            <Badge variant="blue" className="mb-4 text-sm px-4 py-1.5">
              Interactive Demos
            </Badge>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 gradient-text">
              Demo Launcher
            </h1>

            <p className="text-xl text-[var(--muted-foreground)] max-w-2xl">
              Watch AI agents in action through guided terminal demonstrations. Each demo teaches a key concept.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo, idx) => {
            const gradient = demoGradients[idx % demoGradients.length];
            return (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
              >
                <Link href={`/demos/${demo.id}`} className="block group h-full">
                  <Card className="relative overflow-hidden h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                    {/* Gradient accent bar */}
                    <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${gradient}`} />

                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[oklch(0.55_0.25_290/0.05)] to-transparent" />

                    <CardHeader className="relative pb-2">
                      <div className="flex items-start justify-between mb-2">
                        <div
                          className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} text-white font-bold text-sm shadow-md`}
                        >
                          {idx + 1}
                        </div>
                        <StarRating rating={demo.wowFactor} />
                      </div>
                      <CardTitle className="text-xl group-hover:text-[var(--primary)] transition-colors">
                        {demo.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative space-y-4">
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                        {demo.description}
                      </p>

                      <Badge variant="secondary" className="text-xs">
                        Concept: {demo.concept}
                      </Badge>

                      <Button variant="ghost" className="w-full justify-between group-hover:bg-[var(--accent)]">
                        Launch Demo
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
                        </svg>
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
