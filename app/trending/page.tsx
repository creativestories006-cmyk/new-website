import Image from "next/image";
import Link from "next/link";
import { getTrending } from "@/data/products";
import { buildMetadata } from "@/lib/seo";
import { formatPrice } from "@/lib/utils";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Trending Products",
  description:
    "The products moving fastest across the SHOPNEXA index right now, ranked by velocity.",
  path: "/trending",
});

export default function TrendingPage() {
  const trending = getTrending();

  return (
    <div className="bg-ink min-h-screen pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Trending", path: "/trending" }]} />
        <p className="font-mono text-xs text-muted mb-4">
          RANKED THIS WEEK
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-bone mb-14 text-balance">
          Trending right now
        </h1>

        <ol className="space-y-8">
          {trending.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/product/${p.slug}`}
                className="group flex items-center gap-6 md:gap-10 py-6 border-b border-white/10"
              >
                <span className="font-serif text-4xl md:text-6xl text-bone/20 group-hover:text-accent transition-colors shrink-0 w-16">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden shrink-0 bg-white/5">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-bone/40 text-xs font-mono uppercase">
                    {p.brand}
                  </p>
                  <p className="font-serif text-xl md:text-2xl text-bone group-hover:text-accent transition-colors truncate">
                    {p.name}
                  </p>
                  <p className="text-bone/50 text-sm mt-1 hidden md:block truncate">
                    {p.tagline}
                  </p>
                </div>
                <span className="font-medium text-bone shrink-0">
                  {formatPrice(p.price, p.currency)}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
