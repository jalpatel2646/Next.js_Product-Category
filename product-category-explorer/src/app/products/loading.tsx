/**
 * Loading UI for /products.
 * Shown while the server component streams in.
 * Uses skeleton cards to maintain layout during load.
 */
export default function ProductsLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
      {/* Header skeleton */}
      <div className="mb-6">
        <div className="h-8 w-48 rounded-lg bg-slate-200" />
        <div className="mt-2 h-4 w-32 rounded bg-slate-100" />
      </div>
      {/* Controls skeleton */}
      <div className="flex gap-4 mb-6">
        <div className="h-9 w-64 rounded-xl bg-slate-200" />
        <div className="ml-auto h-9 w-36 rounded-lg bg-slate-200" />
      </div>
      <div className="flex gap-8">
        {/* Sidebar skeleton */}
        <div className="hidden sm:flex flex-col gap-2 w-52 shrink-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-8 rounded-lg bg-slate-200" />
          ))}
        </div>
        {/* Grid skeleton */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
              <div className="h-52 bg-slate-200" />
              <div className="p-4 space-y-3">
                <div className="h-3 w-16 rounded bg-slate-200" />
                <div className="h-5 w-full rounded bg-slate-200" />
                <div className="h-3 w-24 rounded bg-slate-200" />
                <div className="h-6 w-28 rounded bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
