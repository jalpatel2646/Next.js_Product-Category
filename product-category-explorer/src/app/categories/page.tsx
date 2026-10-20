import type { Metadata } from "next";
import CategoryGrid from "@/components/categories/CategoryGrid";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse all product categories — Electronics, Fashion, Home & Kitchen, Sports, and Books.",
};

/**
 * /categories — static route, Server Component.
 * Lists all available categories with product counts.
 */
export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-slate-800">
          Shop by Category
        </h1>
        <p className="mt-2 text-slate-500 max-w-xl mx-auto">
          Explore our curated collections across {categories.length} categories.
          Find exactly what you&apos;re looking for.
        </p>
      </div>

      <CategoryGrid categories={categories} />
    </div>
  );
}
