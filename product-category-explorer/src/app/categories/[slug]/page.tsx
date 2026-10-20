import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { sortProducts } from "@/lib/utils";
import type { SortOption } from "@/types";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/products/ProductGrid";
import ProductSearch from "@/components/products/ProductSearch";
import ProductSort from "@/components/products/ProductSort";
import { ArrowRight } from "lucide-react";

/**
 * generateStaticParams — pre-renders all category detail pages at build time.
 */
export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ q?: string; sort?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: category.name,
    description: category.description,
  };
}

/**
 * /categories/[slug] — Dynamic route, Server Component.
 *
 * Routing concept: [slug] is a dynamic segment matched against category slugs.
 * The page reads additional ?q= and ?sort= params for in-category filtering.
 * notFound() is called for invalid slugs.
 */
export default async function CategoryDetailPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const { q = "", sort = "default" } = await searchParams;

  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  // Base product set for this category
  let catProducts = getProductsByCategory(category.id);

  // Search within category
  if (q) {
    const lower = q.toLowerCase();
    catProducts = catProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower)
    );
  }

  catProducts = sortProducts(catProducts, sort as SortOption);

  // Other categories for the sidebar
  const otherCategories = categories.filter((c) => c.id !== category.id);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Categories", href: "/categories" },
          { label: category.name },
        ]}
      />

      {/* Category header */}
      <div className="mt-4 mb-6">
        <h1 className="text-3xl font-extrabold text-slate-800">
          {category.name}
        </h1>
        <p className="mt-1 text-slate-500 max-w-2xl">{category.description}</p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <span className="text-sm text-slate-500">
          {catProducts.length} product{catProducts.length !== 1 ? "s" : ""}
        </span>
        <div className="flex flex-wrap items-center gap-3">
          <Suspense>
            <ProductSearch />
          </Suspense>
          <Suspense>
            <ProductSort />
          </Suspense>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product grid */}
        <div className="flex-1 min-w-0">
          <ProductGrid
            products={catProducts}
            clearHref={q ? `/categories/${slug}` : undefined}
          />
        </div>

        {/* Other categories sidebar */}
        <aside className="w-full lg:w-56 shrink-0">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">
            Other Categories
          </h2>
          <ul className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1">
            {otherCategories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/categories/${cat.slug}`}
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-colors"
                >
                  {cat.name}
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 ml-2 text-slate-300" />
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
