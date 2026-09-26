"use client";

import { useEffect, useState } from "react";

export type CursorLabel = "" | "View" | "Shop" | "Explore" | "Drag";

interface CursorState {
  x: number;
  y: number;
  label: CursorLabel;
}

let listeners: ((s: CursorState) => void)[] = [];
let state: CursorState = { x: 0, y: 0, label: "" };

export function setCursorLabel(label: CursorLabel) {
  state = { ...state, label };
  listeners.forEach((l) => l(state));
}

export function useCursor() {
  const [cursor, setCursor] = useState<CursorState>(state);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      state = { ...state, x: e.clientX, y: e.clientY };
      listeners.forEach((l) => l(state));
    };
    const listener = (s: CursorState) => setCursor(s);
    listeners.push(listener);
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  return cursor;
}
