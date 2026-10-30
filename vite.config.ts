import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The Kage landing page is a full-viewport, scroll-based experience. The iframe
// it loads (public/landing-pages/kage.html) owns its own document, Three.js
// world and scroll behaviour — the host shell is just a fixed full-bleed frame.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
  },
});
