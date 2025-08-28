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
          // CRITICAL: Let all page components be chunked automatically by Vite
          // This includes both /pages/ and /src/pages/ paths
          if (id.includes('/pages/') || id.includes('\\pages\\') || 
              id.includes('/src/pages/') || id.includes('\\src\\pages\\')) {
            return undefined; // Let Vite handle all page chunks automatically
          }
          
          // Core React dependencies stay in main bundle for performance
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
          
          // Radix UI components (only load when needed) but keep slot in main bundle
          if (id.includes('@radix-ui') && !id.includes('@radix-ui/react-slot')) {
            return 'radix-ui';
          }
          
          // Split large lucide icon bundle but keep common icons in main
          if (id.includes('lucide-react') && id.includes('/icons/') && 
              !id.includes('phone') && !id.includes('check') && !id.includes('play')) {
            return 'icons';
          }
          
          // Keep critical and small components in main bundle
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
