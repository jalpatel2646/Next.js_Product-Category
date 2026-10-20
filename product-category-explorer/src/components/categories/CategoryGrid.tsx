import type { Category } from "@/types";
import CategoryCard from "./CategoryCard";
import { getProductsByCategory } from "@/data/products";

interface CategoryGridProps {
  categories: Category[];
}

/**
 * CategoryGrid — renders a responsive grid of CategoryCards.
 * Calculates product count per category from the local data.
 */
export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat) => (
        <CategoryCard
          key={cat.id}
          category={cat}
          productCount={getProductsByCategory(cat.id).length}
        />
      ))}
    </div>
  );
}
