"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

/**
 * Error boundary for /products route segment.
 * Catches runtime errors and shows a friendly message.
 */
export default function ProductsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[ProductsError]", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-5 text-center px-4">
      <div className="rounded-full bg-rose-50 p-5">
        <AlertCircle className="h-10 w-10 text-rose-400" />
      </div>
      <h2 className="text-xl font-semibold text-slate-700">
        Something went wrong!
      </h2>
      <p className="text-sm text-slate-400 max-w-sm">{error.message}</p>
      <button
        onClick={reset}
        className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
