import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React dependencies stay in main bundle
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
            return undefined;
          }
          
          // Heavy chart library only for chart pages
          if (id.includes('recharts')) {
            return 'charts';
          }
          
          // PDF generation only for download features
          if (id.includes('@react-pdf/renderer') || id.includes('docx')) {
            return 'pdf';
          }
          
          // Animation libraries only when needed
          if (id.includes('framer-motion') || id.includes('html-to-image')) {
            return 'animations';
          }
          
          // Form validation only for forms
          if (id.includes('react-hook-form') || id.includes('@hookform/resolvers') || id.includes('zod')) {
            return 'forms';
          }
          
          // Radix UI components (only load when needed)
          if (id.includes('@radix-ui') && !id.includes('@radix-ui/react-slot')) {
            return 'radix-ui';
          }
          
          // Split large lucide icon bundle
          if (id.includes('lucide-react') && id.includes('/icons/')) {
            return 'icons';
          }
          
          // Separate UI components that aren't critical
          if (id.includes('/ui/') && (
            id.includes('carousel') || 
            id.includes('spotlight-card') || 
            id.includes('gemini-button') ||
            id.includes('pulse-beams') ||
            id.includes('reviews-carousel')
          )) {
            return 'ui-heavy';
          }
          
          // Keep small, critical components in main bundle
          return undefined;
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? path.basename(chunkInfo.facadeModuleId, path.extname(chunkInfo.facadeModuleId)) : 'chunk';
          return `js/${facadeModuleId}-[hash].js`;
        },
      }
    },
    target: 'esnext',
    minify: mode === 'production' ? 'esbuild' : false,
    sourcemap: false, // Disable sourcemaps in production to reduce bundle size
  },
}));
