import { lazy, Suspense } from 'react';

// Simple lazy loading components without complex typing
export const LazySquares = lazy(() => 
  import('@/components/ui/squares-background').then(m => ({ default: m.Squares }))
);

export const LazyGlowCard = lazy(() => 
  import('@/components/ui/spotlight-card').then(m => ({ default: m.GlowCard }))
);

export const LazyLayout = lazy(() => 
  import('@/components/layout/Layout')
);

// Simple fallback components
const SquaresFallback = ({ className }: { className?: string }) => (
  <div className={`w-full h-full bg-hero ${className}`} />
);

const GlowCardFallback = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border border-border bg-card p-6 ${className}`}>
    {children}
  </div>
);

const LayoutFallback = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="h-16 bg-card border-b border-border animate-pulse" />
    <main className="flex-1" />
    <div className="h-32 bg-card border-t border-border animate-pulse" />
  </div>
);

// Wrapper components with Suspense
export const UltraLazySquares = (props: any) => (
  <Suspense fallback={<SquaresFallback {...props} />}>
    <LazySquares {...props} />
  </Suspense>
);

export const UltraLazyGlowCard = (props: any) => (
  <Suspense fallback={<GlowCardFallback {...props} />}>
    <LazyGlowCard {...props} />
  </Suspense>
);

export const UltraLazyLayout = () => (
  <Suspense fallback={<LayoutFallback />}>
    <LazyLayout />
  </Suspense>
);