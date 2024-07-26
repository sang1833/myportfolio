import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(new URL("src/components", import.meta.url)),
      "@config": fileURLToPath(new URL("src/config", import.meta.url)),
      "@fonts": fileURLToPath(new URL("src/fonts", import.meta.url)),
      "@hooks": fileURLToPath(new URL("src/hooks", import.meta.url)),
      "@images": fileURLToPath(new URL("src/images", import.meta.url)),
      "@pages": fileURLToPath(new URL("src/pages", import.meta.url)),
      "@styles": fileURLToPath(new URL("src/styles", import.meta.url)),
      "@utils": fileURLToPath(new URL("src/utils", import.meta.url))
    }
  }
});
