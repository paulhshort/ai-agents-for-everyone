'use client';

import { useRef, useMemo } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { Text, RoundedBox, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { FloatingParticles } from './shared/floating-particles';

extend({ Line_: THREE.Line });

/* ---------- Node definitions ---------- */
interface LoopNode {
  label: string;
  color: string;
  emissive: string;
  angle: number; // radians, 0 = top
}

const RADIUS = 2.8;

const NODES: LoopNode[] = [
  { label: 'THINK', color: '#a78bfa', emissive: '#7c3aed', angle: -Math.PI / 2 },
  { label: 'ACT', color: '#60a5fa', emissive: '#2563eb', angle: 0 },
  { label: 'OBSERVE', color: '#22d3ee', emissive: '#0891b2', angle: Math.PI / 2 },
  { label: 'DECIDE', color: '#4ade80', emissive: '#16a34a', angle: Math.PI },
];

/* ---------- Orbit path ring ---------- */
function OrbitRing() {
  const ringRef = useRef<THREE.Line>(null);

  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      pts.push(
        new THREE.Vector3(
          Math.cos(angle) * RADIUS,
          Math.sin(angle) * RADIUS,
          0
        )
      );
    }
    return pts;
  }, []);

  const geo = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points]
  );

  return (
    <line_ ref={ringRef} geometry={geo}>
      <lineBasicMaterial
        color="#4c1d95"
        transparent
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </line_>
  );
}

/* ---------- Loop node ---------- */
function LoopNodeMesh({ node, orbProgress }: { node: LoopNode; orbProgress: React.RefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const x = Math.cos(node.angle) * RADIUS;
  const y = Math.sin(node.angle) * RADIUS;

  // Which node index are we?
  const nodeIdx = NODES.indexOf(node);

  useFrame(({ clock }) => {
    if (!groupRef.current || !matRef.current) return;
    const t = clock.getElapsedTime();

    // Determine proximity of orb to this node
    const orbAngle = orbProgress.current * Math.PI * 2 - Math.PI / 2; // start at top
    const normalizedOrbAngle = ((orbAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const normalizedNodeAngle = ((node.angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    let angleDiff = Math.abs(normalizedOrbAngle - normalizedNodeAngle);
    if (angleDiff > Math.PI) angleDiff = Math.PI * 2 - angleDiff;

    const proximity = Math.max(0, 1 - angleDiff / 0.6);
    const activation = Math.pow(proximity, 2);

    // Scale pulse
    const baseScale = 1 + activation * 0.4;
    groupRef.current.scale.setScalar(baseScale);

    // Emissive intensity
    matRef.current.emissiveIntensity = 0.3 + activation * 2;

    // Gentle hover
    groupRef.current.position.z = Math.sin(t * 1.5 + nodeIdx) * 0.05;

    // Point light
    if (lightRef.current) {
      lightRef.current.intensity = activation * 3;
    }
  });

  return (
    <group ref={groupRef} position={[x, y, 0]}>
      <RoundedBox args={[1, 0.7, 0.4]} radius={0.12} smoothness={4}>
        <meshStandardMaterial
          ref={matRef}
          color={node.color}
          emissive={node.emissive}
          emissiveIntensity={0.3}
          metalness={0.3}
          roughness={0.2}
          toneMapped={false}
        />
      </RoundedBox>
      {/* Outer glow */}
      <RoundedBox args={[1.15, 0.85, 0.5]} radius={0.15} smoothness={4}>
        <meshBasicMaterial
          color={node.color}
          transparent
          opacity={0.06}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </RoundedBox>
      {/* Label */}
      <Text
        position={[0, 0, 0.25]}
        fontSize={0.18}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2"
        outlineWidth={0.005}
        outlineColor="#000000"
      >
        {node.label}
      </Text>
      <pointLight
        ref={lightRef}
        color={node.color}
        intensity={0}
        distance={3}
        decay={2}
      />
    </group>
  );
}

/* ---------- Orbiting sphere with particle trail ---------- */
function OrbWithTrail({ progressRef }: { progressRef: React.RefObject<number> }) {
  const orbRef = useRef<THREE.Mesh>(null);
  const orbLightRef = useRef<THREE.PointLight>(null);
  const trailRef = useRef<THREE.Points>(null);

  const TRAIL_COUNT = 60;
  const trailPositions = useMemo(() => new Float32Array(TRAIL_COUNT * 3), []);
  const trailOpacities = useMemo(() => new Float32Array(TRAIL_COUNT), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const angle = progressRef.current * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(angle) * RADIUS;
    const y = Math.sin(angle) * RADIUS;

    if (orbRef.current) {
      orbRef.current.position.set(x, y, 0.3);
      // Pulse scale
      const pulse = 1 + Math.sin(t * 8) * 0.15;
      orbRef.current.scale.setScalar(pulse);
    }

    if (orbLightRef.current) {
      orbLightRef.current.position.set(x, y, 0.5);
      orbLightRef.current.intensity = 3 + Math.sin(t * 6) * 1;
    }

    // Update trail
    if (trailRef.current) {
      const posAttr = trailRef.current.geometry.getAttribute('position') as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;

      // Shift trail positions
      for (let i = TRAIL_COUNT - 1; i > 0; i--) {
        arr[i * 3] = arr[(i - 1) * 3];
        arr[i * 3 + 1] = arr[(i - 1) * 3 + 1];
        arr[i * 3 + 2] = arr[(i - 1) * 3 + 2];
        trailOpacities[i] = trailOpacities[i - 1] * 0.95;
      }
      arr[0] = x;
      arr[1] = y;
      arr[2] = 0.2;
      trailOpacities[0] = 1;

      posAttr.needsUpdate = true;
    }
  });

  return (
    <>
      {/* Orb */}
      <mesh ref={orbRef}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={4}
          toneMapped={false}
        />
      </mesh>
      {/* Orb outer glow */}
      <mesh position={[0, 0, 0.3]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      {/* Point light on orb */}
      <pointLight
        ref={orbLightRef}
        color="#c4b5fd"
        intensity={3}
        distance={5}
        decay={2}
      />
      {/* Particle trail */}
      <points ref={trailRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[trailPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#c4b5fd"
          transparent
          opacity={0.6}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

/* ---------- DONE branch arrow ---------- */
function DoneArrow({ progressRef }: { progressRef: React.RefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  // Position near DECIDE node (left)
  const decideX = Math.cos(Math.PI) * RADIUS;
  const decideY = Math.sin(Math.PI) * RADIUS;

  useFrame(({ clock }) => {
    if (!groupRef.current || !matRef.current) return;
    const t = clock.getElapsedTime();

    // Flash when orb is near DECIDE
    const orbAngle = ((progressRef.current * Math.PI * 2 - Math.PI / 2) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
    const decideAngle = ((Math.PI % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    let diff = Math.abs(orbAngle - decideAngle);
    if (diff > Math.PI) diff = Math.PI * 2 - diff;
    const proximity = Math.max(0, 1 - diff / 0.4);

    matRef.current.emissiveIntensity = 0.2 + proximity * 1.5;
    matRef.current.opacity = 0.4 + proximity * 0.6;

    groupRef.current.position.x = decideX - 1.3;
    groupRef.current.position.y = decideY - 0.8;
  });

  return (
    <group ref={groupRef} position={[decideX - 1.3, decideY - 0.8, 0]}>
      {/* Arrow body */}
      <mesh rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.6, 0.08, 0.08]} />
        <meshStandardMaterial
          ref={matRef}
          color="#4ade80"
          emissive="#16a34a"
          emissiveIntensity={0.2}
          transparent
          opacity={0.4}
          toneMapped={false}
        />
      </mesh>
      {/* Arrow head */}
      <mesh position={[-0.25, -0.25, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <coneGeometry args={[0.08, 0.2, 8]} />
        <meshStandardMaterial
          color="#4ade80"
          emissive="#16a34a"
          emissiveIntensity={0.3}
          transparent
          opacity={0.5}
          toneMapped={false}
        />
      </mesh>
      {/* DONE label */}
      <Text
        position={[-0.5, -0.5, 0]}
        fontSize={0.16}
        color="#4ade80"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2"
      >
        DONE
      </Text>
    </group>
  );
}

/* ---------- Continue arrow (loops back) ---------- */
function ContinueArrow({ progressRef }: { progressRef: React.RefObject<number> }) {
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  // Position near DECIDE, pointing back up toward THINK
  const decideX = Math.cos(Math.PI) * RADIUS;
  const decideY = Math.sin(Math.PI) * RADIUS;

  useFrame(() => {
    if (!matRef.current) return;
    const orbAngle = ((progressRef.current * Math.PI * 2 - Math.PI / 2) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
    const decideAngle = ((Math.PI % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    let diff = Math.abs(orbAngle - decideAngle);
    if (diff > Math.PI) diff = Math.PI * 2 - diff;
    const proximity = Math.max(0, 1 - diff / 0.4);
    matRef.current.emissiveIntensity = 0.2 + proximity * 1.5;
    matRef.current.opacity = 0.4 + proximity * 0.6;
  });

  return (
    <group position={[decideX - 0.6, decideY + 0.9, 0]}>
      {/* Arrow body going up */}
      <mesh rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.5, 0.08, 0.08]} />
        <meshStandardMaterial
          ref={matRef}
          color="#a78bfa"
          emissive="#7c3aed"
          emissiveIntensity={0.2}
          transparent
          opacity={0.4}
          toneMapped={false}
        />
      </mesh>
      {/* Arrow head */}
      <mesh position={[0.15, 0.2, 0]} rotation={[0, 0, Math.PI / 6]}>
        <coneGeometry args={[0.08, 0.2, 8]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#7c3aed"
          emissiveIntensity={0.3}
          transparent
          opacity={0.5}
          toneMapped={false}
        />
      </mesh>
      {/* LOOP label */}
      <Text
        position={[-0.1, 0.45, 0]}
        fontSize={0.13}
        color="#a78bfa"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2"
      >
        LOOP
      </Text>
    </group>
  );
}

/* ---------- Background wireframe sphere ---------- */
function BackgroundSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.03;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[5.5, 2]} />
      <meshBasicMaterial
        color="#2e1065"
        wireframe
        transparent
        opacity={0.06}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ---------- Connecting arcs between adjacent nodes ---------- */
function NodeArcs() {
  const arcs = useMemo(() => {
    const result: THREE.BufferGeometry[] = [];
    for (let i = 0; i < NODES.length; i++) {
      const startAngle = NODES[i].angle;
      const endAngle = NODES[(i + 1) % NODES.length].angle;
      let diff = endAngle - startAngle;
      if (diff < 0) diff += Math.PI * 2;

      const pts: THREE.Vector3[] = [];
      const steps = 30;
      for (let s = 0; s <= steps; s++) {
        const a = startAngle + (diff * s) / steps;
        pts.push(new THREE.Vector3(Math.cos(a) * RADIUS, Math.sin(a) * RADIUS, 0));
      }
      result.push(new THREE.BufferGeometry().setFromPoints(pts));
    }
    return result;
  }, []);

  return (
    <>
      {arcs.map((geo, i) => (
        <line_ key={i} geometry={geo}>
          <lineBasicMaterial
            color={NODES[i].color}
            transparent
            opacity={0.2}
            blending={THREE.AdditiveBlending}
          />
        </line_>
      ))}
    </>
  );
}

/* ---------- Main component ---------- */
export function AgenticLoop() {
  const progressRef = useRef(0);

  useFrame((_, delta) => {
    // Orbit speed: ~8 seconds per loop
    progressRef.current = (progressRef.current + delta * 0.125) % 1;
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.12} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#e0e7ff" />

      {/* Whole assembly rotates gently */}
      <group>
        {/* Background sphere */}
        <BackgroundSphere />

        {/* Orbit ring */}
        <OrbitRing />

        {/* Arc connections */}
        <NodeArcs />

        {/* Nodes */}
        {NODES.map((node) => (
          <LoopNodeMesh
            key={node.label}
            node={node}
            orbProgress={progressRef}
          />
        ))}

        {/* Orbiting sphere */}
        <OrbWithTrail progressRef={progressRef} />

        {/* Branch arrows */}
        <DoneArrow progressRef={progressRef} />
        <ContinueArrow progressRef={progressRef} />

        {/* Center label */}
        <Text
          position={[0, 0, 0.1]}
          fontSize={0.25}
          color="#a78bfa"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff2"
          outlineWidth={0.01}
          outlineColor="#1e1b4b"
        >
          Agentic Loop
        </Text>
      </group>

      {/* Atmospheric particles */}
      <FloatingParticles
        count={200}
        color="#7c3aed"
        opacity={0.2}
        speed={0.12}
        size={0.018}
        spread={10}
      />

      {/* Controls */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.4}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI * 0.7}
        minPolarAngle={Math.PI * 0.3}
      />
    </>
  );
}

export default AgenticLoop;
