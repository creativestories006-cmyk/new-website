"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import ProductSpinViewer from "@/components/product/ProductSpinViewer";
import Button from "@/components/ui/Button";
import AffiliateDisclosure from "@/components/product/AffiliateDisclosure";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function FeaturedStory({ product }: { product: Product }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return; // simplified reveal-on-scroll only, no pinning on mobile
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        if (!copyRef.current) return;
        gsap.fromTo(
          copyRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
            },
          }
        );
      }, sectionRef);
    })();

    return () => ctx?.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="bg-ink py-20 md:py-32 px-6 md:px-16 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <ProductSpinViewer
          images={
            product.gallery.length > 1
              ? [...product.gallery, ...product.gallery].slice(0, 4)
              : [product.image, product.image]
          }
          alt={product.name}
        />

        <div ref={copyRef}>
          <p className="font-mono text-xs text-muted mb-4">
            02 / FEATURED PRODUCT STORY
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.02] text-bone text-balance">
            {product.tagline}
          </h2>
          <p className="mt-6 text-bone/60 leading-relaxed max-w-md">
            {product.whyInteresting}
          </p>

          <ul className="mt-8 space-y-3">
            {product.features.slice(0, 3).map((f) => (
              <li key={f} className="flex gap-3 text-sm text-bone/80">
                <span className="text-accent mt-1">—</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-4">
            <span className="font-serif text-3xl text-bone">
              {formatPrice(product.price, product.currency)}
            </span>
            <Link
              href={`/product/${product.slug}`}
              className="text-sm text-bone/50 underline underline-offset-4 hover:text-accent"
            >
              Full details
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button
              href={product.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
            >
              Shop at {product.retailer}
            </Button>
          </div>
          <AffiliateDisclosure className="mt-4" />
        </div>
      </div>
    </section>
  );
}
