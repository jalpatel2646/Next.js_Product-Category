import type { Metadata } from "next";
import { Suspense } from "react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { sortProducts } from "@/lib/utils";
import type { SortOption } from "@/types";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilters from "@/components/products/ProductFilters";
import ProductSearch from "@/components/products/ProductSearch";
import ProductSort from "@/components/products/ProductSort";

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Browse our full catalogue of electronics, fashion, home & kitchen, sports, and books.",
};

/**
 * /products — React Server Component.
 *
 * Routing concept: Static route that reads URL search params passed via the
 * `searchParams` prop. Filtering, searching, and sorting are performed on
 * the server with local dummy data. Interactive widgets (Search, Sort,
 * Filters) are Client Components that only update the URL, triggering a
 * new server render of this page.
 */
interface PageProps {
  searchParams: Promise<{ q?: string; category?: string; sort?: string }>;
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const { q = "", category = "", sort = "default" } = await searchParams;

  // Build a map of categoryId → name for display in cards
  const categoryNameMap: Record<string, string> = Object.fromEntries(
    categories.map((c) => [c.id, c.name])
  );

  // ── Server-side filtering ───────────────────────────────────────────────
  let filtered = [...products];

  if (category) {
    const cat = categories.find((c) => c.slug === category);
    if (cat) filtered = filtered.filter((p) => p.categoryId === cat.id);
  }

  if (q) {
    const lower = q.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower)
    );
  }

  filtered = sortProducts(filtered, sort as SortOption);

  const hasFilters = !!(q || category);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-slate-800">All Products</h1>
        <p className="mt-1 text-sm text-slate-500">
          Showing {filtered.length} of {products.length} products
        </p>
      </div>

      {/* Controls row — search + sort */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <Suspense>
          <ProductSearch />
        </Suspense>
        <Suspense>
          <ProductSort />
        </Suspense>
      </div>

      <div className="flex flex-col sm:flex-row gap-8">
        {/* Sidebar filters */}
        <aside className="w-full sm:w-52 shrink-0">
          <Suspense>
            <ProductFilters categories={categories} />
          </Suspense>
        </aside>

        {/* Product grid */}
        <div className="flex-1 min-w-0">
          <ProductGrid
            products={filtered}
            clearHref={hasFilters ? "/products" : undefined}
            categoryNames={categoryNameMap}
          />
        </div>
      </div>
    </div>
  );
}
