'use client';

import { type ReactNode, Suspense, Component, type ErrorInfo } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

/* ---------- Loading fallback ---------- */
function CanvasLoadingFallback() {
  return (
    <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br from-[oklch(0.12_0.04_280)] to-[oklch(0.08_0.03_260)]">
      {/* Animated shimmer */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(110deg, transparent 25%, rgba(139,92,246,0.08) 37%, rgba(6,182,212,0.06) 63%, transparent 75%)',
            backgroundSize: '400% 100%',
            animation: 'shimmer 2.5s ease-in-out infinite',
          }}
        />
      </div>
      {/* Center spinner */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div className="relative w-12 h-12">
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              borderTopColor: '#8b5cf6',
              borderRightColor: '#06b6d4',
              animation: 'spin 1s linear infinite',
            }}
          />
          <div
            className="absolute inset-2 rounded-full border-2 border-transparent"
            style={{
              borderBottomColor: '#a78bfa',
              borderLeftColor: '#22d3ee',
              animation: 'spin 1.5s linear infinite reverse',
            }}
          />
        </div>
        <span className="text-sm text-white/40 font-medium tracking-wide">
          Loading 3D Scene...
        </span>
      </div>
      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/* ---------- WebGL error fallback ---------- */
function WebGLFallback({ error }: { error?: string }) {
  return (
    <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br from-[oklch(0.12_0.04_280)] to-[oklch(0.08_0.03_260)] flex flex-col items-center justify-center gap-4 p-8">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center border border-purple-500/30">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-purple-400"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      </div>
      <div className="text-center">
        <h3 className="text-white/80 font-semibold text-lg mb-1">
          3D Visualization Unavailable
        </h3>
        <p className="text-white/40 text-sm max-w-xs leading-relaxed">
          Your browser or device does not support WebGL. The interactive 3D
          visualization cannot be rendered.
        </p>
        {error && (
          <p className="text-red-400/60 text-xs mt-2 font-mono">{error}</p>
        )}
      </div>
    </div>
  );
}

/* ---------- Error boundary ---------- */
interface ErrorBoundaryProps {
  children: ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  error?: string;
}

class CanvasErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[CanvasWrapper] WebGL error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return <WebGLFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

/* ---------- Dynamic Canvas (SSR-safe) ---------- */
const R3FCanvas = dynamic(
  () =>
    import('@react-three/fiber').then((mod) => {
      const { Canvas } = mod;

      function R3FCanvasInner({
        children,
        className,
        camera,
      }: {
        children: ReactNode;
        className?: string;
        camera?: Record<string, unknown>;
      }) {
        return (
          <Canvas
            className={className}
            camera={{
              position: [0, 0, 8],
              fov: 50,
              near: 0.1,
              far: 100,
              ...(camera ?? {}),
            }}
            dpr={[1, 2]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
              stencil: false,
              depth: true,
            }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>{children}</Suspense>
          </Canvas>
        );
      }
      return R3FCanvasInner;
    }),
  {
    ssr: false,
    loading: () => <CanvasLoadingFallback />,
  }
);

/* ---------- Public wrapper ---------- */
interface CanvasWrapperProps {
  children: ReactNode;
  className?: string;
  camera?: Record<string, unknown>;
}

export function CanvasWrapper({ children, className, camera }: CanvasWrapperProps) {
  return (
    <div
      className={cn(
        'relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden',
        className
      )}
    >
      <CanvasErrorBoundary>
        <R3FCanvas className="!absolute inset-0" camera={camera}>
          {children}
        </R3FCanvas>
      </CanvasErrorBoundary>
    </div>
  );
}

export default CanvasWrapper;
