"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Tag } from "lucide-react";
import type { Product } from "@/types";
import { formatPrice, getDiscountPercent } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  categoryName?: string;
}

/**
 * ProductCard — reusable card used on /products and /categories/[slug].
 * Client Component because of the cart button onClick handler.
 */
export default function ProductCard({ product, categoryName }: ProductCardProps) {
  const discount =
    product.originalPrice
      ? getDiscountPercent(product.originalPrice, product.price)
      : null;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Discount badge */}
        {discount && (
          <span className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-rose-500 px-2.5 py-0.5 text-xs font-bold text-white shadow">
            <Tag className="h-3 w-3" />
            {discount}% OFF
          </span>
        )}
        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 gap-2">
        {categoryName && (
          <p className="text-xs font-medium uppercase tracking-wide text-indigo-500">
            {categoryName}
          </p>
        )}
        <h3 className="font-semibold text-slate-800 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.round(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-slate-200 text-slate-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-slate-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price row */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-slate-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          {product.inStock && (
            <button
              aria-label={`Add ${product.name} to cart`}
              onClick={(e) => {
                e.preventDefault();
                // Cart functionality would be implemented here
              }}
              className="rounded-full bg-indigo-50 p-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
