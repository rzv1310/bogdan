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
          // Ultra-granular splitting for maximum FCP optimization
          if (id.includes('node_modules')) {
            // Core bundle - keep essential for first render
            if (id.includes('react/') || id.includes('react-dom/')) return 'react-core';
            
            // Radix UI - split into logical groups
            if (id.includes('@radix-ui/react-accordion') || 
                id.includes('@radix-ui/react-collapsible') ||
                id.includes('@radix-ui/react-tabs')) return 'radix-primitives';
            if (id.includes('@radix-ui/react-dialog') || 
                id.includes('@radix-ui/react-sheet') ||
                id.includes('@radix-ui/react-popover')) return 'radix-overlays';
            if (id.includes('@radix-ui')) return 'radix-base';
            
            // Lucide icons - lazy load all icons
            if (id.includes('lucide-react')) return 'icons';
            
            // React Router - only for non-homepage
            if (id.includes('react-router')) return 'router';
            
            // Heavy utilities
            if (id.includes('recharts')) return 'charts';
            if (id.includes('framer-motion') || id.includes('html-to-image')) return 'animations';
            if (id.includes('@react-pdf') || id.includes('docx')) return 'pdf-utils';
            if (id.includes('react-hook-form') || id.includes('zod')) return 'forms';
            
            // Other vendors
            return 'vendor';
          }
          
          // App chunks - split by logical boundaries
          if (id.includes('src/components/ui/squares-background') || 
              id.includes('src/components/ui/spotlight-card')) return 'heavy-ui';
          if (id.includes('src/components/layout/Layout')) return 'layout';
          if (id.includes('src/pages/') && !id.includes('src/pages/Index')) return 'pages';
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? path.basename(chunkInfo.facadeModuleId, path.extname(chunkInfo.facadeModuleId)) : 'chunk';
          return `js/${facadeModuleId}-[hash].js`;
        },
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      }
    },
    target: 'esnext',
    minify: mode === 'production' ? 'esbuild' : false,
    cssCodeSplit: true,
    sourcemap: mode === 'development'
  },
}));
