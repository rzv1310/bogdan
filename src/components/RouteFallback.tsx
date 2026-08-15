/**
 * Visible placeholder while a route chunk is being fetched, so a slow
 * connection never shows a blank white page between pages.
 */
export default function RouteFallback() {
  return (
    <div className="mx-auto w-full max-w-4xl animate-pulse px-4 py-10" aria-hidden="true">
      <div className="h-8 w-3/4 rounded bg-muted" />
      <div className="mt-6 space-y-3">
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-11/12 rounded bg-muted" />
        <div className="h-4 w-10/12 rounded bg-muted" />
      </div>
      <div className="mt-8 h-40 w-full rounded-lg bg-muted" />
    </div>
  );
}
