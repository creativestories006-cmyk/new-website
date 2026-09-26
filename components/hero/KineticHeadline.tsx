"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.035, delayChildren: 0.15 },
  },
};

const char = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

function SplitLine({ text }: { text: string }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        variants={container}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {text.split("").map((ch, i) => (
          <motion.span key={i} variants={char} className="inline-block">
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
}

export default function KineticHeadline() {
  return (
    <h1 className="font-display font-medium leading-[0.95] text-hero-mobile md:text-hero-desktop tracking-tightest text-bone">
      <div>
        <SplitLine text="DISCOVER" />
      </div>
      <div>
        <SplitLine text="WHAT'S" />{" "}
        <span className="text-accent">
          <SplitLine text="NEXT." />
        </span>
      </div>
    </h1>
  );
}
