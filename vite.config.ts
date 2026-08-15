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
    // Keep heavy libraries in their own chunks so they never land in the
    // initial payload of the landing page.
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Rollup's CJS interop helpers are shared by many packages; keeping
          // them in the always-loaded vendor chunk avoids dragging a heavy
          // chunk (charts/pdf) into the initial payload just for a helper.
          if (id.includes("commonjsHelpers") || id.includes("commonjs-dynamic-modules"))
            return "react-vendor";
          if (!id.includes("node_modules")) return;
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom)[\\/]/.test(id))
            return "react-vendor";
          // Tiny shared utilities used by every page: keep them next to React
          // so they never end up inside a heavy lazy chunk.
          if (/[\\/]node_modules[\\/](clsx|tailwind-merge|class-variance-authority)[\\/]/.test(id))
            return "react-vendor";
          if (id.includes("@react-pdf") || id.includes("pdfkit") || id.includes("fontkit")) return "pdf";
          if (id.includes("/docx/")) return "docx";
          if (/[\\/]node_modules[\\/](recharts|victory-vendor|react-smooth|d3-[a-z-]+|decimal\.js-light)[\\/]/.test(id))
            return "charts";
          if (id.includes("html-to-image")) return "html-to-image";
          if (id.includes("framer-motion")) return "motion";
          if (id.includes("styled-components")) return "styled";
        },
      },
    },
  },
  // Build-time prerender: these packages ship CJS/ESM interop that breaks when
  // externalized in the SSR bundle, so bundle them instead.
  ssr: {
    noExternal: ["styled-components", "@react-pdf/renderer", "recharts", "framer-motion"],
  },
}));
