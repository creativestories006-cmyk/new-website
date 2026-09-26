import { Category } from "@/lib/types";

const TINT_HEX: Record<string, string> = {
  "tint-tech": "#2952E3",
  "tint-fashion": "#C23B5E",
  "tint-beauty": "#D98CC2",
  "tint-home": "#4E8C6B",
  "tint-fitness": "#E0A526",
  "tint-lifestyle": "#7C5CBF",
};

export default function CategoryMasthead({ category }: { category: Category }) {
  const hex = TINT_HEX[category.tint] ?? "#FF5A36";
  return (
    <div className="relative py-20 md:py-28 px-6 md:px-16 border-b border-white/10 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          background: `radial-gradient(60% 60% at 20% 20%, ${hex} 0%, transparent 70%)`,
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="font-mono text-xs text-bone/50 mb-4">
          CATEGORY / {category.productCount} PRODUCTS
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-bone text-balance">
          {category.name}
        </h1>
        <p className="mt-4 text-bone/60 max-w-lg mx-auto leading-relaxed">
          {category.description}
        </p>
      </div>
    </div>
  );
}
