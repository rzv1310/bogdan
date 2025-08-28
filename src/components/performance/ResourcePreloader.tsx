import { useEffect } from 'react';

export default function ResourcePreloader() {
  useEffect(() => {
    // Secondary resource preloads (non-critical assets already handled in index.html)
    const preloadSecondaryResources = () => {
      // Preload other hero section images if needed
      const secondaryImages = [
        '/lovable-uploads/5a0690ed-7910-4259-948b-3d42e2fe9151.png',
        '/lovable-uploads/b1523668-aa61-486e-82ba-395734a9dc03.png'
      ];

      secondaryImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Prefetch route chunks for faster navigation
      const routeChunks = [
        '/assets/router-',
        '/assets/ui-vendor-',
        '/assets/charts-'
      ];

      // Use requestIdleCallback for non-critical preloading
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          routeChunks.forEach(chunk => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = chunk;
            document.head.appendChild(link);
          });
        });
      }
    };

    // Execute secondary preloading after a delay
    setTimeout(preloadSecondaryResources, 1000);
  }, []);

  return null; // This component only preloads resources, no visual output
}