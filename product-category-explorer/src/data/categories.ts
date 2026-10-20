import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Electronics",
    slug: "electronics",
    description:
      "Discover the latest gadgets, smartphones, laptops, and cutting-edge tech accessories for every lifestyle.",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80",
  },
  {
    id: "cat-2",
    name: "Fashion",
    slug: "fashion",
    description:
      "Explore trendy clothing, footwear, and accessories for men, women, and kids — style for every occasion.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
  },
  {
    id: "cat-3",
    name: "Home & Kitchen",
    slug: "home-kitchen",
    description:
      "Transform your living space with elegant furniture, smart appliances, and stylish kitchen essentials.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    id: "cat-4",
    name: "Sports",
    slug: "sports",
    description:
      "Gear up for your active lifestyle with premium sporting equipment, fitness gear, and outdoor adventure tools.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
  },
  {
    id: "cat-5",
    name: "Books",
    slug: "books",
    description:
      "Expand your mind with bestsellers, academic titles, fiction, and non-fiction from top authors worldwide.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
