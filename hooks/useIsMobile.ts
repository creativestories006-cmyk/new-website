"use client";

import { useEffect, useState } from "react";

/**
 * Detects small viewports and coarse pointers (touch) so we can
 * disable WebGL, cursor-follow, and scroll-scrubbed heavy timelines
 * on devices where they'd hurt performance.
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(true); // default true = safe/cheap render on first paint

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    const update = () => {
      setIsMobile(mq.matches || coarsePointer.matches);
    };

    update();
    mq.addEventListener("change", update);
    coarsePointer.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      coarsePointer.removeEventListener("change", update);
    };
  }, [breakpoint]);

  return isMobile;
}
