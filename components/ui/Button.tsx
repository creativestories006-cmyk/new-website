"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  magnetic?: boolean;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  magnetic = true,
  type = "button",
  target,
  rel,
  fullWidth = false,
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const styles = cn(
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full transition-colors duration-300",
    variant === "primary" && "bg-accent text-ink hover:bg-accent-glow",
    variant === "secondary" &&
      "bg-transparent border border-white/20 text-bone hover:border-white/50",
    variant === "ghost" && "bg-transparent text-bone hover:text-accent",
    className
  );

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className={fullWidth ? "block w-full" : "inline-block"}
    >
      <span className={cn(styles, fullWidth && "w-full")}>{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={fullWidth ? "block w-full" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={fullWidth ? "block w-full" : "inline-block"}
    >
      {content}
    </button>
  );
}
