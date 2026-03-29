'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GlowMaterialProps {
  color?: string;
  intensity?: number;
  pulse?: boolean;
  pulseSpeed?: number;
  pulseMin?: number;
  pulseMax?: number;
  opacity?: number;
  transparent?: boolean;
  metalness?: number;
  roughness?: number;
}

export function GlowMaterial({
  color = '#00ffff',
  intensity = 1.5,
  pulse = false,
  pulseSpeed = 2,
  pulseMin = 0.4,
  pulseMax = 1.0,
  opacity = 1,
  transparent = false,
  metalness = 0.3,
  roughness = 0.2,
}: GlowMaterialProps) {
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    if (!matRef.current) return;
    if (pulse) {
      const t = clock.getElapsedTime();
      const factor = pulseMin + (pulseMax - pulseMin) * (0.5 + 0.5 * Math.sin(t * pulseSpeed));
      matRef.current.emissiveIntensity = intensity * factor;
    }
  });

  return (
    <meshStandardMaterial
      ref={matRef}
      color={color}
      emissive={color}
      emissiveIntensity={intensity}
      metalness={metalness}
      roughness={roughness}
      opacity={opacity}
      transparent={transparent}
      toneMapped={false}
    />
  );
}

export default GlowMaterial;
