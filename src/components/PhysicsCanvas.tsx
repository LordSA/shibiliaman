import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

const SKILLS = [
  { name: 'C++', tag: 'cplusplus' },
  { name: 'Python', tag: 'python' },
  { name: 'JavaScript', tag: 'javascript' },
  { name: 'Java', tag: 'java' },
  { name: 'Flutter', tag: 'flutter' },
  { name: 'Figma', tag: 'figma' },
  { name: 'React', tag: 'react' },
  { name: 'Astro', tag: 'astro' },
  { name: 'TypeScript', tag: 'typescript' }
];

export default function PhysicsCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [elements, setElements] = useState<{ id: number; name: string; x: number; y: number; angle: number; width: number; height: number }[]>([]);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = 400;

    const { Engine, World, Bodies, Mouse, MouseConstraint, Events, Runner } = Matter;

    const engine = Engine.create({
      gravity: { y: 0.8 }
    });

    const ground = Bodies.rectangle(width / 2, height + 30, width * 2, 60, { isStatic: true });
    const leftWall = Bodies.rectangle(-30, height / 2, 60, height * 2, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 30, height / 2, 60, height * 2, { isStatic: true });
    const ceiling = Bodies.rectangle(width / 2, -100, width * 2, 60, { isStatic: true });

    World.add(engine.world, [ground, leftWall, rightWall, ceiling]);

    const skillBodies = SKILLS.map((skill, index) => {
      const w = skill.name.length * 10 + 50;
      const h = 40;
      const x = Math.random() * (width - 150) + 75;
      const y = -100 - (index * 50);

      const body = Bodies.rectangle(x, y, w, h, {
        restitution: 0.6,
        friction: 0.1,
        frictionAir: 0.01,
        label: skill.name
      });

      return {
        body,
        name: skill.name,
        width: w,
        height: h
      };
    });

    World.add(engine.world, skillBodies.map(sb => sb.body));

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    World.add(engine.world, mouseConstraint);

    const runner = Runner.create();
    Runner.run(runner, engine);

    const updateStates = () => {
      const currentElements = skillBodies.map(sb => ({
        id: sb.body.id,
        name: sb.name,
        x: sb.body.position.x,
        y: sb.body.position.y,
        angle: sb.body.angle,
        width: sb.width,
        height: sb.height
      }));
      setElements(currentElements);
    };

    Events.on(engine, 'afterUpdate', updateStates);

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      Matter.Body.setPosition(ground, { x: newWidth / 2, y: height + 30 });
      Matter.Body.setPosition(rightWall, { x: newWidth + 30, y: height / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Events.off(engine, 'afterUpdate', updateStates);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[400px] border-4 border-black bg-black overflow-hidden select-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-0" width={800} height={400} />
      
      {elements.map(el => (
        <div
          key={el.id}
          className="absolute border-3 border-[#00ffd1] bg-[#101114] text-white px-4 py-2 font-mono text-xs font-black uppercase text-center flex items-center justify-center cursor-grab active:cursor-grabbing shadow-[3px_3px_0px_#c5a059]"
          style={{
            width: el.width,
            height: el.height,
            left: el.x - el.width / 2,
            top: el.y - el.height / 2,
            transform: `rotate(${el.angle}rad)`,
            transformOrigin: 'center center'
          }}
        >
          {el.name}
        </div>
      ))}
    </div>
  );
}
