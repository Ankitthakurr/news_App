import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "b2201d4097bc40ebb5b1ab634206f5da": {
        target : "https://newsapi.org/v2/everything?q=Indore&from=2023-11-03&sortBy=publishedAt&apiKey=b2201d4097bc40ebb5b1ab634206f5da",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
