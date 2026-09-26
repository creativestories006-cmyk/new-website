"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/hooks/useCursor";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function CursorFollower() {
  const isMobile = useIsMobile();
  const cursor = useCursor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isMobile) return;
    document.documentElement.classList.add("has-custom-cursor");
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);
    setVisible(true);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] flex items-center justify-center rounded-full bg-accent mix-blend-difference"
      animate={{
        x: cursor.x - (cursor.label ? 32 : 6),
        y: cursor.y - (cursor.label ? 32 : 6),
        width: cursor.label ? 64 : 12,
        height: cursor.label ? 64 : 12,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.4 }}
    >
      {cursor.label && (
        <span className="text-[10px] font-mono uppercase tracking-wide text-ink">
          {cursor.label}
        </span>
      )}
    </motion.div>
  );
}
