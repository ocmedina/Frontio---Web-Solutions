import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Optimizaciones para SEO y rendimiento
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.logs en producción
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Code splitting para mejor rendimiento
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
          'swiper-vendor': ['swiper'],
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false, // No incluir sourcemaps en producción
  },
  server: {
    port: 3000,
  },
})
