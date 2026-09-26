import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    slug: "aera-desk-lamp",
    name: "Aera Adaptive Desk Lamp",
    brand: "Aera",
    category: "home",
    tagline: "Light that tracks daylight, not just time",
    whyInteresting:
      "Most desk lamps run on a timer. Aera reads the color temperature of the room and adjusts automatically, so your desk stays lit like a well-designed window rather than a fluorescent tube.",
    description:
      "A sensor-driven lamp that shifts from warm 2700K to cool 5000K across the day, dimming automatically as ambient light changes. Aluminum body, no app required for basic use.",
    features: [
      "Ambient light sensor, auto color-temperature shift",
      "Touch-dim base, no companion app needed",
      "6-year lifespan LED array",
      "Optional Wi-Fi module for scheduling",
    ],
    specs: [
      { label: "Material", value: "Anodized aluminum" },
      { label: "Color temp range", value: "2700K–5000K" },
      { label: "Power", value: "USB-C, 18W" },
      { label: "Weight", value: "1.2kg" },
    ],
    price: 129,
    originalPrice: 159,
    currency: "USD",
    rating: 4.7,
    reviewCount: 842,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?q=80&w=1200&auto=format&fit=crop",
    ],
    affiliateUrl: "https://example-retailer.com/aera-desk-lamp",
    retailer: "Aera Direct",
    trending: true,
    featured: true,
    deal: true,
  },
  {
    slug: "orbit-earbuds-pro",
    name: "Orbit Earbuds Pro",
    brand: "Orbit Audio",
    category: "tech",
    tagline: "Spatial audio without the subscription upsell",
    whyInteresting:
      "Orbit skipped the marketing budget and put it into the driver. The result is a pair of earbuds that outperforms names twice its price on raw sound, with genuinely useful adaptive ANC.",
    description:
      "A titanium-coated dynamic driver paired with adaptive noise cancellation that recalibrates every 15 seconds to your ear seal. 32-hour case battery life.",
    features: [
      "Adaptive ANC, recalibrates every 15 seconds",
      "Titanium-coated 11mm driver",
      "IPX5 sweat and rain resistance",
      "32-hour total battery with case",
    ],
    specs: [
      { label: "Driver", value: "11mm titanium-coated" },
      { label: "Battery (buds)", value: "8 hours ANC on" },
      { label: "Battery (case)", value: "32 hours total" },
      { label: "Connectivity", value: "Bluetooth 5.3" },
    ],
    price: 149,
    currency: "USD",
    rating: 4.6,
    reviewCount: 2130,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658165737-15a047b7ac86?q=80&w=1200&auto=format&fit=crop",
    ],
    affiliateUrl: "https://example-retailer.com/orbit-earbuds-pro",
    retailer: "SoundHouse",
    trending: true,
    featured: true,
    flagship: true,
  },
  {
    slug: "kestrel-trail-jacket",
    name: "Kestrel Trail Jacket",
    brand: "Northfield",
    category: "fashion",
    tagline: "A shell built for weather, cut for the street",
    whyInteresting:
      "Technical outerwear usually sacrifices silhouette for performance. Kestrel's pattern-cutters kept the drop-shoulder cut sharp while still hitting a genuine 20K waterproof rating.",
    description:
      "3-layer waterproof shell with taped seams, rated to 20,000mm hydrostatic head, cut with a relaxed drop-shoulder silhouette that reads as streetwear off the trail.",
    features: [
      "20,000mm waterproof rating, fully taped seams",
      "Pit zips for temperature regulation",
      "Packs into its own chest pocket",
      "Recycled shell fabric",
    ],
    specs: [
      { label: "Waterproofing", value: "20,000mm HH" },
      { label: "Fabric", value: "Recycled 3-layer ripstop" },
      { label: "Fit", value: "Relaxed, drop-shoulder" },
      { label: "Weight", value: "410g" },
    ],
    price: 245,
    currency: "USD",
    rating: 4.8,
    reviewCount: 356,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1200&auto=format&fit=crop",
    ],
    affiliateUrl: "https://example-retailer.com/kestrel-trail-jacket",
    retailer: "Northfield Co.",
    trending: true,
  },
  {
    slug: "lumen-skin-serum",
    name: "Lumen Barrier Repair Serum",
    brand: "Lumen Lab",
    category: "beauty",
    tagline: "One active ingredient, dosed correctly",
    whyInteresting:
      "Most barrier serums bury a low dose of the active ingredient under filler. Lumen publishes its concentration (11% panthenol complex) and backs it with a third-party lab report.",
    description:
      "A fragrance-free barrier serum built around an 11% panthenol complex, formulated for compromised or sensitized skin. Third-party tested, results published openly.",
    features: [
      "11% panthenol complex, published lab report",
      "Fragrance-free, sensitivity-tested",
      "Lightweight, non-greasy finish",
      "Dermatologist reviewed formulation",
    ],
    specs: [
      { label: "Key active", value: "11% panthenol complex" },
      { label: "Volume", value: "30ml" },
      { label: "Skin type", value: "All, including sensitive" },
      { label: "Fragrance", value: "None" },
    ],
    price: 38,
    originalPrice: 48,
    currency: "USD",
    rating: 4.5,
    reviewCount: 1204,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop",
    ],
    affiliateUrl: "https://example-retailer.com/lumen-serum",
    retailer: "Lumen Lab",
    deal: true,
  },
  {
    slug: "form-adjustable-kettlebell",
    name: "Form Adjustable Kettlebell",
    brand: "Form Fitness",
    category: "fitness",
    tagline: "Six kettlebells, one footprint",
    whyInteresting:
      "A single dial-adjustable kettlebell replacing a rack of six, with a locking mechanism rated for genuine swing and clean-and-jerk work — not just static lifts.",
    description:
      "Dial-adjustable from 9 to 36 lbs in 4.5lb increments, with a steel locking core rated for dynamic movements including swings and cleans.",
    features: [
      "9–36 lbs adjustable in 4.5lb increments",
      "Steel locking core, dynamic-movement rated",
      "Replaces a 6-piece kettlebell rack",
      "Textured grip handle",
    ],
    specs: [
      { label: "Weight range", value: "9–36 lbs" },
      { label: "Increments", value: "4.5 lbs" },
      { label: "Material", value: "Steel core, urethane shell" },
      { label: "Footprint", value: "1 unit vs. 6" },
    ],
    price: 299,
    currency: "USD",
    rating: 4.7,
    reviewCount: 618,
    image:
      "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?q=80&w=1200&auto=format&fit=crop",
    ],
    affiliateUrl: "https://example-retailer.com/form-kettlebell",
    retailer: "Form Fitness",
    trending: true,
  },
  {
    slug: "carry-travel-organizer",
    name: "Carry Modular Travel Organizer",
    brand: "Carry Co.",
    category: "lifestyle",
    tagline: "One system, every trip length",
    whyInteresting:
      "Modular pouches that clip together in different configurations depending on trip length — the same system works for a weekend bag or a three-week carry-on.",
    description:
      "A three-pouch modular system with a shared clip rail, water-resistant lining, and compression straps for cables, toiletries, and packing cubes.",
    features: [
      "Modular clip rail, mix and match pouches",
      "Water-resistant ripstop lining",
      "Compression straps included",
      "Fits inside any standard carry-on",
    ],
    specs: [
      { label: "Pouches included", value: "3" },
      { label: "Material", value: "Ripstop nylon" },
      { label: "Water resistance", value: "Lining, DWR coating" },
      { label: "Weight", value: "310g total" },
    ],
    price: 79,
    currency: "USD",
    rating: 4.6,
    reviewCount: 429,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop",
    ],
    affiliateUrl: "https://example-retailer.com/carry-organizer",
    retailer: "Carry Co.",
  },
  {
    slug: "halo-charging-tray",
    name: "Halo Tri-Charging Tray",
    brand: "Halo",
    category: "tech",
    tagline: "Three devices, one cable to the wall",
    whyInteresting:
      "A charging tray that actually manages heat, throttling wireless output when it senses your phone case is trapping warmth — a small detail most competitors skip entirely.",
    description:
      "Simultaneous 15W wireless charging for phone, watch, and earbuds, with thermal throttling that reduces output when case-related heat buildup is detected.",
    features: [
      "15W wireless charging, all three zones",
      "Thermal throttling for phone cases",
      "Braided cable, single wall connection",
      "Soft-touch tray finish",
    ],
    specs: [
      { label: "Output", value: "15W per zone" },
      { label: "Compatibility", value: "Qi-standard devices" },
      { label: "Cable", value: "1.8m braided USB-C" },
      { label: "Finish", value: "Soft-touch silicone" },
    ],
    price: 59,
    originalPrice: 79,
    currency: "USD",
    rating: 4.4,
    reviewCount: 967,
    image:
      "https://images.unsplash.com/photo-1591290619762-c5b0e2a5e0c9?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1591290619762-c5b0e2a5e0c9?q=80&w=1200&auto=format&fit=crop",
    ],
    affiliateUrl: "https://example-retailer.com/halo-charging-tray",
    retailer: "Halo Direct",
    deal: true,
    trending: true,
  },
  {
    slug: "field-ceramic-planter",
    name: "Field Ceramic Planter Set",
    brand: "Field Studio",
    category: "home",
    tagline: "Unglazed stoneware that ages with the plant",
    whyInteresting:
      "Unglazed stoneware that develops a natural patina as it absorbs moisture over time — the planter is designed to look better in year two than day one.",
    description:
      "A set of three unglazed stoneware planters in graduated sizes, hand-finished with a drainage system and matching saucers included.",
    features: [
      "Unglazed stoneware, develops patina over time",
      "Set of 3 graduated sizes",
      "Drainage hole with matching saucer",
      "Hand-finished, subtle variation piece to piece",
    ],
    specs: [
      { label: "Material", value: "Unglazed stoneware" },
      { label: "Set size", value: "3 planters + saucers" },
      { label: "Sizes", value: "4in, 6in, 8in diameter" },
      { label: "Care", value: "Hand wash only" },
    ],
    price: 68,
    currency: "USD",
    rating: 4.9,
    reviewCount: 218,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop",
    ],
    affiliateUrl: "https://example-retailer.com/field-planter-set",
    retailer: "Field Studio",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
export function getTrending() {
  return products.filter((p) => p.trending);
}
export function getFeatured() {
  return products.filter((p) => p.featured);
}
export function getDeals() {
  return products.filter((p) => p.deal);
}
export function getByCategory(category: string) {
  return products.filter((p) => p.category === category);
}
export function getRelated(product: Product, count = 4) {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, count);
}
