"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ArrowUpDown } from "lucide-react";
import type { SortOption } from "@/types";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "default", label: "Featured" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "rating-desc", label: "Highest Rated" },
];

/**
 * ProductSort — client component that updates the ?sort= URL param.
 * Because it writes to the URL, it works without lifting state.
 */
export default function ProductSort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = (searchParams.get("sort") ?? "default") as SortOption;

  function handleChange(value: SortOption) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "default") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="h-4 w-4 text-slate-400 shrink-0" />
      <select
        id="product-sort"
        value={current}
        onChange={(e) => handleChange(e.target.value as SortOption)}
        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 cursor-pointer"
        aria-label="Sort products"
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
