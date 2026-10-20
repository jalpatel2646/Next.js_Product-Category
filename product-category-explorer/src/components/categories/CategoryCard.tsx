import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
  productCount: number;
}

/**
 * CategoryCard — reusable card on /categories listing.
 * Server component.
 */
export default function CategoryCard({ category, productCount }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        {/* Category name on image */}
        <div className="absolute bottom-3 left-4">
          <h3 className="text-lg font-bold text-white">{category.name}</h3>
          <span className="text-xs text-white/80">{productCount} products</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 items-center justify-between p-4">
        <p className="text-sm text-slate-500 line-clamp-2">{category.description}</p>
        <ArrowRight className="ml-3 h-5 w-5 shrink-0 text-slate-300 group-hover:text-indigo-500 transition-colors" />
      </div>
    </Link>
  );
}
