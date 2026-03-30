'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

/* ---------- Configuration ---------- */
const LAYER_SIZES = [5, 7, 7, 3];
const LAYER_LABELS = ['Input', 'Processing', 'Processing', 'Output'];
const LAYER_SPACING = 3.2;
const NODE_SPACING = 1.1;
const NODE_RADIUS = 0.22;

const COLOR_INACTIVE = '#4c1d95';
const COLOR_ACTIVE = '#22d3ee';

/* ---------- Compute layer positions ---------- */
function getLayerPositions(): [number, number, number][][] {
  const totalWidth = (LAYER_SIZES.length - 1) * LAYER_SPACING;
  const startX = -totalWidth / 2;

  return LAYER_SIZES.map((size, layerIdx) => {
    const x = startX + layerIdx * LAYER_SPACING;
    const totalHeight = (size - 1) * NODE_SPACING;
    const startY = totalHeight / 2;
    const positions: [number, number, number][] = [];
    for (let n = 0; n < size; n++) {
      positions.push([x, startY - n * NODE_SPACING, 0]);
    }
    return positions;
  });
}

/* ---------- Single animated node ---------- */
function Node({ position, layerIdx, nodeIdx }: {
  position: [number, number, number];
  layerIdx: number;
  nodeIdx: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const wavePhase = t * 1.5 - layerIdx * 1.5 - nodeIdx * 0.2;
    const activation = Math.pow(Math.max(0, Math.sin(wavePhase)), 3);

    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      const c = new THREE.Color(COLOR_INACTIVE).lerp(new THREE.Color(COLOR_ACTIVE), activation);
      mat.emissive.copy(c);
      mat.emissiveIntensity = 0.3 + activation * 2;
      meshRef.current.scale.setScalar(1 + activation * 0.3);
    }

    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + activation * 0.6);
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = activation * 0.3;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[NODE_RADIUS, 16, 16]} />
        <meshStandardMaterial
          color={COLOR_INACTIVE}
          emissive={COLOR_INACTIVE}
          emissiveIntensity={0.3}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[NODE_RADIUS * 2, 16, 16]} />
        <meshBasicMaterial
          color={COLOR_ACTIVE}
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ---------- Connection line between two nodes ---------- */
function Connection({ from, to, layerIdx, idx }: {
  from: [number, number, number];
  to: [number, number, number];
  layerIdx: number;
  idx: number;
}) {
  const lineRef = useRef<THREE.Line>(null);

  useFrame(({ clock }) => {
    if (!lineRef.current) return;
    const t = clock.getElapsedTime();
    const wavePhase = t * 1.8 - layerIdx * 1.2 - idx * 0.03;
    const activation = Math.pow(Math.max(0, Math.sin(wavePhase)), 4);

    const mat = lineRef.current.material as THREE.LineBasicMaterial;
    const c = new THREE.Color('#1e1b4b').lerp(new THREE.Color('#a78bfa'), activation);
    mat.color.copy(c);
    mat.opacity = 0.06 + activation * 0.6;
  });

  return (
    <Line
      ref={lineRef as any}
      points={[from, to]}
      color="#1e1b4b"
      lineWidth={1}
      transparent
      opacity={0.06}
    />
  );
}

/* ---------- Layer label ---------- */
function LayerLabel({ text, position }: { text: string; position: [number, number, number] }) {
  return (
    <Text
      position={position}
      fontSize={0.28}
      color="#a78bfa"
      anchorX="center"
      anchorY="top"
      font={undefined}
    >
      {text}
    </Text>
  );
}

/* ---------- Main scene ---------- */
export function NeuralNetwork() {
  const allPositions = useMemo(getLayerPositions, []);

  return (
    <group>
      {/* Ambient + directional lights */}
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#8b5cf6" />
      <directionalLight position={[-5, -3, 3]} intensity={0.15} color="#06b6d4" />

      {/* Nodes */}
      {allPositions.map((layerPositions, layerIdx) =>
        layerPositions.map((pos, nodeIdx) => (
          <Node
            key={`node-${layerIdx}-${nodeIdx}`}
            position={pos}
            layerIdx={layerIdx}
            nodeIdx={nodeIdx}
          />
        ))
      )}

      {/* Connections */}
      {allPositions.slice(0, -1).map((fromLayer, layerIdx) => {
        const toLayer = allPositions[layerIdx + 1];
        let idx = 0;
        return fromLayer.map((fromPos) =>
          toLayer.map((toPos) => (
            <Connection
              key={`conn-${layerIdx}-${idx}`}
              from={fromPos}
              to={toPos}
              layerIdx={layerIdx}
              idx={idx++}
            />
          ))
        );
      })}

      {/* Labels */}
      {allPositions.map((layerPositions, layerIdx) => {
        const x = layerPositions[0][0];
        const bottomY = layerPositions[layerPositions.length - 1][1];
        return (
          <LayerLabel
            key={`label-${layerIdx}`}
            text={LAYER_LABELS[layerIdx]}
            position={[x, bottomY - 0.7, 0]}
          />
        );
      })}

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </group>
  );
}
