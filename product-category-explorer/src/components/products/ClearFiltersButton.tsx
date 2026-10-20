"use client";

import { useRouter } from "next/navigation";
import { XCircle } from "lucide-react";

/**
 * ClearFiltersButton — used inside the empty state on product listing.
 * Must be a Client Component because it calls router.push().
 */
export default function ClearFiltersButton({ href }: { href: string }) {
  const router = useRouter();
  return (
    <button
      id="clear-filters-btn"
      onClick={() => router.push(href, { scroll: false })}
      className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition-colors"
    >
      <XCircle className="h-4 w-4" />
      Clear Filters
    </button>
  );
}
