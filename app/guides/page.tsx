import { guides } from "@/data/guides";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import GuideCard from "@/components/editorial/GuideCard";

export const metadata = buildMetadata({
  title: "Buying Guides",
  description:
    "In-depth buying guides on what actually separates a good product from a well-marketed one.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <div className="bg-ink min-h-screen pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <Breadcrumbs items={[{ name: "Guides", path: "/guides" }]} />
        <p className="font-mono text-xs text-muted mb-4">EDITORIAL INDEX</p>
        <h1 className="font-serif text-4xl md:text-6xl text-bone mb-14 text-balance">
          Buying guides
        </h1>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {guides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </div>
    </div>
  );
}
