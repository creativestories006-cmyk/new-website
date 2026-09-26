"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Category } from "@/lib/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { setCursorLabel } from "@/hooks/useCursor";

export default function CategoryIndex({
  categories,
}: {
  categories: Category[];
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="section-paper py-20 md:py-28 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="03 / CATEGORY INDEX"
          title="Browse by what you're actually looking for"
          description="Six departments, each edited by category rather than dumped into one endless grid."
          light
        />

        <div className="relative">
          <ul className="border-t hairline-light">
            {categories.map((cat, i) => (
              <motion.li
                key={cat.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                onMouseEnter={() => {
                  setHovered(cat.slug);
                  setCursorLabel("View");
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  setCursorLabel("");
                }}
                className="border-b hairline-light"
              >
                <Link
                  href={`/category/${cat.slug}`}
                  className="group flex items-baseline justify-between py-6 md:py-8"
                >
                  <span className="font-serif text-2xl md:text-4xl text-char group-hover:text-accent transition-colors">
                    {cat.name}
                  </span>
                  <span className="hidden md:block text-char/50 text-sm max-w-xs text-right">
                    {cat.tagline}
                  </span>
                  <span className="font-mono text-xs text-char/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Floating hover preview image — desktop only */}
          <div className="hidden md:block pointer-events-none">
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="fixed top-1/2 right-[8%] -translate-y-1/2 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl z-20"
                >
                  <Image
                    src={categories.find((c) => c.slug === hovered)!.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
