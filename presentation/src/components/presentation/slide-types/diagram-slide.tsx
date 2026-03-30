"use client";

import { Suspense, useState, useEffect, type ComponentType } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { Slide } from "@/data/types";

/* CanvasWrapper is dynamic/no-SSR */
const CanvasWrapper = dynamic(
  () => import("@/components/three/canvas-wrapper").then((m) => m.CanvasWrapper),
  { ssr: false }
);

interface DiagramSlideProps {
  slide: Slide;
}

/**
 * Component that dynamically resolves a Three.js scene at runtime.
 * This avoids SSR issues with three.js imports.
 */
function DynamicThreeScene({
  visualization,
}: {
  visualization: string;
}) {
  const [SceneComponent, setSceneComponent] = useState<ComponentType | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      let mod: { [key: string]: ComponentType };
      switch (visualization) {
        case "neural-network":
          mod = await import("@/components/three/neural-network");
          if (!cancelled) setSceneComponent(() => mod.NeuralNetwork);
          break;
        case "token-flow":
          mod = await import("@/components/three/token-flow");
          if (!cancelled) setSceneComponent(() => mod.TokenFlow);
          break;
        case "context-window":
          mod = await import("@/components/three/context-window-3d");
          if (!cancelled) setSceneComponent(() => mod.ContextWindow3D);
          break;
        case "agentic-loop":
          mod = await import("@/components/three/agentic-loop");
          if (!cancelled) setSceneComponent(() => mod.AgenticLoop);
          break;
      }
    }

    load();
    return () => { cancelled = true; };
  }, [visualization]);

  if (!SceneComponent) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--foreground)] border-t-transparent" />
          <span className="text-xs text-[var(--muted-foreground)]">Loading 3D scene...</span>
        </div>
      </div>
    );
  }

  return (
    <CanvasWrapper className="h-full w-full">
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <SceneComponent />
    </CanvasWrapper>
  );
}

export function DiagramSlide({ slide }: DiagramSlideProps) {
  const hasVisualization = !!slide.visualization;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8 py-12">
      <div className="w-full max-w-5xl">
        {/* Title */}
        {slide.title && (
          <motion.h2
            className="mb-8 text-center text-[var(--foreground)]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {slide.title}
          </motion.h2>
        )}

        {/* Three.js visualization or ASCII diagram */}
        {hasVisualization ? (
          <motion.div
            className="relative mx-auto h-[50vh] w-full overflow-hidden rounded-xl border border-[var(--border)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DynamicThreeScene visualization={slide.visualization!} />
          </motion.div>
        ) : (
          <motion.div
            className="overflow-hidden rounded-xl border border-[var(--border)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--muted)] px-4 py-2">
              <span className="text-xs text-[var(--muted-foreground)]">diagram</span>
            </div>
            <pre className="overflow-x-auto bg-[var(--card)] p-6">
              <code className="font-mono text-[calc(1rem*var(--font-scale))] leading-relaxed text-[var(--foreground)] opacity-75">
                {slide.content ?? slide.codeBlock?.code ?? ""}
              </code>
            </pre>
          </motion.div>
        )}

        {/* Description */}
        {slide.subtitle && (
          <motion.p
            className="mt-6 text-center text-[calc(1.1rem*var(--font-scale))] leading-relaxed text-[var(--muted-foreground)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            {slide.subtitle}
          </motion.p>
        )}

        {/* Bullets */}
        {slide.bullets && slide.bullets.length > 0 && (
          <motion.ul
            className="mt-6 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            {slide.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-center gap-2 rounded-lg bg-[var(--muted)] px-4 py-2 text-sm text-[var(--foreground)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted-foreground)]" />
                {bullet}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
}
