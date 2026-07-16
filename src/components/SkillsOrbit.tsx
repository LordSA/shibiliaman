import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

interface Skill {
  name: string;
  icon: string;
  level: number;
  radius: number;
  speed: number;
  offset: number;
}

const SKILLS_DATA: Skill[] = [
  { name: 'C++', icon: 'cplusplus', level: 2, radius: 1.2, speed: 0.3, offset: 0 },
  { name: 'Python', icon: 'python', level: 3, radius: 1.8, speed: 0.25, offset: Math.PI / 3 },
  { name: 'JavaScript', icon: 'javascript', level: 2, radius: 2.4, speed: 0.2, offset: (2 * Math.PI) / 3 },
  { name: 'Java', icon: 'java', level: 2, radius: 3.0, speed: 0.18, offset: Math.PI },
  { name: 'Flutter', icon: 'flutter', level: 1, radius: 3.6, speed: 0.15, offset: (4 * Math.PI) / 3 },
  { name: 'Figma', icon: 'figma', level: 3, radius: 4.2, speed: 0.12, offset: (5 * Math.PI) / 3 },
];

function OrbitRing({ radius }: { radius: number }) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const theta = (i / 64) * 2 * Math.PI;
      pts.push(new THREE.Vector3(radius * Math.cos(theta), 0, radius * Math.sin(theta)));
    }
    return pts;
  }, [radius]);

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  const lineObj = useMemo(() => {
    return new THREE.Line(
      lineGeometry,
      new THREE.LineBasicMaterial({ color: '#27272a', opacity: 0.4, transparent: true })
    );
  }, [lineGeometry]);

  return <primitive object={lineObj} />;
}

function OrbitingNode({ skill }: { skill: Skill }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      const angle = time * skill.speed + skill.offset;
      ref.current.position.x = skill.radius * Math.cos(angle);
      ref.current.position.z = skill.radius * Math.sin(angle);
    }
  });

  return (
    <group ref={ref}>
      <Html distanceFactor={10} center>
        <div className="bg-[#0c0c0e] border border-zinc-800 p-3 flex flex-col items-center gap-2 rounded-xl shadow-lg select-none w-28 group hover:border-[#c5a059] transition-colors duration-300">
          <div className="relative">
            <img
              src={skill.icon === 'figma' ? 'https://devicon-website.vercel.app/api/figma/original.svg' : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
              alt={skill.name}
              className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <span className="text-[9px] font-mono uppercase font-black text-zinc-400 group-hover:text-white transition-colors">{skill.name}</span>
          
          <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden mt-1">
            <div 
              className="h-full bg-[#c5a059] transition-all duration-500"
              style={{ width: `${(skill.level / 3) * 100}%` }}
            />
          </div>
        </div>
      </Html>
    </group>
  );
}

function OrbitSystem() {
  const systemRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (systemRef.current) {
      systemRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={systemRef} rotation={[Math.PI / 12, 0, 0]}>
      {SKILLS_DATA.map((skill) => (
        <React.Fragment key={skill.name}>
          <OrbitRing radius={skill.radius} />
          <OrbitingNode skill={skill} />
        </React.Fragment>
      ))}
    </group>
  );
}

export default function SkillsOrbit() {
  return (
    <div className="w-full h-[500px] bg-black/40 border border-zinc-900 rounded-2xl overflow-hidden relative" style={{ touchAction: 'none' }}>
      <Canvas camera={{ position: [0, 5, 8], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <OrbitSystem />
      </Canvas>
    </div>
  );
}
