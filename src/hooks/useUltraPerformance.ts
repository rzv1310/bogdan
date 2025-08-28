import { useEffect, useState, useRef } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  cls: number | null;
  fid: number | null;
  ttfb: number | null;
}

export const useUltraPerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null
  });
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [connectionType, setConnectionType] = useState<string>('unknown');

  useEffect(() => {
    // Device capability detection
    const detectDevice = () => {
      const concurrency = navigator.hardwareConcurrency || 4;
      const memory = (navigator as any).deviceMemory || 4;
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      const isLowEnd = (concurrency <= 4 && isMobile) || memory <= 4;
      setIsLowEndDevice(isLowEnd);
      
      // Connection type detection
      const connection = (navigator as any).connection;
      if (connection) {
        setConnectionType(connection.effectiveType || 'unknown');
      }
    };

    detectDevice();

    // Performance metrics collection
    const collectMetrics = () => {
      // First Contentful Paint
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });

        // First Input Delay
        const fidObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
          }
        });
        fidObserver.observe({ type: 'first-input', buffered: true });
      }

      // Time to First Byte
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {
        const nav = navigationEntries[0] as PerformanceNavigationTiming;
        setMetrics(prev => ({ ...prev, ttfb: nav.responseStart - nav.requestStart }));
      }
    };

    // Collect metrics after a delay to ensure all measurements are available
    setTimeout(collectMetrics, 100);
    
    // Report metrics to console for monitoring (in development)
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        console.group('🚀 Ultra Performance Metrics');
        console.log('📊 FCP (First Contentful Paint):', metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Not measured');
        console.log('🖼️ LCP (Largest Contentful Paint):', metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Not measured');
        console.log('📐 CLS (Cumulative Layout Shift):', metrics.cls ? metrics.cls.toFixed(4) : 'Not measured');
        console.log('⚡ FID (First Input Delay):', metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'Not measured');
        console.log('🌐 TTFB (Time to First Byte):', metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Not measured');
        console.log('📱 Device Type:', isLowEndDevice ? 'Low-end' : 'High-end');
        console.log('🔗 Connection:', connectionType);
        console.groupEnd();
      }, 3000);
    }

  }, []);

  // Performance optimization utilities
  const optimizeForDevice = () => ({
    shouldReduceAnimations: isLowEndDevice || connectionType === 'slow-2g' || connectionType === '2g',
    shouldLazyLoad: isLowEndDevice || connectionType === 'slow-2g',
    shouldPreloadCritical: !isLowEndDevice && connectionType !== 'slow-2g',
    chunkSizeLimit: isLowEndDevice ? 50000 : 100000, // bytes
  });

  // Resource preloading based on device capabilities
  const preloadResource = (href: string, as: string, type?: string) => {
    if (!optimizeForDevice().shouldPreloadCritical) return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  };

  return {
    metrics,
    isLowEndDevice,
    connectionType,
    optimizeForDevice,
    preloadResource
  };
};