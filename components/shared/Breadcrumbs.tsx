import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";

interface Crumb {
  name: string;
  path: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(all)),
        }}
      />
      <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-bone/40">
        {all.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            {i === all.length - 1 ? (
              <span className="text-bone/70">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-accent">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
