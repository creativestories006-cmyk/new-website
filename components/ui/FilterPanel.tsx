"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

export type SortOption = "trending" | "price-asc" | "price-desc" | "rating";

interface FilterPanelProps {
  activeCategory: string | "all";
  onCategoryChange: (slug: string | "all") => void;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
  className?: string;
  hideCategories?: boolean;
}

const SORTS: { value: SortOption; label: string }[] = [
  { value: "trending", label: "Trending" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

export default function FilterPanel({
  activeCategory,
  onCategoryChange,
  sort,
  onSortChange,
  className,
  hideCategories = false,
}: FilterPanelProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-5 border-y border-white/10",
        className
      )}
    >
      {!hideCategories && (
        <div className="flex flex-wrap gap-2">
          <FilterChip
            active={activeCategory === "all"}
            onClick={() => onCategoryChange("all")}
          >
            All
          </FilterChip>
          {categories.map((c) => (
            <FilterChip
              key={c.slug}
              active={activeCategory === c.slug}
              onClick={() => onCategoryChange(c.slug)}
            >
              {c.name}
            </FilterChip>
          ))}
        </div>
      )}

      <div className="md:ml-auto flex items-center gap-2">
        <label htmlFor="sort" className="font-mono text-xs text-bone/40">
          SORT
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="bg-transparent border border-white/15 rounded-full px-4 py-2 text-sm text-bone outline-none focus-visible:border-accent"
        >
          {SORTS.map((s) => (
            <option key={s.value} value={s.value} className="bg-ink">
              {s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-4 py-2 rounded-full border text-sm transition-colors",
        active
          ? "bg-accent border-accent text-ink"
          : "border-white/15 text-bone/70 hover:border-white/40"
      )}
    >
      {children}
    </motion.button>
  );
}
