'use client';

import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { FloatingParticles } from './shared/floating-particles';

/* ---------- Token types & colors ---------- */
type TokenType = 'word' | 'punctuation' | 'space' | 'subword';

const TOKEN_COLORS: Record<TokenType, string> = {
  word: '#3b82f6',
  punctuation: '#f59e0b',
  space: '#6b7280',
  subword: '#06b6d4',
};

const TOKEN_EMISSIVE: Record<TokenType, string> = {
  word: '#1d4ed8',
  punctuation: '#d97706',
  space: '#374151',
  subword: '#0891b2',
};

interface Token {
  text: string;
  type: TokenType;
  id: number;
}

/* ---------- Tokenizer ---------- */
function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  let id = 0;
  // Split into segments: words, punctuation, spaces
  const regex = /([a-zA-Z]+|[^a-zA-Z\s]|\s+)/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const seg = match[1];
    if (/^\s+$/.test(seg)) {
      tokens.push({ text: '·', type: 'space', id: id++ });
    } else if (/^[^a-zA-Z]$/.test(seg)) {
      tokens.push({ text: seg, type: 'punctuation', id: id++ });
    } else if (seg.length > 5) {
      // Break long words into subwords
      const mid = Math.ceil(seg.length / 2);
      tokens.push({ text: seg.slice(0, mid), type: 'subword', id: id++ });
      tokens.push({ text: seg.slice(mid), type: 'subword', id: id++ });
    } else {
      tokens.push({ text: seg, type: 'word', id: id++ });
    }
  }
  return tokens;
}

/* ---------- Pipeline tube ---------- */
function PipelineTube() {
  const tubeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!tubeRef.current) return;
    const mat = tubeRef.current.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = 0.15 + Math.sin(clock.getElapsedTime() * 2) * 0.08;
  });

  return (
    <group>
      {/* Main tube */}
      <mesh ref={tubeRef} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.6, 0.6, 14, 32, 1, true]} />
        <meshStandardMaterial
          color="#1e1b4b"
          emissive="#4c1d95"
          emissiveIntensity={0.15}
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
          metalness={0.5}
          roughness={0.3}
          toneMapped={false}
        />
      </mesh>
      {/* Edge rings */}
      {[-7, -3.5, 0, 3.5, 7].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.6, 0.02, 8, 32]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.8}
            toneMapped={false}
          />
        </mesh>
      ))}
      {/* Bottom glow line */}
      <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[14, 0.02, 0.02]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

/* ---------- Single token block ---------- */
function TokenBlock({
  token,
  progress,
}: {
  token: Token;
  progress: number; // 0 = left edge, 1 = right edge
}) {
  const groupRef = useRef<THREE.Group>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  const x = -7 + progress * 14;
  // Fade in at edges
  const edgeFade = Math.min(1, Math.min(progress, 1 - progress) * 5);
  const width = Math.max(0.5, token.text.length * 0.22 + 0.3);

  useFrame(({ clock }) => {
    if (!groupRef.current || !matRef.current) return;
    const t = clock.getElapsedTime();
    // Gentle float
    groupRef.current.position.y = Math.sin(t * 2 + token.id * 0.7) * 0.06;
    groupRef.current.position.z = Math.cos(t * 1.5 + token.id * 1.1) * 0.04;
    groupRef.current.rotation.z = Math.sin(t * 1.2 + token.id) * 0.03;
    matRef.current.opacity = edgeFade * 0.9;
    matRef.current.emissiveIntensity = 0.5 + Math.sin(t * 3 + token.id) * 0.3;
  });

  return (
    <group ref={groupRef} position={[x, 0, 0]}>
      <RoundedBox args={[width, 0.45, 0.35]} radius={0.08} smoothness={4}>
        <meshStandardMaterial
          ref={matRef}
          color={TOKEN_COLORS[token.type]}
          emissive={TOKEN_EMISSIVE[token.type]}
          emissiveIntensity={0.5}
          metalness={0.3}
          roughness={0.2}
          transparent
          opacity={0.9}
          toneMapped={false}
        />
      </RoundedBox>
      <Text
        position={[0, 0, 0.19]}
        fontSize={0.18}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2"
        outlineWidth={0.005}
        outlineColor="#000000"
      >
        {token.text}
      </Text>
    </group>
  );
}

/* ---------- Flow labels ---------- */
function FlowLabels() {
  return (
    <>
      <Text
        position={[-7.5, 1.2, 0]}
        fontSize={0.22}
        color="#a78bfa"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff2"
      >
        Text Input
      </Text>
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.22}
        color="#a78bfa"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff2"
      >
        Tokenization
      </Text>
      <Text
        position={[7.5, 1.2, 0]}
        fontSize={0.22}
        color="#a78bfa"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff2"
      >
        Token Stream
      </Text>
      {/* Legend */}
      {Object.entries(TOKEN_COLORS).map(([type, color], i) => (
        <group key={type} position={[-5 + i * 3.2, -1.5, 0]}>
          <mesh>
            <boxGeometry args={[0.2, 0.2, 0.1]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.6}
              toneMapped={false}
            />
          </mesh>
          <Text
            position={[0.3, 0, 0]}
            fontSize={0.16}
            color="#9ca3af"
            anchorX="left"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff2"
          >
            {type}
          </Text>
        </group>
      ))}
    </>
  );
}

/* ---------- Main component ---------- */
interface TokenFlowProps {
  text?: string;
}

export function TokenFlow({
  text = 'The AI agent reads your files and takes action',
}: TokenFlowProps) {
  const tokens = useMemo(() => tokenize(text), [text]);
  const [tokenStates] = useState(() =>
    tokens.map((_, i) => ({
      offset: i * 0.12, // stagger
    }))
  );

  const groupRef = useRef<THREE.Group>(null);
  const progressRef = useRef(0);

  // Store animated progress values per token
  const progressValues = useRef(tokens.map((_, i) => -0.1 - i * 0.08));

  useFrame((_, delta) => {
    progressRef.current += delta * 0.12;
    const baseProgress = progressRef.current;

    tokens.forEach((_, i) => {
      let p = baseProgress - tokenStates[i].offset;
      // Wrap around
      const totalCycle = 1 + tokens.length * 0.08 + 0.3;
      p = ((p % totalCycle) + totalCycle) % totalCycle;
      progressValues.current[i] = p;
    });
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} color="#e0e7ff" />
      <pointLight position={[-6, 0, 2]} intensity={1} color="#8b5cf6" distance={10} />
      <pointLight position={[6, 0, 2]} intensity={1} color="#06b6d4" distance={10} />

      {/* Pipeline */}
      <PipelineTube />

      {/* Token blocks */}
      <group ref={groupRef}>
        {tokens.map((token, i) => (
          <TokenBlockAnimated
            key={token.id}
            token={token}
            index={i}
            progressValues={progressValues}
          />
        ))}
      </group>

      {/* Labels */}
      <FlowLabels />

      {/* Background particles */}
      <FloatingParticles
        count={150}
        color="#6366f1"
        opacity={0.2}
        speed={0.1}
        size={0.015}
        spread={16}
      />

      {/* Controls */}
      <OrbitControls
        autoRotate={false}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI * 0.65}
        minPolarAngle={Math.PI * 0.35}
      />
    </>
  );
}

/* Animated wrapper that reads from the shared ref */
function TokenBlockAnimated({
  token,
  index,
  progressValues,
}: {
  token: Token;
  index: number;
  progressValues: React.RefObject<number[]>;
}) {
  const [progress, setProgress] = useState(0);

  useFrame(() => {
    if (progressValues.current) {
      setProgress(progressValues.current[index]);
    }
  });

  if (progress < 0 || progress > 1) return null;

  return <TokenBlock token={token} progress={progress} />;
}

export default TokenFlow;
