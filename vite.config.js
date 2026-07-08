import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react(), tailwindcss()],
    base: process.env.GITHUB_ACTIONS === "true" ? "/coffee/" : "/",
    server: {
      port: 5175,
    },
  };
});
