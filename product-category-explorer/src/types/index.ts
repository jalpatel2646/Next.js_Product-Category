export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  categoryId: string;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  specifications?: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export type SortOption = "default" | "price-asc" | "price-desc" | "rating-desc";
