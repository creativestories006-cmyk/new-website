import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

export default function ProductComparison({
  main,
  alternatives,
}: {
  main: Product;
  alternatives: Product[];
}) {
  if (alternatives.length === 0) return null;
  const rows = [main, ...alternatives.slice(0, 2)];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse min-w-[560px]">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left font-mono text-xs text-bone/40 py-3 pr-4">
              PRODUCT
            </th>
            <th className="text-left font-mono text-xs text-bone/40 py-3 pr-4">
              PRICE
            </th>
            <th className="text-left font-mono text-xs text-bone/40 py-3 pr-4">
              RATING
            </th>
            <th className="text-left font-mono text-xs text-bone/40 py-3">
              BEST FOR
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((p) => (
            <tr
              key={p.slug}
              className={`border-b border-white/10 ${
                p.slug === main.slug ? "bg-white/5" : ""
              }`}
            >
              <td className="py-4 pr-4 text-bone">
                {p.name}
                {p.slug === main.slug && (
                  <span className="ml-2 text-accent text-xs font-mono">
                    THIS PRODUCT
                  </span>
                )}
              </td>
              <td className="py-4 pr-4 text-bone/80">
                {formatPrice(p.price, p.currency)}
              </td>
              <td className="py-4 pr-4 text-bone/80">
                {p.rating.toFixed(1)} ★
              </td>
              <td className="py-4 text-bone/60 text-sm">{p.tagline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
