import { useEffect, useState, useRef } from 'react';

export const usePerformanceOptimized = () => {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [shouldReduceAnimations, setShouldReduceAnimations] = useState(false);
  const cachedDimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    // Detect device capabilities
    const detectDeviceCapabilities = () => {
      const concurrency = navigator.hardwareConcurrency || 4;
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const memoryInfo = (navigator as any).deviceMemory;
      
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Determine if device is low-end
      const isLowEnd = (
        (concurrency <= 4 && isMobile) ||
        (memoryInfo && memoryInfo <= 4) ||
        prefersReducedMotion
      );
      
      setIsLowEndDevice(isLowEnd);
      setShouldReduceAnimations(isLowEnd || prefersReducedMotion);
    };

    detectDeviceCapabilities();

    // Listen for changes in motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setShouldReduceAnimations(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Throttled dimension caching
  const updateCachedDimensions = (element: HTMLElement) => {
    if (element) {
      cachedDimensions.current = {
        width: element.clientWidth,
        height: element.clientHeight
      };
    }
  };

  // RAF-based DOM operations
  const rafDOMOperation = (callback: () => void) => {
    requestAnimationFrame(callback);
  };

  return {
    isLowEndDevice,
    shouldReduceAnimations,
    cachedDimensions: cachedDimensions.current,
    updateCachedDimensions,
    rafDOMOperation
  };
};