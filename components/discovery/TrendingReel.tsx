"use client";

import { useRef } from "react";
import { Product } from "@/lib/types";
import ProductCard from "@/components/product/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function TrendingReel({ products }: { products: Product[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (amount: number) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-ink py-20 md:py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            index="01 / TRENDING NOW"
            title="What everyone's adding to cart"
            description="Ranked by velocity, not sponsorship — the products moving fastest across our index this week."
            className="mb-0"
          />
          <div className="hidden md:flex gap-3 mb-14">
            <button
              onClick={() => scrollBy(-360)}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-bone"
            >
              ←
            </button>
            <button
              onClick={() => scrollBy(360)}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-bone"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-5 md:gap-6 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory"
        >
          {products.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              priority={i < 2}
              className="w-[68vw] sm:w-[42vw] md:w-[280px] shrink-0 snap-start"
            />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/trending" variant="secondary">
            View all trending
          </Button>
        </div>
      </div>
    </section>
  );
}
