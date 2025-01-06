import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.deezer.com', // The actual API you want to call
        changeOrigin: true,  // Ensures the origin of the request is changed to the target
        rewrite: (path) => path.replace(/^\/api/, ''),  // Rewrites the URL path by removing '/api'
      },
    },
  },
})
