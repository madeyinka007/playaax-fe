import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      src: "/src",
      pages: "/src/pages",
      utils: "/src/utils",
      functions: "/src/functions",
    },
  },
  build: {
    // outDir: "build",
    outDir: "dist",
  },
});
