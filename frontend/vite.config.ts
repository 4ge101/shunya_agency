import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [preact(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      react: "preact/compat",
      "react-dom": "preact/compat"
    }
  }
});