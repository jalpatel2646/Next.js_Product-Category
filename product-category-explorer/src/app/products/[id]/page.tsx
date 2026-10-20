import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  ShoppingCart,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Tag,
} from "lucide-react";
import { products, getProductById, getRelatedProducts } from "@/data/products";
import { categories } from "@/data/categories";
import {
  formatPrice,
  getDiscountPercent,
} from "@/lib/utils";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductCard from "@/components/products/ProductCard";

/**
 * generateStaticParams tells Next.js which product IDs to pre-render at build time.
 * This is the App Router equivalent of getStaticPaths.
 */
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

/**
 * /products/[id] — Dynamic route, Server Component.
 *
 * Routing concept: [id] is a dynamic segment. Next.js passes the segment
 * value through the `params` prop. We look up the product from local data.
 * If the ID is invalid, we call notFound() which renders the nearest
 * not-found.tsx boundary.
 */
export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  // Show 404 for unknown product IDs
  if (!product) notFound();

  const category = categories.find((c) => c.id === product.categoryId);
  const related = getRelatedProducts(product, 4);
  const discount = product.originalPrice
    ? getDiscountPercent(product.originalPrice, product.price)
    : null;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Products", href: "/products" },
          ...(category
            ? [{ label: category.name, href: `/categories/${category.slug}` }]
            : []),
          { label: product.name },
        ]}
      />

      {/* Back link */}
      <Link
        href="/products"
        className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </Link>

      {/* Main product section */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-md">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {discount && (
            <span className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-rose-500 px-3 py-1 text-sm font-bold text-white shadow">
              <Tag className="h-3.5 w-3.5" />
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Product details */}
        <div className="flex flex-col gap-5">
          {/* Category badge */}
          {category && (
            <Link
              href={`/categories/${category.slug}`}
              className="inline-flex w-fit items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 hover:bg-indigo-100 transition-colors"
            >
              {category.name}
            </Link>
          )}

          <h1 className="text-3xl font-extrabold text-slate-800">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-slate-200 text-slate-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-slate-700">
              {product.rating}
            </span>
            <span className="text-sm text-slate-400">
              ({product.reviewCount.toLocaleString()} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-extrabold text-slate-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            {discount && (
              <span className="text-sm font-semibold text-rose-500">
                Save {discount}%
              </span>
            )}
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2">
            {product.inStock ? (
              <>
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium text-emerald-600">
                  In Stock — Ready to ship
                </span>
              </>
            ) : (
              <>
                <XCircle className="h-5 w-5 text-rose-400" />
                <span className="text-sm font-medium text-rose-500">
                  Out of Stock
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed">{product.description}</p>

          {/* Add to cart */}
          <button
            id="add-to-cart-btn"
            disabled={!product.inStock}
            className={`flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold transition-all shadow ${
              product.inStock
                ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200 hover:shadow-lg"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            <ShoppingCart className="h-5 w-5" />
            {product.inStock ? "Add to Cart" : "Currently Unavailable"}
          </button>

          {/* Specifications */}
          {product.specifications && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-700 mb-3">
                Specifications
              </h2>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key}>
                    <dt className="text-slate-500">{key}</dt>
                    <dd className="font-medium text-slate-800">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
