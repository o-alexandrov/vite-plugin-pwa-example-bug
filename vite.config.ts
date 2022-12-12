import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  define: {
    window: {},
  },

  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  } as const,

  plugins: [
    VitePWA({
      srcDir: "./src",
      filename: `sw.ts`,
      strategies: `injectManifest`,
      injectRegister: false, // we register the service worker ourselves
      devOptions: { enabled: true, type: `module` },
    }),
  ],
});
