# 🛍️ Product Category Explorer

A full-featured **Product Category Explorer** web application built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. Developed as a college frontend assignment to demonstrate Next.js routing concepts, reusable components, TypeScript types, and responsive UI design.

---

## 📸 Features

- **Product Listing** (`/products`) — Browse all 23 products with search, category filters, and multi-criteria sorting
- **Product Details** (`/products/[id]`) — Full product page with image, specs table, rating, price, availability, and related products
- **Category Listing** (`/categories`) — Cards for all 5 categories with product counts
- **Category Details** (`/categories/[slug]`) — Products filtered by category with search and sort
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Empty States** — Friendly messages with clear-filters action
- **Loading Skeletons** — Skeleton UI while pages stream in
- **Error Boundaries** — Graceful error handling
- **404 Pages** — `notFound()` for invalid product IDs and category slugs

---

## 🛠️ Technology Stack

| Technology | Purpose |
|-----|-----|
| Next.js 15 (App Router) | Framework & routing |
| React 19 | UI library |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Lucide React | Icon library |
| clsx + tailwind-merge | Class name utilities |
| next/image | Optimised images |
| next/font | Inter font |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone or navigate to the project
cd product-category-explorer

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## 📁 Folder Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Root → redirects to /products
│   ├── globals.css             # Global styles
│   ├── not-found.tsx           # Global 404 page
│   ├── products/
│   │   ├── page.tsx            # /products — listing with search/filter/sort
│   │   ├── loading.tsx         # Skeleton loading UI
│   │   ├── error.tsx           # Error boundary
│   │   └── [id]/
│   │       └── page.tsx        # /products/[id] — product detail
│   └── categories/
│       ├── page.tsx            # /categories — category listing
│       └── [slug]/
│           └── page.tsx        # /categories/[slug] — category detail
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with mobile menu
│   │   ├── Footer.tsx          # Footer with links & socials
│   │   └── Breadcrumbs.tsx     # Reusable breadcrumb trail
│   ├── products/
│   │   ├── ProductCard.tsx     # Product tile (image, price, rating)
│   │   ├── ProductGrid.tsx     # Responsive grid + empty state
│   │   ├── ProductFilters.tsx  # Category filter buttons (client)
│   │   ├── ProductSearch.tsx   # Search input (client)
│   │   ├── ProductSort.tsx     # Sort dropdown (client)
│   │   └── ClearFiltersButton.tsx # Clear filters action (client)
│   └── categories/
│       ├── CategoryCard.tsx    # Category tile with gradient overlay
│       └── CategoryGrid.tsx    # Grid of category cards
│
├── data/
│   ├── products.ts             # 23 dummy products across 5 categories
│   └── categories.ts          # 5 categories with slugs and images
│
├── types/
│   └── index.ts               # Product, Category, SortOption types
│
└── lib/
    └── utils.ts               # formatPrice, cn, getDiscountPercent, sortProducts
```

---

## 🗺️ Routes & Routing Concepts

| Route | Type | Description |
|---|---|---|
| `/` | Static | Redirects to `/products` |
| `/products` | Static | All products with search, filter, sort |
| `/products/[id]` | Dynamic | Individual product detail |
| `/categories` | Static | All category cards |
| `/categories/[slug]` | Dynamic | Products in a specific category |

### Dynamic Routes

**`/products/[id]`** — The `[id]` folder creates a dynamic segment. Next.js passes the matched segment value via `params.id`. `generateStaticParams()` pre-renders all product pages at build time (Static Site Generation).

**`/categories/[slug]`** — Similarly, `[slug]` is a dynamic segment matched against category slugs. `generateStaticParams()` pre-renders all category pages.

### `notFound()`

When a product ID or category slug is invalid, `notFound()` is called. This renders the nearest `not-found.tsx` file — either route-level or global.

### URL Search Params

The products page uses `?q=`, `?category=`, and `?sort=` URL params. Client components update these params; the server component reads them via `searchParams` prop and performs filtering server-side. This pattern avoids `useEffect` and keeps filtering logic in a Server Component.

---

## 🎨 Rendering Strategy

| Component | Rendering | Reason |
|---|---|---|
| `ProductsPage` | Server | Reads search params, filters data |
| `ProductCard` | Server | Pure display, no interaction |
| `ProductGrid` | Server | Renders card list |
| `CategoryCard` | Server | Pure display |
| `Navbar` | Client | Uses `usePathname()` for active links |
| `ProductSearch` | Client | User input → URL update |
| `ProductSort` | Client | Dropdown → URL update |
| `ProductFilters` | Client | Button clicks → URL update |
| `ClearFiltersButton` | Client | `router.push()` |

---

## 📦 Dummy Data

- **5 Categories**: Electronics, Fashion, Home & Kitchen, Sports, Books
- **23 Products**: 4–5 per category with realistic names, prices, ratings, descriptions, and specifications
- **Discounts**: Several products have `originalPrice` to show discount badges
- **Out of Stock**: Some products marked `inStock: false`
- **Images**: Unsplash URLs (configured in `next.config.ts` remote patterns)

---

## ✅ Testing Checklist

- [ ] `/products` loads all 23 products
- [ ] Search filters products by name
- [ ] Category filter shows only that category
- [ ] Sorting by price and rating works correctly
- [ ] Clear Filters restores full listing
- [ ] `/products/[id]` shows correct product
- [ ] Invalid product ID → 404 page
- [ ] `/categories` shows all 5 categories
- [ ] `/categories/[slug]` shows correct products
- [ ] Invalid category slug → 404 page
- [ ] All navigation links work
- [ ] Mobile hamburger menu opens/closes
- [ ] No broken images
- [ ] No console errors

---

## 📤 GitHub Submission

```bash
# Initialize (if not already done)
git init
git add .
git commit -m "feat: complete Product Category Explorer Next.js app"

# Push to GitHub
git remote add origin <your-repo-url>
git push -u origin main

# Get latest commit ID
git rev-parse HEAD
```

---

## 📝 License

MIT — College assignment project. Free to use and modify.
