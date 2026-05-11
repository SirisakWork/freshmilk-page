import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  cacheDir: ".vite-cache",
  resolve: {
    alias: {
      react: "/Users/buttersugar104/freshmilk-preview/node_modules/react",
      "react-dom": "/Users/buttersugar104/freshmilk-preview/node_modules/react-dom",
      "react/jsx-runtime": "/Users/buttersugar104/freshmilk-preview/node_modules/react/jsx-runtime.js",
    },
  },
  plugins: [react()],
});
