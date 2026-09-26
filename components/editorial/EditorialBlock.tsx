"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { setCursorLabel } from "@/hooks/useCursor";
import { cn } from "@/lib/utils";

export default function EditorialBlock({
  product,
  reverse = false,
  index,
}: {
  product: Product;
  reverse?: boolean;
  index: number;
}) {
  return (
    <div
      className={cn(
        "grid md:grid-cols-2 gap-8 md:gap-16 items-center py-14 border-b hairline-light",
        reverse && "md:[direction:rtl]"
      )}
    >
      <motion.div
        initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-[5/4] rounded-2xl overflow-hidden md:[direction:ltr]"
        onMouseEnter={() => setCursorLabel("View")}
        onMouseLeave={() => setCursorLabel("")}
      >
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 520px, 100vw"
          />
        </Link>
      </motion.div>

      <div className="md:[direction:ltr]">
        <p className="font-mono text-xs text-char/40 mb-3">
          {String(index).padStart(2, "0")} — {product.category.toUpperCase()}
        </p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-serif text-2xl md:text-3xl text-char hover:text-accent transition-colors text-balance">
            {product.name}
          </h3>
        </Link>
        <blockquote className="mt-4 pl-4 border-l-2 border-accent text-char/70 italic leading-relaxed">
          &ldquo;{product.whyInteresting}&rdquo;
        </blockquote>
        <div className="mt-5 flex items-center gap-4">
          <span className="font-serif text-xl text-char">
            {formatPrice(product.price, product.currency)}
          </span>
          <Link
            href={`/product/${product.slug}`}
            className="text-sm text-char/60 underline underline-offset-4 hover:text-accent"
          >
            Read the full pick →
          </Link>
        </div>
      </div>
    </div>
  );
}
