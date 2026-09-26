"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { categories } from "@/data/categories";

const LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Trending", href: "/trending" },
  { label: "Deals", href: "/deals" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
];

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-ink pt-24 px-6 pb-10 overflow-y-auto md:hidden"
        >
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="absolute top-8 right-6 font-mono text-xs text-bone"
          >
            CLOSE ✕
          </button>

          <nav aria-label="Mobile navigation">
            <ul className="space-y-1">
              {LINKS.map((link) => (
                <li
                  key={link.href}
                  className="border-b border-white/10 py-4"
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-serif text-3xl text-bone"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="font-mono text-xs text-muted mt-8 mb-3">
              CATEGORIES
            </p>
            <ul className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/category/${c.slug}`}
                    onClick={onClose}
                    className="inline-block px-4 py-2 rounded-full border border-white/15 text-sm text-bone/80"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
