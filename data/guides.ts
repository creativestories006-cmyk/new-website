import { Guide } from "@/lib/types";

export const guides: Guide[] = [
  {
    slug: "desk-lighting-that-actually-matters",
    title: "Desk Lighting That Actually Matters",
    excerpt:
      "Why color temperature does more for your afternoon focus than brightness ever will, and what to look for before buying.",
    author: "Priya Nair",
    date: "2026-08-14",
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1600&auto=format&fit=crop",
    category: "home",
    featuredProductSlugs: ["aera-desk-lamp"],
  },
  {
    slug: "earbuds-worth-the-money-in-2026",
    title: "Earbuds Worth the Money in 2026",
    excerpt:
      "The spec sheet arms race is mostly noise. Here's what separates a genuinely good pair from a well-marketed one.",
    author: "Daniel Cho",
    date: "2026-08-02",
    readTime: "8 min read",
    coverImage:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1600&auto=format&fit=crop",
    category: "tech",
    featuredProductSlugs: ["orbit-earbuds-pro"],
  },
  {
    slug: "one-jacket-four-seasons",
    title: "One Jacket, Four Seasons",
    excerpt:
      "A field-tested case for building your outerwear rotation around a single technical shell instead of five specialized ones.",
    author: "Maren Osei",
    date: "2026-07-21",
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1600&auto=format&fit=crop",
    category: "fashion",
    featuredProductSlugs: ["kestrel-trail-jacket"],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
