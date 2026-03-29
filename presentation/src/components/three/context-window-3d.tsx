'use client';

import { useRef, useMemo, useState, useCallback, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { FloatingParticles } from './shared/floating-particles';

/* ---------- Block types ---------- */
interface BlockConfig {
  label: string;
  color: string;
  emissive: string;
  fraction: number; // how much of the fill each block occupies
}

const BLOCK_TYPES: BlockConfig[] = [
  { label: 'System Prompt', color: '#8b5cf6', emissive: '#6d28d9', fraction: 0.08 },
  { label: 'User Messages', color: '#3b82f6', emissive: '#1d4ed8', fraction: 0.25 },
  { label: 'AI Responses', color: '#22c55e', emissive: '#15803d', fraction: 0.3 },
  { label: 'File Contents', color: '#f59e0b', emissive: '#d97706', fraction: 0.22 },
  { label: 'Tool Results', color: '#06b6d4', emissive: '#0891b2', fraction: 0.15 },
];

/* ---------- Container edges ---------- */
function ContainerBox({ fillPercent }: { fillPercent: number }) {
  const edgesRef = useRef<THREE.LineSegments>(null);
  const facesRef = useRef<THREE.Mesh>(null);

  const edgeColor = useMemo(() => {
    if (fillPercent > 85) return new THREE.Color('#ef4444');
    if (fillPercent > 70) return new THREE.Color('#f59e0b');
    return new THREE.Color('#6366f1');
  }, [fillPercent]);

  useFrame(({ clock }) => {
    if (!edgesRef.current) return;
    const mat = edgesRef.current.material as THREE.LineBasicMaterial;
    if (fillPercent > 85) {
      const pulse = 0.5 + Math.sin(clock.getElapsedTime() * 6) * 0.5;
      mat.color.lerpColors(new THREE.Color('#ef4444'), new THREE.Color('#ff0000'), pulse);
      mat.opacity = 0.6 + pulse * 0.4;
    } else {
      mat.color.copy(edgeColor);
      mat.opacity = 0.6;
    }
  });

  const boxGeo = useMemo(() => new THREE.BoxGeometry(4, 6, 3), []);
  const edgeGeo = useMemo(() => new THREE.EdgesGeometry(boxGeo), [boxGeo]);

  return (
    <group>
      {/* Transparent faces */}
      <mesh ref={facesRef} geometry={boxGeo}>
        <meshStandardMaterial
          color="#1e1b4b"
          transparent
          opacity={0.04}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      {/* Glowing edges */}
      <lineSegments ref={edgesRef} geometry={edgeGeo}>
        <lineBasicMaterial
          color={edgeColor}
          transparent
          opacity={0.6}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}

/* ---------- Content block ---------- */
function ContentBlock({
  config,
  yBottom,
  height,
  isCompacting,
  dropDelay,
}: {
  config: BlockConfig;
  yBottom: number;
  height: number;
  isCompacting: boolean;
  dropDelay: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  const targetY = useRef(yBottom + height / 2);
  const currentY = useRef(yBottom + height / 2 + 4); // start above
  const currentHeight = useRef(height);
  const targetHeight = useRef(height);
  const hasDropped = useRef(false);
  const dropTime = useRef(0);

  useEffect(() => {
    targetY.current = yBottom + height / 2;
    targetHeight.current = height;
  }, [yBottom, height]);

  useFrame(({ clock }) => {
    if (!meshRef.current || !matRef.current) return;
    const t = clock.getElapsedTime();

    // Handle initial drop animation
    if (!hasDropped.current) {
      if (t > dropDelay) {
        hasDropped.current = true;
        dropTime.current = t;
      } else {
        meshRef.current.visible = false;
        return;
      }
    }
    meshRef.current.visible = true;

    const timeSinceDrop = t - dropTime.current;
    const dropProgress = Math.min(1, timeSinceDrop * 2);
    // Eased bounce
    const eased = dropProgress < 1
      ? 1 - Math.pow(1 - dropProgress, 3) * Math.cos(dropProgress * Math.PI * 2) * (1 - dropProgress)
      : 1;

    if (isCompacting) {
      currentY.current += (targetY.current - currentY.current) * 0.08;
      currentHeight.current += (targetHeight.current - currentHeight.current) * 0.08;
    } else {
      const startY = targetY.current + 4;
      currentY.current = startY + (targetY.current - startY) * eased;
      currentHeight.current = targetHeight.current;
    }

    meshRef.current.position.y = currentY.current;
    meshRef.current.scale.y = currentHeight.current / height || 1;

    // Emissive pulse
    matRef.current.emissiveIntensity = 0.4 + Math.sin(t * 2 + dropDelay * 3) * 0.15;
  });

  return (
    <mesh ref={meshRef} position={[0, yBottom + height / 2, 0]}>
      <boxGeometry args={[3.6, height, 2.6]} />
      <meshStandardMaterial
        ref={matRef}
        color={config.color}
        emissive={config.emissive}
        emissiveIntensity={0.4}
        metalness={0.2}
        roughness={0.4}
        transparent
        opacity={0.75}
        toneMapped={false}
      />
    </mesh>
  );
}

/* ---------- Capacity label ---------- */
function CapacityLabel({ fillPercent }: { fillPercent: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const tokens = Math.round(fillPercent * 2000);
  const labelColor = fillPercent > 85 ? '#ef4444' : fillPercent > 70 ? '#f59e0b' : '#a78bfa';

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.position.y = 3.6 + Math.sin(t * 1.5) * 0.1;
  });

  return (
    <group ref={groupRef} position={[0, 3.6, 0]}>
      {/* Background pill */}
      <RoundedBox args={[3.5, 0.5, 0.1]} radius={0.1} smoothness={4}>
        <meshStandardMaterial
          color="#0f0a1e"
          emissive={labelColor}
          emissiveIntensity={0.15}
          transparent
          opacity={0.85}
          toneMapped={false}
        />
      </RoundedBox>
      <Text
        position={[0, 0, 0.08]}
        fontSize={0.2}
        color={labelColor}
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2"
      >
        {`${tokens.toLocaleString()} / 200,000 tokens`}
      </Text>
    </group>
  );
}

/* ---------- Compact button ---------- */
function CompactButton({ onClick }: { onClick: () => void }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.position.y = -3.8 + Math.sin(t * 2) * 0.05;
  });

  return (
    <group
      ref={groupRef}
      position={[0, -3.8, 1.8]}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <RoundedBox args={[1.8, 0.45, 0.15]} radius={0.1} smoothness={4}>
        <meshStandardMaterial
          color={hovered ? '#7c3aed' : '#4c1d95'}
          emissive={hovered ? '#a78bfa' : '#6d28d9'}
          emissiveIntensity={hovered ? 1 : 0.5}
          toneMapped={false}
        />
      </RoundedBox>
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.16}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2"
      >
        /compact
      </Text>
    </group>
  );
}

/* ---------- Legend ---------- */
function Legend() {
  return (
    <group position={[3, -1, 1.5]}>
      {BLOCK_TYPES.map((config, i) => (
        <group key={config.label} position={[0, 1.5 - i * 0.45, 0]}>
          <mesh position={[-0.15, 0, 0]}>
            <boxGeometry args={[0.2, 0.2, 0.08]} />
            <meshStandardMaterial
              color={config.color}
              emissive={config.emissive}
              emissiveIntensity={0.6}
              toneMapped={false}
            />
          </mesh>
          <Text
            position={[0.1, 0, 0]}
            fontSize={0.14}
            color="#9ca3af"
            anchorX="left"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff2"
          >
            {config.label}
          </Text>
        </group>
      ))}
    </group>
  );
}

/* ---------- Main component ---------- */
interface ContextWindow3DProps {
  fillPercent?: number;
  onCompact?: () => void;
}

export function ContextWindow3D({
  fillPercent = 47,
  onCompact,
}: ContextWindow3DProps) {
  const [isCompacting, setIsCompacting] = useState(false);
  const [currentFill, setCurrentFill] = useState(fillPercent);

  useEffect(() => {
    setCurrentFill(fillPercent);
  }, [fillPercent]);

  const handleCompact = useCallback(() => {
    setIsCompacting(true);
    setCurrentFill((prev) => Math.max(20, prev * 0.4));
    onCompact?.();
    setTimeout(() => setIsCompacting(false), 1500);
  }, [onCompact]);

  // Calculate block positions
  const blocks = useMemo(() => {
    const containerHeight = 5.6; // inner height
    const containerBottom = -2.8;
    const totalFill = (currentFill / 100) * containerHeight;

    let yOffset = containerBottom;
    return BLOCK_TYPES.map((config) => {
      const height = totalFill * config.fraction;
      const block = { config, yBottom: yOffset, height };
      yOffset += height;
      return block;
    });
  }, [currentFill]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 8, 5]} intensity={0.5} color="#e0e7ff" />
      <pointLight position={[-3, 3, 3]} intensity={0.8} color="#8b5cf6" distance={12} />
      <pointLight position={[3, -2, 3]} intensity={0.5} color="#06b6d4" distance={10} />

      {/* Container */}
      <ContainerBox fillPercent={currentFill} />

      {/* Content blocks */}
      {blocks.map((block, i) => (
        <ContentBlock
          key={block.config.label}
          config={block.config}
          yBottom={block.yBottom}
          height={block.height}
          isCompacting={isCompacting}
          dropDelay={i * 0.5 + 0.5}
        />
      ))}

      {/* Capacity label */}
      <CapacityLabel fillPercent={currentFill} />

      {/* Compact button */}
      <CompactButton onClick={handleCompact} />

      {/* Legend */}
      <Legend />

      {/* Interior particles */}
      <FloatingParticles
        count={80}
        color="#7c3aed"
        opacity={0.15}
        speed={0.08}
        size={0.015}
        spread={3}
      />

      {/* Background particles */}
      <FloatingParticles
        count={120}
        color="#4338ca"
        opacity={0.15}
        speed={0.1}
        size={0.012}
        spread={12}
      />

      {/* Controls */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.3}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI * 0.7}
        minPolarAngle={Math.PI * 0.3}
      />
    </>
  );
}

export default ContextWindow3D;
