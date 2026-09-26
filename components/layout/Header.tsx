"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";
import SearchOverlay from "@/components/search/SearchOverlay";
import { setCursorLabel } from "@/hooks/useCursor";

const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Trending", href: "/trending" },
  { label: "Deals", href: "/deals" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-30 transition-colors duration-500 ${
          scrolled || menuOpen || mobileOpen
            ? "bg-ink/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 h-20">
          <Logo className="text-bone z-10" />

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8"
          >
            <button
              onClick={() => setMenuOpen((v) => !v)}
              onMouseEnter={() => setCursorLabel("Explore")}
              onMouseLeave={() => setCursorLabel("")}
              className="text-sm text-bone/90 hover:text-accent transition-colors"
              aria-expanded={menuOpen}
            >
              Categories
            </button>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setCursorLabel("View")}
                onMouseLeave={() => setCursorLabel("")}
                className="text-sm text-bone/90 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5 z-10">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="text-bone/90 hover:text-accent transition-colors"
            >
              <SearchIcon />
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="md:hidden text-bone/90"
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>
      </motion.header>

      <MegaMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 17L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
      <motion.line
        x1="0" y1="1" x2="22" y2="1"
        stroke="currentColor" strokeWidth="1.5"
        animate={open ? { y1: 8, y2: 8, rotate: 45 } : { y1: 1, y2: 1, rotate: 0 }}
        style={{ originX: "11px", originY: "1px" }}
      />
      <motion.line
        x1="0" y1="15" x2="22" y2="15"
        stroke="currentColor" strokeWidth="1.5"
        animate={open ? { y1: 8, y2: 8, rotate: -45 } : { y1: 15, y2: 15, rotate: 0 }}
        style={{ originX: "11px", originY: "15px" }}
      />
    </svg>
  );
}
