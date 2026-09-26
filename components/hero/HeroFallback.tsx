"use client";

import { motion } from "framer-motion";

const SHAPES = [
  { size: 180, color: "#FF5A36", top: "10%", left: "-8%", duration: 9 },
  { size: 130, color: "#2952E3", top: "55%", left: "70%", duration: 11 },
  { size: 90, color: "#7C5CBF", top: "75%", left: "10%", duration: 7 },
];

export default function HeroFallback() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {SHAPES.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-30 blur-2xl"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: s.left,
            background: s.color,
          }}
          animate={{
            y: [0, -24, 0],
            x: [0, 12, 0],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
