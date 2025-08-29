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
          // Vendor chunk for framework dependencies 
          'vendor-core': ['react', 'react-dom', 'react-router-dom'],
          
          // PDF generation dependencies (heavy)
          'pdf-bundle': ['@react-pdf/renderer'],
          
          // Document generation (heavy)
          'docx-bundle': ['docx'],
          
          // Charts and image processing (heavy)
          'charts-bundle': ['recharts', 'html-to-image'],
          
          // UI components - grouped by usage
          'ui-forms': [
            '@radix-ui/react-label',
            '@radix-ui/react-checkbox', 
            '@radix-ui/react-radio-group',
            '@radix-ui/react-select',
            '@radix-ui/react-slider',
            '@radix-ui/react-switch',
            'react-hook-form',
            '@hookform/resolvers',
            'zod'
          ],
          
          'ui-overlays': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-popover',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-alert-dialog'
          ],
          
          'ui-navigation': [
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-menubar',
            '@radix-ui/react-tabs',
            '@radix-ui/react-accordion',
            '@radix-ui/react-collapsible'
          ],
          
          'ui-feedback': [
            '@radix-ui/react-toast',
            '@radix-ui/react-progress',
            'sonner'
          ],
          
          'ui-misc': [
            '@radix-ui/react-avatar',
            '@radix-ui/react-separator',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-aspect-ratio',
            'framer-motion',
            'embla-carousel-react'
          ],
          
          // Utilities and styling
          'utils': [
            'clsx',
            'tailwind-merge', 
            'class-variance-authority',
            'lucide-react',
            'date-fns'
          ]
        }
      }
    },
    target: 'esnext',
    minify: mode === 'production' ? 'esbuild' : false,
    sourcemap: mode === 'development',
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query'
    ],
    exclude: [
      '@react-pdf/renderer',
      'docx',
      'recharts', 
      'html-to-image'
    ]
  }
}));
