"use client";

import { useMemo, useState } from "react";
import { Product } from "@/lib/types";
import FilterPanel, { SortOption } from "@/components/ui/FilterPanel";
import ProductGrid from "./ProductGrid";

export default function ShopExplorer({
  products,
  lockCategory,
}: {
  products: Product[];
  lockCategory?: string;
}) {
  const [category, setCategory] = useState<string | "all">(
    lockCategory ?? "all"
  );
  const [sort, setSort] = useState<SortOption>("trending");

  const filtered = useMemo(() => {
    let list = products;
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    const sorted = [...list];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        sorted.sort((a, b) => Number(b.trending) - Number(a.trending));
    }
    return sorted;
  }, [products, category, sort]);

  return (
    <div>
      {!lockCategory && (
        <FilterPanel
          activeCategory={category}
          onCategoryChange={setCategory}
          sort={sort}
          onSortChange={setSort}
          className="mb-10"
        />
      )}
      {lockCategory && (
        <div className="flex justify-end mb-8">
          <FilterPanel
            activeCategory="all"
            onCategoryChange={() => {}}
            sort={sort}
            onSortChange={setSort}
            hideCategories
            className="border-none py-0 w-full justify-end"
          />
        </div>
      )}
      <p className="font-mono text-xs text-bone/40 mb-6">
        {filtered.length} PRODUCT{filtered.length !== 1 ? "S" : ""}
      </p>
      <ProductGrid products={filtered} />
    </div>
  );
}
