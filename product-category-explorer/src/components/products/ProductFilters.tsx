"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { Category } from "@/types";
import { Filter } from "lucide-react";

interface ProductFiltersProps {
  categories: Category[];
}

/**
 * ProductFilters — sidebar/top category filter.
 * Updates the ?category= URL param so the server can read it.
 */
export default function ProductFilters({ categories }: ProductFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category") ?? "";

  function handleSelect(slug: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === active || slug === "") {
      params.delete("category");
    } else {
      params.set("category", slug);
    }
    params.delete("page");
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Filter className="h-4 w-4 text-slate-500" />
        <span className="text-sm font-semibold text-slate-700">Categories</span>
      </div>
      <div className="flex flex-row flex-wrap gap-2 sm:flex-col sm:gap-1">
        <button
          id="filter-all"
          onClick={() => handleSelect("")}
          className={`rounded-lg px-3 py-1.5 text-sm text-left transition-colors ${
            active === ""
              ? "bg-indigo-600 text-white font-medium"
              : "bg-white text-slate-600 border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600"
          }`}
        >
          All Products
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            id={`filter-${cat.slug}`}
            onClick={() => handleSelect(cat.slug)}
            className={`rounded-lg px-3 py-1.5 text-sm text-left transition-colors ${
              active === cat.slug
                ? "bg-indigo-600 text-white font-medium"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
