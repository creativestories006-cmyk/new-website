import { notFound } from "next/navigation";
import Image from "next/image";
import { products, getProduct, getRelated } from "@/data/products";
import { getCategory } from "@/data/categories";
import { buildMetadata, productJsonLd } from "@/lib/seo";
import { formatPrice } from "@/lib/utils";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ProductSpecList from "@/components/product/ProductSpecList";
import ProductCTA from "@/components/product/ProductCTA";
import ProductComparison from "@/components/product/ProductComparison";
import ProductSpinViewer from "@/components/product/ProductSpinViewer";
import ProductGrid from "@/components/product/ProductGrid";
import SectionHeading from "@/components/ui/SectionHeading";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product)
    return buildMetadata({ title: "Product", description: "" });
  return buildMetadata({
    title: product.name,
    description: product.tagline,
    path: `/product/${product.slug}`,
    image: product.image,
  });
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelated(product);

  return (
    <div className="bg-ink min-h-screen pt-32 pb-24 px-6 md:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
      <div className="max-w-6xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Shop", path: "/shop" },
            ...(category
              ? [{ name: category.name, path: `/category/${category.slug}` }]
              : []),
            { name: product.name, path: `/product/${product.slug}` },
          ]}
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {product.flagship ? (
            <ProductSpinViewer
              images={
                product.gallery.length > 1
                  ? [...product.gallery, ...product.gallery].slice(0, 4)
                  : [product.image, product.image]
              }
              alt={product.name}
            />
          ) : (
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 520px, 100vw"
              />
            </div>
          )}

          <div>
            <p className="font-mono text-xs text-bone/40 uppercase mb-3">
              {product.brand} · {category?.name}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl text-bone text-balance">
              {product.name}
            </h1>
            <p className="mt-3 text-bone/60 text-lg">{product.tagline}</p>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-accent">★</span>
              <span className="text-bone/80 text-sm">
                {product.rating.toFixed(1)} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-6 text-bone/70 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8">
              <ProductCTA product={product} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-20">
          <div>
            <h2 className="font-serif text-2xl text-bone mb-4">
              Why it&rsquo;s interesting
            </h2>
            <p className="text-bone/70 leading-relaxed">
              {product.whyInteresting}
            </p>

            <h2 className="font-serif text-2xl text-bone mt-10 mb-4">
              Key features
            </h2>
            <ul className="space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 text-bone/80 text-sm">
                  <span className="text-accent mt-0.5">—</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-bone mb-4">
              Specifications
            </h2>
            <ProductSpecList specs={product.specs} />
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl text-bone mb-6">
              How it compares
            </h2>
            <ProductComparison main={product} alternatives={related} />
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-24">
            <SectionHeading
              index="RELATED"
              title="You might also like"
              className="mb-8"
            />
            <ProductGrid products={related} />
          </div>
        )}
      </div>
    </div>
  );
}
