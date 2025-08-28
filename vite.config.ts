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
        // Strategic chunking to reduce main thread blocking
        manualChunks: {
          // Heavy components that can be deferred
          'ui-heavy': ['@/components/ui/reviews-carousel-3d', '@/components/ui/spotlight-card', '@/components/ui/gemini-button-effect', '@/components/ui/pulse-beams'],
          // Chart libraries (only used on some pages)
          'charts': ['recharts', '@/components/charts/EconomicCrimesChart', '@/components/charts/DrugPenaltiesChart', '@/components/charts/RoadAccidentsChart', '@/components/charts/MitaBarChart'],
          // PDF and heavy utilities
          'heavy-utils': ['@react-pdf/renderer', 'docx', 'html-to-image'],
          // Form libraries
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          // Radix UI (heavy but needed)
          'radix': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tabs', '@radix-ui/react-popover'],
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? path.basename(chunkInfo.facadeModuleId, path.extname(chunkInfo.facadeModuleId)) : 'chunk';
          return `js/${facadeModuleId}-[hash].js`;
        },
      }
    },
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
    treeshake: {
      preset: 'recommended',
      moduleSideEffects: false
    }
  },
}));
