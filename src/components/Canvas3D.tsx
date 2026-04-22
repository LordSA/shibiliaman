import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function CenterPiece() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
      
      const targetX = mouse.current.y * 0.5;
      const targetY = mouse.current.x * 0.5;
      
      meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[1.2, 1.2, 1.2]}>
      <torusKnotGeometry args={[1, 0.3, 256, 32]} />
      <MeshDistortMaterial
        color="#000000"
        emissive="#ffffff"
        emissiveIntensity={1.5}
        roughness={0.1}
        metalness={1}
        distort={0.3}
        speed={1.5}
        wireframe={true}
      />
    </mesh>
  );
}

function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(camera.position, {
        z: 2.5,
        y: -1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      });
      
      gsap.to(camera.rotation, {
        x: Math.PI / 10,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      });
    });

    return () => ctx.revert();
  }, [camera]);

  return null;
}

export default function Canvas3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none h-screen w-full overflow-hidden transition-opacity duration-1000 animate-in fade-in mix-blend-screen opacity-80">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.2} />
        <CenterPiece />
        <CameraController />
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
