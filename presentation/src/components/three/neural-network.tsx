'use client';

import { useRef, useMemo } from 'react';
import { useFrame, extend, type ThreeElements } from '@react-three/fiber';
import { Text, OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';
import { FloatingParticles } from './shared/floating-particles';

// Avoid <line> collision with SVG line element
extend({ Line_: THREE.Line });

/* ---------- Configuration ---------- */
const LAYER_SIZES = [5, 7, 7, 3];
const LAYER_LABELS = ['Input', 'Processing', 'Processing', 'Output'];
const LAYER_SPACING = 3.2;
const NODE_SPACING = 1.1;
const NODE_RADIUS = 0.22;

const COLOR_INACTIVE = new THREE.Color('#4c1d95'); // dim purple
const COLOR_ACTIVE = new THREE.Color('#22d3ee'); // bright cyan
const COLOR_PEAK = new THREE.Color('#ffffff'); // white flash
const COLOR_CONNECTION_DIM = new THREE.Color('#1e1b4b');
const COLOR_CONNECTION_ACTIVE = new THREE.Color('#a78bfa');

/* ---------- Single Node ---------- */
function NeuralNode({
  position,
  layerIndex,
  nodeIndex,
}: {
  position: [number, number, number];
  layerIndex: number;
  nodeIndex: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    if (!matRef.current || !meshRef.current) return;
    const t = clock.getElapsedTime();

    // Wave sweeps left-to-right across layers
    const wavePhase = t * 1.8 - layerIndex * 1.2 - nodeIndex * 0.15;
    const activation = Math.pow(Math.max(0, Math.sin(wavePhase)), 3);

    // Blend color
    const c = new THREE.Color();
    c.lerpColors(COLOR_INACTIVE, COLOR_ACTIVE, activation);
    if (activation > 0.85) {
      c.lerp(COLOR_PEAK, (activation - 0.85) / 0.15);
    }

    matRef.current.color.copy(c);
    matRef.current.emissive.copy(c);
    matRef.current.emissiveIntensity = 0.3 + activation * 2.5;

    // Scale pulse
    const s = 1 + activation * 0.35;
    meshRef.current.scale.setScalar(s);

    // Point light intensity
    if (lightRef.current) {
      lightRef.current.intensity = activation * 2;
      lightRef.current.color.copy(c);
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[NODE_RADIUS, 32, 32]} />
        <meshStandardMaterial
          ref={matRef}
          color={COLOR_INACTIVE}
          emissive={COLOR_INACTIVE}
          emissiveIntensity={0.3}
          metalness={0.4}
          roughness={0.15}
          toneMapped={false}
        />
      </mesh>
      {/* Outer glow shell */}
      <mesh>
        <sphereGeometry args={[NODE_RADIUS * 1.5, 16, 16]} />
        <meshBasicMaterial
          color={COLOR_ACTIVE}
          transparent
          opacity={0.05}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <pointLight ref={lightRef} distance={2.5} intensity={0} decay={2} />
    </group>
  );
}

/* ---------- Connections between layers ---------- */
function LayerConnections({
  fromPositions,
  toPositions,
  layerIndex,
}: {
  fromPositions: [number, number, number][];
  toPositions: [number, number, number][];
  layerIndex: number;
}) {
  const linesRef = useRef<THREE.Group>(null);

  const lineData = useMemo(() => {
    const data: { from: THREE.Vector3; to: THREE.Vector3; idx: number }[] = [];
    let idx = 0;
    for (const fp of fromPositions) {
      for (const tp of toPositions) {
        data.push({
          from: new THREE.Vector3(...fp),
          to: new THREE.Vector3(...tp),
          idx: idx++,
        });
      }
    }
    return data;
  }, [fromPositions, toPositions]);

  useFrame(({ clock }) => {
    if (!linesRef.current) return;
    const t = clock.getElapsedTime();

    linesRef.current.children.forEach((child, i) => {
      const line = child as THREE.Line;
      const mat = line.material as THREE.LineBasicMaterial;
      const d = lineData[i];

      const wavePhase = t * 1.8 - layerIndex * 1.2 - (d.idx * 0.03);
      const activation = Math.pow(Math.max(0, Math.sin(wavePhase)), 4);

      const c = new THREE.Color();
      c.lerpColors(COLOR_CONNECTION_DIM, COLOR_CONNECTION_ACTIVE, activation);
      mat.color.copy(c);
      mat.opacity = 0.08 + activation * 0.7;
    });
  });

  return (
    <group ref={linesRef}>
      {lineData.map((d, i) => {
        const points = [d.from, d.to];
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line_ key={i} geometry={geo}>
            <lineBasicMaterial
              color={COLOR_CONNECTION_DIM}
              transparent
              opacity={0.08}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </line_>
        );
      })}
    </group>
  );
}

/* ---------- Layer label ---------- */
function LayerLabel({
  text,
  position,
}: {
  text: string;
  position: [number, number, number];
}) {
  return (
    <Text
      position={position}
      fontSize={0.28}
      color="#a78bfa"
      anchorX="center"
      anchorY="top"
      font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff2"
      outlineWidth={0.01}
      outlineColor="#1e1b4b"
    >
      {text}
    </Text>
  );
}

/* ---------- Main component ---------- */
export function NeuralNetwork() {
  // Compute node positions for each layer
  const layerPositions = useMemo(() => {
    const totalWidth = (LAYER_SIZES.length - 1) * LAYER_SPACING;
    const startX = -totalWidth / 2;

    return LAYER_SIZES.map((nodeCount, layerIdx) => {
      const x = startX + layerIdx * LAYER_SPACING;
      const totalHeight = (nodeCount - 1) * NODE_SPACING;
      const startY = totalHeight / 2;

      const positions: [number, number, number][] = [];
      for (let n = 0; n < nodeCount; n++) {
        positions.push([x, startY - n * NODE_SPACING, 0]);
      }
      return positions;
    });
  }, []);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#8b5cf6" />
      <directionalLight position={[-5, -3, 3]} intensity={0.15} color="#06b6d4" />

      {/* Connections */}
      {layerPositions.map((_, layerIdx) => {
        if (layerIdx >= layerPositions.length - 1) return null;
        return (
          <LayerConnections
            key={`conn-${layerIdx}`}
            fromPositions={layerPositions[layerIdx]}
            toPositions={layerPositions[layerIdx + 1]}
            layerIndex={layerIdx}
          />
        );
      })}

      {/* Nodes */}
      {layerPositions.map((positions, layerIdx) =>
        positions.map((pos, nodeIdx) => (
          <NeuralNode
            key={`node-${layerIdx}-${nodeIdx}`}
            position={pos}
            layerIndex={layerIdx}
            nodeIndex={nodeIdx}
          />
        ))
      )}

      {/* Labels */}
      {layerPositions.map((positions, layerIdx) => {
        const x = positions[0][0];
        const lowestY = positions[positions.length - 1][1];
        return (
          <LayerLabel
            key={`label-${layerIdx}`}
            text={LAYER_LABELS[layerIdx]}
            position={[x, lowestY - 0.7, 0]}
          />
        );
      })}

      {/* Background particles */}
      <FloatingParticles
        count={300}
        color="#7c3aed"
        opacity={0.3}
        speed={0.15}
        size={0.02}
        spread={14}
      />

      {/* Controls */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI * 0.7}
        minPolarAngle={Math.PI * 0.3}
      />
    </>
  );
}

export default NeuralNetwork;
