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
          // Keep critical dependencies in main bundle: react, react-dom, react-router-dom, @tanstack/react-query
          // Only separate truly heavy, non-critical utilities
          'charts': ['recharts'], // Only loaded on chart pages
          'pdf': ['@react-pdf/renderer', 'docx'], // Only loaded for downloads
          'heavy-utils': ['html-to-image', 'framer-motion'], // Only loaded for animations/exports
          'radix-forms': ['@hookform/resolvers', 'react-hook-form', 'zod'], // Only loaded for forms
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
