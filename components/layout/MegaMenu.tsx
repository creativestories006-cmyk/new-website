"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { categories } from "@/data/categories";
import { setCursorLabel } from "@/hooks/useCursor";

export default function MegaMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [active, setActive] = useState(categories[0].slug);
  const activeCategory = categories.find((c) => c.slug === active)!;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-ink pt-28 px-6 md:px-16 pb-16 overflow-y-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <nav aria-label="Category navigation">
              <p className="font-mono text-xs text-muted mb-6">
                INDEX / CATEGORIES
              </p>
              <ul className="space-y-1">
                {categories.map((cat, i) => (
                  <motion.li
                    key={cat.slug}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    onMouseEnter={() => {
                      setActive(cat.slug);
                      setCursorLabel("View");
                    }}
                    onMouseLeave={() => setCursorLabel("")}
                  >
                    <Link
                      href={`/category/${cat.slug}`}
                      onClick={onClose}
                      className="group flex items-baseline justify-between border-b border-white/10 py-4"
                    >
                      <span className="font-serif text-3xl md:text-4xl text-bone group-hover:text-accent transition-colors">
                        {cat.name}
                      </span>
                      <span className="font-mono text-xs text-muted hidden md:inline">
                        {cat.productCount} items
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex gap-6">
                <Link
                  href="/trending"
                  onClick={onClose}
                  className="font-mono text-xs uppercase tracking-wide text-bone hover:text-accent"
                >
                  Trending →
                </Link>
                <Link
                  href="/deals"
                  onClick={onClose}
                  className="font-mono text-xs uppercase tracking-wide text-bone hover:text-accent"
                >
                  Deals →
                </Link>
              </div>
            </nav>

            <div className="relative hidden md:block rounded-2xl overflow-hidden aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.slug}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeCategory.image}
                    alt={activeCategory.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 480px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-bone/70 text-sm max-w-xs">
                      {activeCategory.tagline}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="absolute top-8 right-6 md:right-16 font-mono text-xs text-bone hover:text-accent"
          >
            CLOSE ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
