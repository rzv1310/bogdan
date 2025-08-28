import * as React from "react";

export const useMobileScrollTop = () => {
  const scrollToTop = React.useCallback(() => {
    // Force immediate scroll to top
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      
      // Additional fallback for mobile devices
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, 100);
    }
  }, []);

  const handleMobileNavigation = React.useCallback((callback: () => void) => {
    // Execute navigation
    callback();
    
    // Force scroll to top immediately
    scrollToTop();
    
    // Additional scroll after a short delay to ensure it works
    setTimeout(scrollToTop, 150);
  }, [scrollToTop]);

  return { scrollToTop, handleMobileNavigation };
};