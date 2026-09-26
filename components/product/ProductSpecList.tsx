import { ProductSpec } from "@/lib/types";

export default function ProductSpecList({ specs }: { specs: ProductSpec[] }) {
  return (
    <dl className="divide-y divide-white/10 border-y border-white/10">
      {specs.map((spec) => (
        <div key={spec.label} className="flex justify-between py-3">
          <dt className="font-mono text-xs text-bone/40 uppercase">
            {spec.label}
          </dt>
          <dd className="text-sm text-bone/90 text-right">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
