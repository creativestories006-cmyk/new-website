"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

const SHAPES: {
  position: [number, number, number];
  scale: number;
  geometry: "torus" | "icosahedron" | "capsule" | "octahedron";
  color: string;
}[] = [
  { position: [-2.4, 0.6, 0], scale: 1, geometry: "torus", color: "#FF5A36" },
  { position: [2.2, -0.4, -1], scale: 1.3, geometry: "icosahedron", color: "#2952E3" },
  { position: [0.6, 1.2, -1.5], scale: 0.7, geometry: "octahedron", color: "#F5F3EF" },
  { position: [-1.2, -1.3, -0.5], scale: 0.9, geometry: "capsule", color: "#7C5CBF" },
  { position: [2.8, 1.4, -2], scale: 0.6, geometry: "torus", color: "#E0A526" },
];

function Shape({
  position,
  scale,
  geometry,
  color,
}: (typeof SHAPES)[number]) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry === "torus" && <torusGeometry args={[0.7, 0.25, 32, 100]} />}
        {geometry === "icosahedron" && <icosahedronGeometry args={[0.9, 0]} />}
        {geometry === "octahedron" && <octahedronGeometry args={[0.9, 0]} />}
        {geometry === "capsule" && <capsuleGeometry args={[0.4, 1, 8, 16]} />}
        <meshStandardMaterial
          color={color}
          roughness={0.25}
          metalness={0.6}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
}

function CursorParallaxRig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.03;
    camera.position.y += (pointer.y * 0.4 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  const shapes = useMemo(() => SHAPES, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <Environment preset="city" />
      {shapes.map((s, i) => (
        <Shape key={i} {...s} />
      ))}
      <CursorParallaxRig />
    </Canvas>
  );
}
