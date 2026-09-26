"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/lib/types";
import { formatPrice, discountPercent } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function DealBanner({ products }: { products: Product[] }) {
  return (
    <section className="bg-deal py-16 md:py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <p className="font-mono text-xs text-ink/60 mb-3">05 / DEALS</p>
            <h2 className="font-serif text-3xl md:text-5xl text-ink">
              Live price drops
            </h2>
          </div>
          <Button href="/deals" variant="secondary" className="!border-ink/30 !text-ink hover:!border-ink">
            View all deals
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p, i) => {
            const discount = discountPercent(p.price, p.originalPrice);
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/product/${p.slug}`}
                  className="block bg-ink rounded-xl overflow-hidden group"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 24vw, 45vw"
                    />
                    {discount && (
                      <span className="absolute top-2 left-2 bg-bone text-ink text-xs font-mono px-2 py-1 rounded-full">
                        -{discount}%
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-bone text-sm truncate group-hover:text-accent transition-colors">
                      {p.name}
                    </p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-bone font-medium">
                        {formatPrice(p.price, p.currency)}
                      </span>
                      {p.originalPrice && (
                        <span className="text-bone/40 text-xs line-through">
                          {formatPrice(p.originalPrice, p.currency)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
