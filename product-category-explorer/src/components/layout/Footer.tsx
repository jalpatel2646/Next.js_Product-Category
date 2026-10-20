import Link from "next/link";
import { Package, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-indigo-600">
              <Package className="h-5 w-5" />
              <span>ShopExplorer</span>
            </Link>
            <p className="mt-2 text-sm text-slate-500">
              Discover amazing products across multiple categories. A Next.js
              App Router demo project.
            </p>
          </div>
          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/products" className="hover:text-indigo-600 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-indigo-600 transition-colors">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3">
              Follow Us
            </h3>
            <div className="flex gap-2">
              {["GitHub", "Twitter", "Instagram"].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                >
                  <ExternalLink className="h-3 w-3" />
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} ShopExplorer. College Frontend Project.
          Built with Next.js, TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
