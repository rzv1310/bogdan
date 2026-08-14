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
  // Build-time prerender: these packages ship CJS/ESM interop that breaks when
  // externalized in the SSR bundle, so bundle them instead.
  ssr: {
    noExternal: ["styled-components", "@react-pdf/renderer", "recharts", "framer-motion"],
  },
}));
