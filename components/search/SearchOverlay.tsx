"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { formatPrice } from "@/lib/utils";

const POPULAR_SEARCHES = [
  "wireless earbuds",
  "desk lamp",
  "trail jacket",
  "kettlebell",
  "skincare serum",
];

export default function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.toLowerCase();
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-ink/98 backdrop-blur-sm pt-24 px-6 md:px-16"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center border-b border-white/20 pb-4">
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, brands, categories…"
                className="w-full bg-transparent font-serif text-2xl md:text-4xl text-bone placeholder:text-bone/30 outline-none"
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="font-mono text-xs text-bone hover:text-accent ml-4 shrink-0"
              >
                ESC
              </button>
            </div>

            {query.trim().length < 2 ? (
              <div className="mt-10 space-y-8">
                <div>
                  <p className="font-mono text-xs text-muted mb-3">
                    POPULAR SEARCHES
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {POPULAR_SEARCHES.map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-4 py-2 rounded-full border border-white/15 text-sm text-bone/80 hover:border-accent hover:text-accent transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-xs text-muted mb-3">
                    BROWSE CATEGORIES
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/category/${c.slug}`}
                        onClick={onClose}
                        className="px-4 py-2 rounded-full border border-white/15 text-sm text-bone/80 hover:border-accent hover:text-accent transition-colors"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8">
                <p className="font-mono text-xs text-muted mb-4">
                  {results.length} RESULT{results.length !== 1 ? "S" : ""}
                </p>
                <ul className="space-y-1">
                  {results.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/product/${p.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-4 py-3 border-b border-white/10 group"
                      >
                        <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-white/5">
                          <Image
                            src={p.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-bone group-hover:text-accent transition-colors truncate">
                            {p.name}
                          </p>
                          <p className="text-bone/40 text-sm truncate">
                            {p.brand}
                          </p>
                        </div>
                        <span className="font-mono text-sm text-bone/70 shrink-0">
                          {formatPrice(p.price, p.currency)}
                        </span>
                      </Link>
                    </li>
                  ))}
                  {results.length === 0 && (
                    <p className="text-bone/50 py-8">
                      No products match &ldquo;{query}&rdquo; yet. Try a
                      category or a different term.
                    </p>
                  )}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
