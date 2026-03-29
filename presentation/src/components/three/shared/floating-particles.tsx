'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  opacity?: number;
  speed?: number;
  size?: number;
  spread?: number;
}

export function FloatingParticles({
  count = 200,
  color = '#8b5cf6',
  opacity = 0.6,
  speed = 0.3,
  size = 0.03,
  spread = 8,
}: FloatingParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * spread;
      pos[i3 + 1] = (Math.random() - 0.5) * spread;
      pos[i3 + 2] = (Math.random() - 0.5) * spread;
      vel[i3] = (Math.random() - 0.5) * speed * 0.01;
      vel[i3 + 1] = (Math.random() - 0.5) * speed * 0.01;
      vel[i3 + 2] = (Math.random() - 0.5) * speed * 0.01;
    }
    return { positions: pos, velocities: vel };
  }, [count, spread, speed]);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = size * (0.5 + Math.random());
    }
    return s;
  }, [count, size]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posAttr = geo.getAttribute('position') as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    const t = clock.getElapsedTime();
    const halfSpread = spread / 2;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3] += velocities[i3] + Math.sin(t * 0.5 + i) * speed * 0.002;
      arr[i3 + 1] += velocities[i3 + 1] + Math.cos(t * 0.3 + i * 0.7) * speed * 0.002;
      arr[i3 + 2] += velocities[i3 + 2] + Math.sin(t * 0.4 + i * 1.3) * speed * 0.001;

      // Wrap around
      if (arr[i3] > halfSpread) arr[i3] = -halfSpread;
      if (arr[i3] < -halfSpread) arr[i3] = halfSpread;
      if (arr[i3 + 1] > halfSpread) arr[i3 + 1] = -halfSpread;
      if (arr[i3 + 1] < -halfSpread) arr[i3 + 1] = halfSpread;
      if (arr[i3 + 2] > halfSpread) arr[i3 + 2] = -halfSpread;
      if (arr[i3 + 2] < -halfSpread) arr[i3 + 2] = halfSpread;
    }

    posAttr.needsUpdate = true;
  });

  const pointTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(0.7, 'rgba(255,255,255,0.2)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(canvas);
    return tex;
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        map={pointTexture}
      />
    </points>
  );
}

export default FloatingParticles;
