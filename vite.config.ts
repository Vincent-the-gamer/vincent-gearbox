import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/gearbox/",
  server: {
    host: "0.0.0.0",
    port: 8080
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  // 打包拆分css和js
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // 拆分js
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString()
          }
        },
      }
    }     
  }
})
