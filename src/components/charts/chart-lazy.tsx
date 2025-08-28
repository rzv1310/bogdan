import { lazy, Suspense } from 'react';

// Lazy load heavy chart components
const DrugPenaltiesChart = lazy(() => import('./DrugPenaltiesChart'));
const RoadAccidentsChart = lazy(() => import('./RoadAccidentsChart'));
const EconomicCrimesChart = lazy(() => import('./EconomicCrimesChart'));
const MitaBarChart = lazy(() => import('./MitaBarChart'));

// Lightweight chart skeleton
const ChartSkeleton = () => (
  <div className="w-full bg-card rounded-lg border p-6">
    <div className="h-6 bg-muted rounded mb-4 w-3/4 animate-pulse" />
    <div className="h-4 bg-muted/70 rounded mb-6 w-1/2 animate-pulse" />
    <div className="h-80 bg-muted/30 rounded animate-pulse" />
  </div>
);

// Lazy wrapper components
export function LazyDrugPenaltiesChart(props: any) {
  return (
    <Suspense fallback={<ChartSkeleton />}>
      <DrugPenaltiesChart {...props} />
    </Suspense>
  );
}

export function LazyRoadAccidentsChart(props: any) {
  return (
    <Suspense fallback={<ChartSkeleton />}>
      <RoadAccidentsChart {...props} />
    </Suspense>
  );
}

export function LazyEconomicCrimesChart(props: any) {
  return (
    <Suspense fallback={<ChartSkeleton />}>
      <EconomicCrimesChart {...props} />
    </Suspense>
  );
}

export function LazyMitaBarChart(props: any) {
  return (
    <Suspense fallback={<ChartSkeleton />}>
      <MitaBarChart {...props} />
    </Suspense>
  );
}