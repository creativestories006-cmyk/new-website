import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { getByCategory } from "@/data/products";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CategoryMasthead from "@/components/category/CategoryMasthead";
import ShopExplorer from "@/components/product/ShopExplorer";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) return buildMetadata({ title: "Category", description: "" });
  return buildMetadata({
    title: category.name,
    description: category.description,
    path: `/category/${category.slug}`,
    image: category.image,
  });
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const categoryProducts = getByCategory(category.slug);

  return (
    <div className="bg-ink min-h-screen">
      <CategoryMasthead category={category} />
      <div className="max-w-7xl mx-auto pt-12 pb-24 px-6 md:px-16">
        <Breadcrumbs
          items={[
            { name: "Shop", path: "/shop" },
            { name: category.name, path: `/category/${category.slug}` },
          ]}
        />
        <ShopExplorer products={categoryProducts} lockCategory={category.slug} />
      </div>
    </div>
  );
}
