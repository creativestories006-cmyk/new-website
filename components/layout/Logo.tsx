import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "font-display font-medium tracking-tight text-lg select-none",
        className
      )}
      aria-label="SHOPNEXA — home"
    >
      SHOP<span className="text-accent">X</span>
    </Link>
  );
}
