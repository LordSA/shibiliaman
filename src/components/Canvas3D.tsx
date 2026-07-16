import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function BrutalistMesh() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    if (outerRef.current && innerRef.current) {
      outerRef.current.rotation.x += delta * 0.15;
      outerRef.current.rotation.y += delta * 0.2;

      innerRef.current.rotation.x -= delta * 0.25;
      innerRef.current.rotation.y -= delta * 0.15;

      const targetX = (mouse.current.y * Math.PI) / 6;
      const targetY = (mouse.current.x * Math.PI) / 6;

      outerRef.current.rotation.x += (targetX - outerRef.current.rotation.x) * 0.05;
      outerRef.current.rotation.y += (targetY - outerRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group>
      <mesh ref={outerRef}>
        <torusKnotGeometry args={[1.5, 0.35, 120, 10]} />
        <meshBasicMaterial 
          color="#00ffd1" 
          wireframe 
          transparent 
          opacity={0.15} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.85]} />
        <meshBasicMaterial 
          color="#c5a059" 
          wireframe 
          transparent 
          opacity={0.35} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function CameraController() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTriggerConfig = {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      };
      
      gsap.to(window, {
        scrollTrigger: scrollTriggerConfig
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

export default function Canvas3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none h-screen w-full overflow-hidden opacity-60 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }} dpr={[1, 1.5]}>
        <BrutalistMesh />
        <CameraController />
      </Canvas>
    </div>
  );
}
