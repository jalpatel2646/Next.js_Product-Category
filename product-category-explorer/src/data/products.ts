import type { Product } from "@/types";

export const products: Product[] = [
  // ── Electronics ──────────────────────────────────────────────────────────
  {
    id: "p-001",
    name: "Sony WH-1000XM5 Headphones",
    slug: "sony-wh1000xm5-headphones",
    description:
      "Industry-leading noise cancellation with 30-hour battery life and multipoint connection. Crystal-clear hands-free calling and smart features that adapt to your world.",
    price: 279.99,
    originalPrice: 349.99,
    categoryId: "cat-1",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    rating: 4.8,
    reviewCount: 3241,
    inStock: true,
    specifications: {
      Driver: "30mm",
      "Frequency Response": "4Hz–40,000Hz",
      Battery: "30 hrs",
      Connectivity: "Bluetooth 5.2",
      Weight: "250g",
    },
  },
  {
    id: "p-002",
    name: "Apple MacBook Air M3",
    slug: "apple-macbook-air-m3",
    description:
      "Supercharged by the M3 chip, the redesigned MacBook Air is faster and more capable than ever. With a stunning 15-inch Liquid Retina display and up to 18-hour battery.",
    price: 1299.0,
    categoryId: "cat-1",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
    rating: 4.9,
    reviewCount: 1872,
    inStock: true,
    specifications: {
      Chip: "Apple M3",
      RAM: "8GB",
      Storage: "256GB SSD",
      Display: '15.3" Liquid Retina',
      Battery: "18 hrs",
    },
  },
  {
    id: "p-003",
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    description:
      "Experience the ultimate Galaxy smartphone with a built-in S Pen, 200MP camera, and Galaxy AI for smarter everyday tasks.",
    price: 1199.99,
    originalPrice: 1399.99,
    categoryId: "cat-1",
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80",
    rating: 4.7,
    reviewCount: 2104,
    inStock: true,
    specifications: {
      Display: '6.8" Dynamic AMOLED 2X',
      Processor: "Snapdragon 8 Gen 3",
      RAM: "12GB",
      Storage: "256GB",
      Camera: "200MP main",
    },
  },
  {
    id: "p-004",
    name: "Logitech MX Master 3S Mouse",
    slug: "logitech-mx-master-3s",
    description:
      "The MX Master 3S is built and tuned for advanced computer users who demand more control and efficiency. Ultra-fast scrolling and 8000 DPI precision.",
    price: 99.99,
    originalPrice: 119.99,
    categoryId: "cat-1",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    rating: 4.6,
    reviewCount: 5678,
    inStock: true,
    specifications: {
      DPI: "200–8000",
      Battery: "70 days",
      Connectivity: "Bluetooth / USB-C",
      Buttons: "7",
      OS: "Windows / Mac / Linux",
    },
  },
  {
    id: "p-005",
    name: 'LG 27" 4K Monitor',
    slug: "lg-27-4k-monitor",
    description:
      "Stunning IPS 4K UHD display with AMD FreeSync for smooth visuals. Ideal for creative professionals and serious gamers.",
    price: 449.99,
    categoryId: "cat-1",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    rating: 4.5,
    reviewCount: 987,
    inStock: false,
    specifications: {
      Resolution: "3840×2160",
      Panel: "IPS",
      "Refresh Rate": "60Hz",
      Ports: "2× HDMI, 1× DisplayPort",
      "Response Time": "5ms",
    },
  },

  // ── Fashion ───────────────────────────────────────────────────────────────
  {
    id: "p-006",
    name: "Nike Air Max 270",
    slug: "nike-air-max-270",
    description:
      "The Nike Air Max 270 delivers a sleek silhouette with Max Air cushioning in the heel for all-day comfort and iconic style.",
    price: 149.99,
    originalPrice: 175.0,
    categoryId: "cat-2",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    rating: 4.6,
    reviewCount: 8203,
    inStock: true,
    specifications: {
      Material: "Mesh upper",
      Sole: "Rubber",
      Sizes: "US 6–14",
      Colors: "Multiple",
      Closure: "Lace-up",
    },
  },
  {
    id: "p-007",
    name: "Levi's 511 Slim Jeans",
    slug: "levis-511-slim-jeans",
    description:
      "Classic slim fit jeans from Levi's with just the right amount of stretch for comfort. A versatile wardrobe staple for any casual occasion.",
    price: 59.99,
    categoryId: "cat-2",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
    rating: 4.4,
    reviewCount: 4512,
    inStock: true,
    specifications: {
      Fit: "Slim",
      Material: "99% Cotton, 1% Elastane",
      Rise: "Mid-rise",
      Sizes: "28–42 waist",
      Care: "Machine washable",
    },
  },
  {
    id: "p-008",
    name: "Ray-Ban Aviator Classic",
    slug: "ray-ban-aviator-classic",
    description:
      "The original Aviator sunglasses with iconic metal frame, 100% UV protection, and timeless style that never goes out of fashion.",
    price: 161.0,
    originalPrice: 189.0,
    categoryId: "cat-2",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    rating: 4.7,
    reviewCount: 2890,
    inStock: true,
    specifications: {
      Frame: "Metal",
      Lens: "Crystal Green",
      "UV Protection": "100%",
      "Frame Size": "58mm",
      Gender: "Unisex",
    },
  },
  {
    id: "p-009",
    name: "Adidas Ultraboost 23",
    slug: "adidas-ultraboost-23",
    description:
      "Engineered for performance running, the Ultraboost 23 features responsive BOOST midsole, Primeknit upper, and Continental rubber outsole.",
    price: 189.99,
    categoryId: "cat-2",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    rating: 4.5,
    reviewCount: 3102,
    inStock: false,
    specifications: {
      Midsole: "BOOST",
      Upper: "Primeknit+",
      Outsole: "Continental Rubber",
      Drop: "10mm",
      Weight: "310g",
    },
  },
  {
    id: "p-010",
    name: "Fossil Gen 6 Smartwatch",
    slug: "fossil-gen-6-smartwatch",
    description:
      "A stylish hybrid smartwatch with Wear OS, health tracking, fast charging, and 40+ hours of battery life in a classic dress-watch look.",
    price: 229.0,
    originalPrice: 295.0,
    categoryId: "cat-2",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    rating: 4.3,
    reviewCount: 1456,
    inStock: true,
    specifications: {
      OS: "Wear OS by Google",
      Display: "AMOLED 1.28\"",
      Battery: "42+ hrs",
      "Water Resistance": "3 ATM",
      Sensors: "SpO2, Heart Rate, GPS",
    },
  },

  // ── Home & Kitchen ────────────────────────────────────────────────────────
  {
    id: "p-011",
    name: "Instant Pot Duo 7-in-1",
    slug: "instant-pot-duo-7in1",
    description:
      "7-in-1 multi-use programmable pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker, and warmer. 13 one-touch programs.",
    price: 79.99,
    originalPrice: 99.99,
    categoryId: "cat-3",
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&q=80",
    rating: 4.7,
    reviewCount: 12450,
    inStock: true,
    specifications: {
      Capacity: "6 Quart",
      Programs: "13",
      Material: "Stainless Steel",
      Wattage: "1000W",
      Dimensions: '13.4"×12.3"×12.5"',
    },
  },
  {
    id: "p-012",
    name: "Dyson V15 Detect Vacuum",
    slug: "dyson-v15-detect-vacuum",
    description:
      "Reveals microscopic dust with a built-in laser. Automatically adapts suction to the task and displays a real-time particle count on screen.",
    price: 699.99,
    originalPrice: 749.99,
    categoryId: "cat-3",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    rating: 4.8,
    reviewCount: 2341,
    inStock: true,
    specifications: {
      Suction: "230 AW",
      Runtime: "60 mins",
      Filtration: "HEPA",
      Dustbin: "0.77L",
      Weight: "3.1kg",
    },
  },
  {
    id: "p-013",
    name: "KitchenAid Stand Mixer",
    slug: "kitchenaid-stand-mixer",
    description:
      "The iconic KitchenAid Stand Mixer with 10 speeds, 5-quart stainless steel bowl, and over 10 optional hub attachments for endless culinary creativity.",
    price: 379.99,
    categoryId: "cat-3",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    rating: 4.9,
    reviewCount: 6789,
    inStock: true,
    specifications: {
      Capacity: "5 Quart",
      Power: "325W",
      Speeds: "10",
      Colors: "Multiple",
      Attachments: "Whisk, Dough Hook, Flat Beater",
    },
  },
  {
    id: "p-014",
    name: "Philips Hue Smart Bulb Starter Kit",
    slug: "philips-hue-starter-kit",
    description:
      "Control millions of colors and shades of white light with voice commands or the Hue app. Includes bridge and 4 A19 smart bulbs.",
    price: 139.99,
    originalPrice: 169.99,
    categoryId: "cat-3",
    image:
      "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?w=800&q=80",
    rating: 4.5,
    reviewCount: 3456,
    inStock: false,
    specifications: {
      Bulbs: "4× A19",
      Lumens: "800lm each",
      Colors: "16 million",
      Connectivity: "Zigbee / BT",
      "Voice Control": "Alexa, Google, Siri",
    },
  },
  {
    id: "p-015",
    name: "Nespresso Vertuo Next Coffee Maker",
    slug: "nespresso-vertuo-next",
    description:
      "Brew 5 cup sizes from espresso to alto with one-touch simplicity. Centrifusion extraction technology for authentic barista-style coffee at home.",
    price: 149.0,
    categoryId: "cat-3",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    rating: 4.6,
    reviewCount: 4102,
    inStock: true,
    specifications: {
      "Cup Sizes": "5 (Espresso to Alto)",
      Technology: "Centrifusion",
      Connectivity: "Wi-Fi / Bluetooth",
      "Water Tank": "37 oz",
      Wattage: "1500W",
    },
  },

  // ── Sports ────────────────────────────────────────────────────────────────
  {
    id: "p-016",
    name: "Peloton Bike+ Stationary Bike",
    slug: "peloton-bike-plus",
    description:
      "Auto-follow resistance, 360° rotating touchscreen, and live classes bring the studio experience home. Includes Apple GymKit integration.",
    price: 2495.0,
    originalPrice: 2895.0,
    categoryId: "cat-4",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    rating: 4.7,
    reviewCount: 892,
    inStock: true,
    specifications: {
      Display: '24" HD Touchscreen',
      Resistance: "100 levels",
      Output: "100–400W",
      Weight: "140 lbs",
      Subscription: "Peloton All-Access required",
    },
  },
  {
    id: "p-017",
    name: "Callaway Strata Golf Set",
    slug: "callaway-strata-golf-set",
    description:
      "Complete 12-piece golf set featuring titanium driver, stainless steel irons, and a stand bag — perfect for beginners and occasional golfers.",
    price: 249.99,
    categoryId: "cat-4",
    image:
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80",
    rating: 4.3,
    reviewCount: 1234,
    inStock: true,
    specifications: {
      Pieces: "12",
      Driver: "Titanium 460cc",
      Irons: "Stainless 5-SW",
      Putter: "Included",
      Bag: "Stand Bag",
    },
  },
  {
    id: "p-018",
    name: "Garmin Forerunner 265 GPS Watch",
    slug: "garmin-forerunner-265",
    description:
      "AMOLED display, built-in GPS, training readiness, and HRV status monitoring for runners who want data-driven performance insights.",
    price: 449.99,
    originalPrice: 499.99,
    categoryId: "cat-4",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
    rating: 4.8,
    reviewCount: 2107,
    inStock: true,
    specifications: {
      Display: "AMOLED",
      GPS: "Multi-band",
      Battery: "15 days / 20hrs GPS",
      "Water Rating": "5 ATM",
      Weight: "47g",
    },
  },
  {
    id: "p-019",
    name: "Wilson Evolution Basketball",
    slug: "wilson-evolution-basketball",
    description:
      "The #1 selling indoor basketball in the USA. Premium microfiber composite leather and moisture management channel for superior grip and control.",
    price: 74.99,
    categoryId: "cat-4",
    image:
      "https://images.unsplash.com/photo-1546519638405-a9f6ef71f0a1?w=800&q=80",
    rating: 4.6,
    reviewCount: 5430,
    inStock: true,
    specifications: {
      Size: "Size 7 (Official)",
      Material: "Microfiber Composite Leather",
      Use: "Indoor",
      Brand: "Wilson",
      Inflation: "Pre-inflated",
    },
  },

  // ── Books ─────────────────────────────────────────────────────────────────
  {
    id: "p-020",
    name: "Atomic Habits by James Clear",
    slug: "atomic-habits-james-clear",
    description:
      "A #1 New York Times bestseller. Proven framework for building good habits, breaking bad ones, and mastering the tiny behaviours that lead to remarkable results.",
    price: 16.99,
    originalPrice: 27.0,
    categoryId: "cat-5",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
    rating: 4.9,
    reviewCount: 48923,
    inStock: true,
    specifications: {
      Author: "James Clear",
      Pages: "320",
      Publisher: "Avery",
      Language: "English",
      Format: "Hardcover / Paperback / eBook",
    },
  },
  {
    id: "p-021",
    name: "The Pragmatic Programmer",
    slug: "the-pragmatic-programmer",
    description:
      "20th Anniversary Edition. David Thomas & Andrew Hunt share the wisdom, philosophy, and career advice that have shaped generations of software developers.",
    price: 49.99,
    categoryId: "cat-5",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    rating: 4.8,
    reviewCount: 7654,
    inStock: true,
    specifications: {
      Authors: "David Thomas, Andrew Hunt",
      Pages: "352",
      Publisher: "Addison-Wesley",
      Edition: "20th Anniversary",
      Format: "Paperback / eBook",
    },
  },
  {
    id: "p-022",
    name: "Dune by Frank Herbert",
    slug: "dune-frank-herbert",
    description:
      "Set in the distant future, Dune tells the story of young Paul Atreides on the desert planet Arrakis. A tightly written science fiction masterpiece.",
    price: 12.99,
    originalPrice: 18.0,
    categoryId: "cat-5",
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&q=80",
    rating: 4.7,
    reviewCount: 32100,
    inStock: false,
    specifications: {
      Author: "Frank Herbert",
      Pages: "688",
      Publisher: "Ace Books",
      Genre: "Science Fiction",
      Format: "Paperback / eBook",
    },
  },
  {
    id: "p-023",
    name: "Clean Code by Robert C. Martin",
    slug: "clean-code-robert-martin",
    description:
      "A handbook of agile software craftsmanship. Learn to write code that is readable, understandable, and maintainable through real-world case studies.",
    price: 44.99,
    categoryId: "cat-5",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
    rating: 4.6,
    reviewCount: 9871,
    inStock: true,
    specifications: {
      Author: "Robert C. Martin",
      Pages: "464",
      Publisher: "Prentice Hall",
      Genre: "Software Engineering",
      Format: "Paperback",
    },
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getRelatedProducts(
  product: Product,
  limit = 4
): Product[] {
  return products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, limit);
}
