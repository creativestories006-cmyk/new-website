"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import KineticHeadline from "./KineticHeadline";
import HeroFallback from "./HeroFallback";
import Button from "@/components/ui/Button";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const maskInset = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] bg-ink overflow-hidden"
    >
      <motion.div
        style={{
          clipPath: useTransform(
            maskInset,
            (v) => `inset(0% ${v} 0% ${v})`
          ),
          opacity,
          scale,
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0">
          {isMobile ? <HeroFallback /> : <HeroScene />}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink pointer-events-none" />

        <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-16 pt-28 pb-14">
          <p className="font-mono text-xs text-bone/50 tracking-wide">
            SHOPNEXA / DISCOVERY INDEX — 2026
          </p>

          <div>
            <KineticHeadline />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-6 max-w-md text-bone/60 text-[15px] leading-relaxed"
            >
              A curated index of the products worth your attention this
              season — across tech, style, home and beyond.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.7 }}
              className="mt-8 flex items-center gap-4"
            >
              <Button href="/shop">Start exploring</Button>
              <Button href="/trending" variant="ghost">
                See what&rsquo;s trending
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-bone/40"
      >
        <span className="font-mono text-[10px] tracking-wide">SCROLL</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="block w-px h-6 bg-bone/40"
        />
      </motion.div>
    </section>
  );
}
