import { useEffect } from 'react';

export const useCriticalCSS = () => {
  useEffect(() => {
    // Since critical CSS is now inline in HTML, this hook is simplified
    // to handle only additional CSS that couldn't be inlined
    const additionalCSS = `
      /* Additional critical styles for better container handling */
      .container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      
      @media (min-width: 640px) {
        .container { max-width: 640px; }
      }
      
      @media (min-width: 768px) {
        .container { 
          max-width: 768px;
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }
      
      @media (min-width: 1024px) {
        .container { max-width: 1024px; }
      }
      
      @media (min-width: 1280px) {
        .container { max-width: 1280px; }
      }
      
      @media (min-width: 1536px) {
        .container { max-width: 1536px; }
      }
    `;

    // Create style element if it doesn't exist
    let styleElement = document.getElementById('additional-critical-css');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'additional-critical-css';
      styleElement.textContent = additionalCSS;
      document.head.appendChild(styleElement);
    }

    return () => {
      // Cleanup on unmount
      const element = document.getElementById('additional-critical-css');
      if (element) {
        element.remove();
      }
    };
  }, []);
};