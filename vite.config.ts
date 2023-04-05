import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/",
  server: {
    host: "0.0.0.0",
    port: 8080
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
