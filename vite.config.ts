import * as path from "path"; // Use named import for path module
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Correct path alias setup
    },
  },
  // Removed optimizeDeps for now, unless needed
});
