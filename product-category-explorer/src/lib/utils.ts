import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Product } from "@/types";
import type { SortOption } from "@/types";

// ── tailwind class merger ─────────────────────────────────────────────────
// This is the standard utility used with shadcn/ui-style projects.
// clsx handles conditional class names, twMerge prevents duplicate Tailwind classes.
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// ── currency formatter ────────────────────────────────────────────────────
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

// ── discount percentage ───────────────────────────────────────────────────
export function getDiscountPercent(
  originalPrice: number,
  currentPrice: number
): number {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

// ── star rating helper ────────────────────────────────────────────────────
export function getRatingStars(rating: number): {
  full: number;
  half: boolean;
  empty: number;
} {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return { full, half, empty };
}

// ── product sort ──────────────────────────────────────────────────────────
export function sortProducts(products: Product[], sort: SortOption): Product[] {
  const arr = [...products];
  switch (sort) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price);
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price);
    case "rating-desc":
      return arr.sort((a, b) => b.rating - a.rating);
    default:
      return arr;
  }
}
