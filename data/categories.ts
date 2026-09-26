import { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "tech",
    name: "Technology & Gadgets",
    tagline: "The objects reshaping how you live",
    description:
      "From ambient audio to desk-side robotics — the gadgets worth paying attention to this season.",
    tint: "tint-tech",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1600&auto=format&fit=crop",
    productCount: 128,
  },
  {
    slug: "fashion",
    name: "Fashion",
    tagline: "Pieces that hold their shape season to season",
    description:
      "Considered wardrobe staples and the occasional statement piece, sourced from independent labels.",
    tint: "tint-fashion",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
    productCount: 214,
  },
  {
    slug: "beauty",
    name: "Beauty",
    tagline: "Formulas backed by more than packaging",
    description:
      "Skincare and grooming edited for ingredients and results, not just shelf appeal.",
    tint: "tint-beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
    productCount: 96,
  },
  {
    slug: "home",
    name: "Home & Living",
    tagline: "Objects for a slower, better-lit life",
    description:
      "Furniture, light, and small tools that make a space feel considered rather than furnished.",
    tint: "tint-home",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop",
    productCount: 173,
  },
  {
    slug: "fitness",
    name: "Fitness",
    tagline: "Equipment that earns its space",
    description:
      "Gear tested for durability and actual training value, not just aesthetics on a shelf.",
    tint: "tint-fitness",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
    productCount: 84,
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    tagline: "The in-between things worth having",
    description:
      "Travel, stationery, and everyday carry — small objects with an outsized effect on your day.",
    tint: "tint-lifestyle",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop",
    productCount: 61,
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
