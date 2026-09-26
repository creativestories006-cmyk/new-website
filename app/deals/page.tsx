import { getDeals } from "@/data/products";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";

export const metadata = buildMetadata({
  title: "Deals",
  description: "Live price drops across the SHOPNEXA index.",
  path: "/deals",
});

export default function DealsPage() {
  const deals = getDeals();

  return (
    <div className="bg-ink min-h-screen pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ name: "Deals", path: "/deals" }]} />
        <p className="font-mono text-xs text-muted mb-4">LIVE PRICE DROPS</p>
        <h1 className="font-serif text-4xl md:text-6xl text-bone mb-4 text-balance">
          Deals
        </h1>
        <p className="text-bone/50 max-w-md mb-14">
          Prices and discounts are pulled from retailers directly and may
          change at any time. Always confirm the price at checkout.
        </p>
        <ProductGrid products={deals} />
      </div>
    </div>
  );
}
