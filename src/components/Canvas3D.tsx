import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// Matrix-style falling code columns as points
function MatrixRain() {
  const count = 600;
  const meshRef = useRef<THREE.Points>(null);

  const { positions, velocities, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      velocities[i] = 0.01 + Math.random() * 0.04;

      // Mostly green, some cyan
      const g = 0.7 + Math.random() * 0.3;
      colors[i * 3]     = 0;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = Math.random() > 0.8 ? 0.8 : 0.1;
    }
    return { positions, velocities, colors };
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    const pos = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] -= velocities[i];
      if (pos[i * 3 + 1] < -10) {
        pos[i * 3 + 1] = 10;
        pos[i * 3]     = (Math.random() - 0.5) * 30;
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

// Wireframe cube — like a data structure visualization
function DataCube() {
  const group = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const h = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = t * 0.08 + mouse.current.y * 0.2;
    group.current.rotation.y = t * 0.12 + mouse.current.x * 0.2;
  });

  return (
    <group ref={group}>
      {/* Outer box */}
      <mesh>
        <boxGeometry args={[2.4, 2.4, 2.4]} />
        <meshBasicMaterial color="#00ff88" wireframe transparent opacity={0.15} />
      </mesh>
      {/* Inner box rotated */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <boxGeometry args={[1.6, 1.6, 1.6]} />
        <meshBasicMaterial color="#00ffcc" wireframe transparent opacity={0.25} />
      </mesh>
      {/* Core dot */}
      <mesh>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color="#00ff88" />
      </mesh>
      {/* Corner connectors as lines via small boxes */}
      {[[-1.2, 0, 0], [1.2, 0, 0], [0, -1.2, 0], [0, 1.2, 0]].map((pos, i) => (
        <mesh key={i} position={pos as [number,number,number]}>
          <sphereGeometry args={[0.04, 6, 6]} />
          <meshBasicMaterial color="#00ccff" />
        </mesh>
      ))}
    </group>
  );
}

// Orbiting binary rings
function BinaryOrbit() {
  const ring1 = useRef<THREE.Group>(null);
  const ring2 = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ring1.current) ring1.current.rotation.z = t * 0.3;
    if (ring2.current) ring2.current.rotation.x = t * 0.2;
  });

  return (
    <>
      <group ref={ring1}>
        <mesh>
          <torusGeometry args={[3.5, 0.008, 2, 100]} />
          <meshBasicMaterial color="#00ff88" transparent opacity={0.2} />
        </mesh>
      </group>
      <group ref={ring2}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[4.2, 0.005, 2, 100]} />
          <meshBasicMaterial color="#00ccff" transparent opacity={0.12} />
        </mesh>
      </group>
    </>
  );
}

export default function Canvas3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none h-screen w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: false }}>
        <ambientLight intensity={0.05} />
        <MatrixRain />
        <DataCube />
        <BinaryOrbit />
        <EffectComposer>
          <Bloom luminanceThreshold={0.05} luminanceSmoothing={0.9} intensity={1.0} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
