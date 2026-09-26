import { buildMetadata } from "@/lib/seo";
import { getTrending, getFeatured, getDeals, products } from "@/data/products";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";

import Hero from "@/components/hero/Hero";
import TrendingReel from "@/components/discovery/TrendingReel";
import FeaturedStory from "@/components/editorial/FeaturedStory";
import CategoryIndex from "@/components/category/CategoryIndex";
import CuratedPicks from "@/components/discovery/CuratedPicks";
import DealBanner from "@/components/discovery/DealBanner";
import GuidesSection from "@/components/editorial/GuidesSection";
import Newsletter from "@/components/shared/Newsletter";
import CTASection from "@/components/shared/CTASection";

export const metadata = buildMetadata({
  title: "Discover What's Next",
  description:
    "A curated index of trending, interesting and useful products across tech, fashion, beauty, home, fitness and lifestyle.",
  path: "/",
});

export default function HomePage() {
  const trending = getTrending();
  const featured = getFeatured();
  const deals = getDeals();
  const flagship = products.find((p) => p.flagship) ?? featured[0];
  const curated = products.slice(2, 6);

  return (
    <>
      <Hero />
      <TrendingReel products={trending} />
      {flagship && <FeaturedStory product={flagship} />}
      <CategoryIndex categories={categories} />
      <CuratedPicks products={curated} />
      <DealBanner products={deals} />
      <GuidesSection guides={guides} />
      <Newsletter />
      <CTASection />
    </>
  );
}
