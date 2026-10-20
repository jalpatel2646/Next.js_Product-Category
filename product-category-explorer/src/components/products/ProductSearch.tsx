"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";

/**
 * ProductSearch — updates the ?q= URL search param.
 * Controlled by the URL so server components can read the query.
 */
export default function ProductSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    // Reset to page 1 when search changes
    params.delete("page");
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="relative w-full sm:w-72">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
      <input
        id="product-search"
        type="search"
        placeholder="Search products…"
        defaultValue={query}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-8 text-sm text-slate-700 shadow-sm placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        aria-label="Search products"
      />
      {query && (
        <button
          aria-label="Clear search"
          onClick={() => handleChange("")}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
