import { Product } from "@/lib/types";
import SectionHeading from "@/components/ui/SectionHeading";
import EditorialBlock from "@/components/editorial/EditorialBlock";

export default function CuratedPicks({ products }: { products: Product[] }) {
  return (
    <section className="section-paper py-20 md:py-28 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          index="04 / CURATED DISCOVERY"
          title="This week's editor picks"
          description="Chosen and annotated by our team — not ranked by who paid the most for placement."
          light
        />
        <div>
          {products.map((p, i) => (
            <EditorialBlock
              key={p.slug}
              product={p}
              index={i + 1}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
