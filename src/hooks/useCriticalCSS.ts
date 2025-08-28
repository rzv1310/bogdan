import { useEffect } from 'react';

export const useCriticalCSS = () => {
  useEffect(() => {
    // Critical CSS for Above The Fold - extracted for immediate rendering
    const criticalCSS = `
      /* Hero section and layout fundamentals */
      .bg-hero { background: hsl(0 0% 0%); }
      .text-hero-foreground { color: hsl(210 40% 98%); }
      .min-h-screen { min-height: 100vh; }
      .container { width: 100%; margin: 0 auto; padding-left: 1rem; padding-right: 1rem; }
      .flex { display: flex; }
      .flex-col { flex-direction: column; }
      .items-center { align-items: center; }
      .justify-center { justify-content: center; }
      .text-center { text-align: center; }
      .relative { position: relative; }
      .hidden { display: none; }
      .block { display: block; }
      .w-full { width: 100%; }
      .h-auto { height: auto; }
      .rounded-lg { border-radius: 0.5rem; }
      .shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
      .mx-auto { margin-left: auto; margin-right: auto; }
      .mt-4 { margin-top: 1rem; }
      
      /* Typography */
      .font-sacramento { font-family: Sacramento, cursive; }
      .font-inter { font-family: Inter, sans-serif; }
      .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
      .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
      .font-bold { font-weight: 700; }
      .leading-tight { line-height: 1.25; }
      
      /* Mobile responsive */
      @media (min-width: 768px) {
        .md\\:hidden { display: none; }
        .md\\:block { display: block; }
        .md\\:flex { display: flex; }
        .md\\:text-5xl { font-size: 3rem; line-height: 1; }
        .md\\:text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .md\\:max-w-\\[90\\%\\] { max-width: 90%; }
        .md\\:ml-auto { margin-left: auto; }
        .container { padding-left: 2rem; padding-right: 2rem; }
      }
      
      /* Button critical styles */
      .inline-flex { display: inline-flex; }
      .items-center { align-items: center; }
      .justify-center { justify-content: center; }
      .rounded-md { border-radius: 0.375rem; }
      .px-4 { padding-left: 1rem; padding-right: 1rem; }
      .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
      .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
      .font-medium { font-weight: 500; }
      .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
    `;

    // Create style element if it doesn't exist
    let styleElement = document.getElementById('critical-css');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'critical-css';
      styleElement.textContent = criticalCSS;
      document.head.insertBefore(styleElement, document.head.firstChild);
    }

    return () => {
      // Cleanup on unmount
      const element = document.getElementById('critical-css');
      if (element) {
        element.remove();
      }
    };
  }, []);
};