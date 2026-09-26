import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CTASection() {
  return (
    <section className="relative bg-ink py-28 md:py-40 px-6 md:px-16 overflow-hidden border-t border-white/5">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-tint-tech/10"
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <SectionHeading
          index="08 / START HERE"
          title="Your next favorite thing is probably three clicks away"
          description="Explore the full index — every category, every trending product, no dead ends."
          align="center"
        />
        <Button href="/shop" className="text-base px-9 py-4">
          Explore the shop
        </Button>
      </div>
    </section>
  );
}
