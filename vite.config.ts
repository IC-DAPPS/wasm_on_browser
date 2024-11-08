import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import dotenv from "dotenv";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { HOST } from "./src/frontend/src/lib/const";
import { svelteTesting } from "@testing-library/svelte/vite";

dotenv.config();

export default defineConfig({
  plugins: [sveltekit(), svelteTesting(), nodePolyfills()],

  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
    exclude: ["web3disk-types"],
  },
  
  server: {
    proxy: {
      "/api": HOST,
    },
    fs: {
      allow: ["src/declarations/proxy"],
    },
  },

  define: {
    "process.env": process.env,
  },

  build: {
    target: "esnext",
    sourcemap: true,
  },

  test: {
    environment: "jsdom",
  },
});
