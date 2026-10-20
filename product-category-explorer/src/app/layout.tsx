import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Product Category Explorer",
    template: "%s | Product Category Explorer",
  },
  description:
    "Discover amazing products across Electronics, Fashion, Home & Kitchen, Sports, and Books. Browse, search, and filter a curated product catalogue.",
  keywords: ["products", "shopping", "electronics", "fashion", "books", "sports", "home"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
