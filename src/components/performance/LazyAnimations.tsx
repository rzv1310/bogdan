import { lazy, Suspense } from 'react';

// Lazy load heavy animation components
const Squares = lazy(() => import('@/components/ui/squares-background').then(module => ({ default: module.Squares })));
const GlowCard = lazy(() => import('@/components/ui/spotlight-card').then(module => ({ default: module.GlowCard })));

// Fallback components for loading states
const SquaresFallback = ({ className }: { className?: string }) => (
  <div className={`w-full h-full bg-hero ${className}`} />
);

const GlowCardFallback = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border border-border bg-card p-6 ${className}`}>
    {children}
  </div>
);

// Wrapper components with Suspense
export const LazySquares = (props: any) => (
  <Suspense fallback={<SquaresFallback className={props.className} />}>
    <Squares {...props} />
  </Suspense>
);

export const LazyGlowCard = (props: any) => (
  <Suspense fallback={<GlowCardFallback {...props} />}>
    <GlowCard {...props} />
  </Suspense>
);