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
        manualChunks: {
          // Core vendor (critical path)
          'react-vendor': ['react', 'react-dom'],
          // Router (lazy loaded with pages)
          'router': ['react-router-dom'],
          // UI vendor (lazy loaded)
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          // Form and validation (lazy loaded)
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          // Chart libraries (lazy loaded)
          'charts': ['recharts'],
          // PDF libraries (lazy loaded)  
          'pdf': ['@react-pdf/renderer', 'docx'],
          // Heavy utilities (lazy loaded)
          'utils': ['html-to-image', 'framer-motion'],
          // Query and state (lazy loaded after initial render)
          'query': ['@tanstack/react-query'],
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? path.basename(chunkInfo.facadeModuleId, path.extname(chunkInfo.facadeModuleId)) : 'chunk';
          return `js/${facadeModuleId}-[hash].js`;
        },
      }
    },
    target: 'esnext',
    minify: mode === 'production' ? 'esbuild' : false,
  },
}));
