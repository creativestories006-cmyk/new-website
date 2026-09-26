import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description:
    "How SHOPNEXA uses affiliate links, and how that relationship does and doesn't affect what we feature.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <div className="bg-ink min-h-screen pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-2xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Affiliate Disclosure", path: "/affiliate-disclosure" },
          ]}
        />
        <p className="font-mono text-xs text-muted mb-4">TRANSPARENCY</p>
        <h1 className="font-serif text-4xl md:text-5xl text-bone mb-8 text-balance">
          Affiliate disclosure
        </h1>
        <div className="space-y-6 text-bone/70 leading-relaxed">
          <p>
            SHOPNEXA is a participant in various affiliate marketing
            programs. This means that when you click certain links on this
            site and make a purchase, we may earn a commission from the
            retailer — at no extra cost to you.
          </p>
          <p>
            Any outbound link to a retailer on a product page, in a buying
            guide, or in an editorial feature may be an affiliate link. We
            mark these clearly with a disclosure line near the link itself,
            in addition to this page.
          </p>
          <h2 className="font-serif text-2xl text-bone pt-4">
            What this does not change
          </h2>
          <p>
            Commission potential is never the basis for whether a product
            appears on SHOPNEXA, how it&rsquo;s described, or how it&rsquo;s
            rated. Our editorial team selects and writes about products
            based on genuine usefulness, quality, and interest to our
            readers. If a product is mediocre, we say so, or we leave it out.
          </p>
          <h2 className="font-serif text-2xl text-bone pt-4">
            Pricing accuracy
          </h2>
          <p>
            Prices, availability and discount amounts shown on SHOPNEXA are
            sourced from retailers and can change at any time without
            notice. Always confirm final pricing on the retailer&rsquo;s
            checkout page before completing a purchase.
          </p>
          <h2 className="font-serif text-2xl text-bone pt-4">Questions</h2>
          <p>
            If you have questions about a specific link or our affiliate
            relationships generally, reach out via our{" "}
            <a
              href="/contact"
              className="underline underline-offset-4 hover:text-accent"
            >
              contact page
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
