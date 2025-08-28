import { useEffect } from 'react';

export default function ResourcePreloader() {
  useEffect(() => {
    // Preload critical resources for better performance
    const preloadResources = () => {
      // Preload hero image with high priority
      const heroImageLink = document.createElement('link');
      heroImageLink.rel = 'preload';
      heroImageLink.as = 'image';
      heroImageLink.href = '/lovable-uploads/49019fba-928b-46d2-b2b3-fedace8aacf9.png?v=1';
      heroImageLink.setAttribute('fetchpriority', 'high');
      document.head.appendChild(heroImageLink);

      // Preload critical fonts in Woff2 format
      const fontPreloads = [
        {
          href: 'https://fonts.gstatic.com/s/sacramento/v13/buEzpo6gcdjy0EiZMBUG0CoV_NxLeiw.woff2',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          href: 'https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2',
          type: 'font/woff2', 
          crossorigin: 'anonymous'
        }
      ];

      fontPreloads.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = font.type;
        link.href = font.href;
        link.crossOrigin = font.crossorigin;
        document.head.appendChild(link);
      });
    };

    // Execute preloading immediately
    preloadResources();
  }, []);

  return null; // This component only preloads resources, no visual output
}