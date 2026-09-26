import { Guide } from "@/lib/types";
import SectionHeading from "@/components/ui/SectionHeading";
import GuideCard from "./GuideCard";
import Button from "@/components/ui/Button";

export default function GuidesSection({ guides }: { guides: Guide[] }) {
  return (
    <section className="bg-ink py-20 md:py-28 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="06 / BUYING GUIDES"
          title="Read before you buy"
          description="Longer-form breakdowns of what actually separates a good product from a well-marketed one."
        />
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {guides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
        <div className="mt-12">
          <Button href="/guides" variant="secondary">
            All buying guides
          </Button>
        </div>
      </div>
    </section>
  );
}
