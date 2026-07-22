import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    conditions: ["module", "import", "browser", "default"],
  },
  optimizeDeps: {
    include: ["react-router"],
  },
});
