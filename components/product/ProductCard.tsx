"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/lib/types";
import { formatPrice, discountPercent, cn } from "@/lib/utils";
import { setCursorLabel } from "@/hooks/useCursor";

export default function ProductCard({
  product,
  className,
  priority = false,
}: {
  product: Product;
  className?: string;
  priority?: boolean;
}) {
  const discount = discountPercent(product.price, product.originalPrice);

  return (
    <Link
      href={`/product/${product.slug}`}
      onMouseEnter={() => setCursorLabel("View")}
      onMouseLeave={() => setCursorLabel("")}
      className={cn("group block", className)}
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 80vw"
          className="object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
        />
        {discount && (
          <span className="absolute top-3 left-3 bg-deal text-bone text-xs font-mono px-2.5 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-bone/40 text-xs font-mono uppercase truncate">
            {product.brand}
          </p>
          <p className="text-bone group-hover:text-accent transition-colors truncate">
            {product.name}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-bone font-medium">
            {formatPrice(product.price, product.currency)}
          </p>
          {product.originalPrice && (
            <p className="text-bone/40 text-xs line-through">
              {formatPrice(product.originalPrice, product.currency)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
