import { lazy, Suspense, ReactNode } from 'react';

// Lazy load the heavy PulseBeams component
const PulseBeams = lazy(() => 
  import('./pulse-beams').then(module => ({ default: module.PulseBeams }))
);

// Lightweight loading fallback - just renders children without beams
const BeamsSkeleton = ({ children }: { children: ReactNode }) => (
  <div className="relative">
    {children}
  </div>
);

interface PulseBeamsLazyProps {
  children: ReactNode;
  beams?: any[];
  className?: string;
}

export function PulseBeamsLazy({ children, beams, className }: PulseBeamsLazyProps) {
  return (
    <Suspense fallback={<BeamsSkeleton>{children}</BeamsSkeleton>}>
      <PulseBeams beams={beams} className={className}>
        {children}
      </PulseBeams>
    </Suspense>
  );
}