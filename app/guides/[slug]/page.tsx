import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { guides, getGuide } from "@/data/guides";
import { getProduct } from "@/data/products";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { formatDate, formatPrice } from "@/lib/utils";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import PullQuote from "@/components/editorial/PullQuote";
import Button from "@/components/ui/Button";
import AffiliateDisclosure from "@/components/product/AffiliateDisclosure";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = getGuide(params.slug);
  if (!guide) return buildMetadata({ title: "Guide", description: "" });
  return buildMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/guides/${guide.slug}`,
    image: guide.coverImage,
  });
}

export default function GuideDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const featuredProduct = guide.featuredProductSlugs?.[0]
    ? getProduct(guide.featuredProductSlugs[0])
    : undefined;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    image: guide.coverImage,
    author: { "@type": "Person", name: guide.author },
    datePublished: guide.date,
    mainEntityOfPage: `${SITE_URL}/guides/${guide.slug}`,
  };

  return (
    <div className="bg-ink min-h-screen pt-32 pb-24 px-6 md:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="max-w-2xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Guides", path: "/guides" },
            { name: guide.title, path: `/guides/${guide.slug}` },
          ]}
        />

        <p className="font-mono text-xs text-bone/40 mb-4">
          {guide.author.toUpperCase()} · {formatDate(guide.date)} ·{" "}
          {guide.readTime}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-bone text-balance">
          {guide.title}
        </h1>
        <p className="mt-5 text-bone/60 text-lg leading-relaxed">
          {guide.excerpt}
        </p>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mt-10 mb-10">
          <Image
            src={guide.coverImage}
            alt={guide.title}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 672px, 100vw"
          />
        </div>

        <div className="prose-content text-bone/80 leading-relaxed space-y-6">
          <p>
            Most buying decisions in this category come down to marketing
            budget rather than material difference between options — the
            product with the biggest ad spend wins the search results, not
            necessarily the one built to last. We spent time with several
            alternatives before landing on the recommendation below.
          </p>
          <p>
            The differences that actually matter are rarely on the spec
            sheet's first line. They show up in the details manufacturers
            don't lead with: how a hinge wears after six months, whether a
            stated rating holds up under real conditions, what happens when
            you need support after the return window closes.
          </p>

          <PullQuote>
            &ldquo;{featuredProduct?.whyInteresting ??
              "The best pick is rarely the loudest one on the shelf."}&rdquo;
          </PullQuote>

          <p>
            That's the case for our pick below — a product that earns its
            place through a specific, verifiable detail rather than a longer
            feature list.
          </p>
        </div>

        {featuredProduct && (
          <div className="mt-10 rounded-2xl border border-white/10 p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative w-full sm:w-40 aspect-square rounded-xl overflow-hidden shrink-0 bg-white/5">
              <Image
                src={featuredProduct.image}
                alt={featuredProduct.name}
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <div className="flex-1">
              <p className="font-mono text-xs text-bone/40 uppercase mb-2">
                Featured in this guide
              </p>
              <Link href={`/product/${featuredProduct.slug}`}>
                <h3 className="font-serif text-xl text-bone hover:text-accent transition-colors">
                  {featuredProduct.name}
                </h3>
              </Link>
              <p className="text-bone/60 text-sm mt-2">
                {featuredProduct.tagline}
              </p>
              <div className="flex items-center gap-4 mt-4">
                <span className="font-medium text-bone">
                  {formatPrice(featuredProduct.price, featuredProduct.currency)}
                </span>
                <Button
                  href={featuredProduct.affiliateUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  variant="secondary"
                  magnetic={false}
                >
                  Shop now
                </Button>
              </div>
              <AffiliateDisclosure className="mt-3" />
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
