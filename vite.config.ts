import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/components'),
      '@/core': path.resolve(__dirname, './src/core'),
      '@/store': path.resolve(__dirname, './src/store'),
      '@/features/kit': path.resolve(__dirname, './src/features/kit/components'),
      '@/entities': path.resolve(__dirname, './src/entities'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/globalTypes': path.resolve(__dirname, './src/types/global.types.ts'),
      '@/pathsConfig': path.resolve(__dirname, './src/router/entities/paths.config.ts')
    }
  },
  plugins: [react()]
})
