"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { setCursorLabel } from "@/hooks/useCursor";

/**
 * Drag-to-rotate viewer. In production this reads a real 24–36 frame
 * image sequence per product; here it cycles the available gallery
 * images by drag delta so the interaction is fully functional today
 * and only needs richer assets swapped in later.
 */
export default function ProductSpinViewer({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [frame, setFrame] = useState(0);
  const dragStartX = useRef(0);
  const dragging = useRef(false);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    dragStartX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      const delta = e.clientX - dragStartX.current;
      if (Math.abs(delta) > 40) {
        setFrame((f) => (f + (delta > 0 ? 1 : -1) + images.length) % images.length);
        dragStartX.current = e.clientX;
      }
    },
    [images.length]
  );

  const handlePointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div
      className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 cursor-grab active:cursor-grabbing select-none touch-pan-y"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onMouseEnter={() => setCursorLabel("Drag")}
      onMouseLeave={() => setCursorLabel("")}
    >
      {images.map((src, i) => (
        <motion.div
          key={src + i}
          className="absolute inset-0"
          animate={{ opacity: i === frame ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover pointer-events-none"
            sizes="(min-width: 768px) 520px, 100vw"
            draggable={false}
          />
        </motion.div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-ink/70 backdrop-blur-sm">
        <span className="font-mono text-[10px] text-bone/80 tracking-wide">
          DRAG TO ROTATE
        </span>
      </div>
    </div>
  );
}
