import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@shared': path.resolve(__dirname, './src/shared'),
      // Дополнительные алиасы для landing page
      '@landing': path.resolve(__dirname, './src/pages/landing'),
      '@landing-widgets': path.resolve(__dirname, './src/widgets/landing'),
      '@landing-features': path.resolve(__dirname, './src/features/landing'),
      '@landing-entities': path.resolve(__dirname, './src/entities/landing'),
    },
  },
})
