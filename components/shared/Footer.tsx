import Link from "next/link";
import { categories } from "@/data/categories";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "Trending", href: "/trending" },
      { label: "Deals", href: "/deals" },
      { label: "Buying Guides", href: "/guides" },
    ],
  },
  {
    title: "Categories",
    links: categories
      .slice(0, 4)
      .map((c) => ({ label: c.name, href: `/category/${c.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 pt-16 pb-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-14">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-2xl text-bone mb-3">
              SHOP<span className="text-accent">X</span>
            </p>
            <p className="text-bone/50 text-sm leading-relaxed max-w-[220px]">
              A discovery platform for interesting, trending and useful
              products — curated, not crawled.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs text-muted mb-4">
                {col.title.toUpperCase()}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-bone/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-bone/40 text-xs">
            © {new Date().getFullYear()} SHOPNEXA. All rights reserved.
          </p>
          <p className="text-bone/40 text-xs max-w-lg">
            SHOPNEXA participates in affiliate programs. Some links on this
            site are affiliate links — we may earn a commission on purchases
            made through them, at no extra cost to you.{" "}
            <Link
              href="/affiliate-disclosure"
              className="underline underline-offset-2 hover:text-accent"
            >
              Read our full disclosure
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
