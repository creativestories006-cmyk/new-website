import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata = buildMetadata({
  title: "About",
  description:
    "SHOPNEXA is a product discovery platform curating trending, interesting and useful products worth your attention.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="bg-ink min-h-screen pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-2xl mx-auto">
        <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
        <p className="font-mono text-xs text-muted mb-4">ABOUT SHOPNEXA</p>
        <h1 className="font-serif text-4xl md:text-6xl text-bone mb-8 text-balance">
          Curated, not crawled.
        </h1>
        <div className="space-y-6 text-bone/70 leading-relaxed text-lg">
          <p>
            SHOPNEXA exists because most product discovery online is broken.
            Search results are dominated by whoever bought the most ads.
            Marketplaces bury genuinely good products under thousands of
            near-identical listings. Review sites are increasingly written by
            the products themselves.
          </p>
          <p>
            We built SHOPNEXA as an index instead — a smaller, more opinionated
            list of products across technology, fashion, beauty, home,
            fitness and lifestyle, each one selected and written up by an
            actual person on our team, not generated from a spec-sheet feed.
          </p>
          <p>
            We're an affiliate business: when you buy something through a
            link on SHOPNEXA, we may earn a commission at no extra cost to
            you. That relationship never determines which products we
            feature — our full policy is in our{" "}
            <a
              href="/affiliate-disclosure"
              className="underline underline-offset-4 hover:text-accent"
            >
              affiliate disclosure
            </a>
            .
          </p>
          <p>
            The categories you see today — Technology, Fashion, Beauty, Home,
            Fitness and Lifestyle — will keep expanding as we find more worth
            including.
          </p>
        </div>
      </div>
    </div>
  );
}
