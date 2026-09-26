export type CategorySlug =
  | "tech"
  | "fashion"
  | "beauty"
  | "home"
  | "fitness"
  | "lifestyle";

export interface Category {
  slug: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  tint: string; // tailwind color token, e.g. "tint-tech"
  image: string;
  productCount: number;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: CategorySlug;
  tagline: string;
  whyInteresting: string;
  description: string;
  features: string[];
  specs: ProductSpec[];
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  affiliateUrl: string;
  retailer: string;
  trending?: boolean;
  featured?: boolean;
  deal?: boolean;
  flagship?: boolean; // gets the interactive 360 spin viewer
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  category: CategorySlug;
  featuredProductSlugs?: string[];
}
