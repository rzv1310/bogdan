import { lazy, Suspense } from 'react';

// Lazy load the heavy ReviewsCarousel3D component
const ReviewsCarousel3D = lazy(() => 
  import('./reviews-carousel-3d').then(module => ({ default: module.ReviewsCarousel3D }))
);

// Lightweight loading skeleton
const CarouselSkeleton = () => (
  <div className="relative w-full h-[400px] flex items-center justify-center bg-muted/20 rounded-lg">
    <div className="flex space-x-4">
      <div className="h-64 w-80 bg-muted rounded-lg animate-pulse" />
      <div className="h-56 w-72 bg-muted/70 rounded-lg animate-pulse" />
      <div className="h-64 w-80 bg-muted rounded-lg animate-pulse" />
    </div>
  </div>
);

interface Review {
  name: string;
  text: string;
  stars?: number;
}

interface ReviewsCarouselLazyProps {
  reviews: Review[];
}

export function ReviewsCarouselLazy({ reviews }: ReviewsCarouselLazyProps) {
  return (
    <Suspense fallback={<CarouselSkeleton />}>
      <ReviewsCarousel3D reviews={reviews} />
    </Suspense>
  );
}