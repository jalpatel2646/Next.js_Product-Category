import Link from "next/link";
import { PackageOpen, Home } from "lucide-react";

/**
 * Global not-found page — shown for any unmatched route.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="rounded-full bg-indigo-50 p-6">
        <PackageOpen className="h-14 w-14 text-indigo-400" />
      </div>
      <div>
        <h1 className="text-5xl font-extrabold text-slate-800">404</h1>
        <h2 className="mt-2 text-xl font-semibold text-slate-600">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <div className="flex gap-3">
        <Link
          href="/products"
          className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition-colors"
        >
          Browse Products
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>
      </div>
    </div>
  );
}
