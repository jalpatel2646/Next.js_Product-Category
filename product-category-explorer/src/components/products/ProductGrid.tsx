"use client";

import type { Product } from "@/types";
import ProductCard from "./ProductCard";
import ClearFiltersButton from "./ClearFiltersButton";
import { PackageOpen } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  clearHref?: string;
  categoryNames?: Record<string, string>;
}

/**
 * ProductGrid — renders a responsive CSS grid of ProductCards.
 * Client component to support the clear-filters button inside empty state.
 * Shows an empty state when the products array is empty.
 */
export default function ProductGrid({ products, clearHref, categoryNames }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
        <PackageOpen className="h-16 w-16 text-slate-300" />
        <h3 className="text-xl font-semibold text-slate-600">
          No products found
        </h3>
        <p className="text-sm text-slate-400 max-w-xs">
          Try adjusting your search or filters to find what you&apos;re looking
          for.
        </p>
        {clearHref && <ClearFiltersButton href={clearHref} />}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          categoryName={categoryNames?.[product.categoryId]}
        />
      ))}
    </div>
  );
}
