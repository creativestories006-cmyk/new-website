import { buildMetadata } from "@/lib/seo";
import { products } from "@/data/products";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ShopExplorer from "@/components/product/ShopExplorer";

export const metadata = buildMetadata({
  title: "Shop All Products",
  description:
    "Browse every product in the SHOPNEXA index — filter by category and sort by trending, price or rating.",
  path: "/shop",
});

export default function ShopPage() {
  return (
    <div className="bg-ink min-h-screen pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ name: "Shop", path: "/shop" }]} />
        <p className="font-mono text-xs text-muted mb-4">ALL PRODUCTS</p>
        <h1 className="font-serif text-4xl md:text-6xl text-bone mb-10 text-balance">
          The full index
        </h1>
        <ShopExplorer products={products} />
      </div>
    </div>
  );
}
