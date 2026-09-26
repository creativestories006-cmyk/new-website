import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AffiliateDisclosure({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-xs leading-relaxed",
        light ? "text-char/50" : "text-bone/40",
        className
      )}
    >
      This is an affiliate link — SHOPNEXA may earn a commission at no extra
      cost to you.{" "}
      <Link
        href="/affiliate-disclosure"
        className="underline underline-offset-2 hover:text-accent"
      >
        Learn more
      </Link>
      .
    </p>
  );
}
