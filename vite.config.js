import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/CARIFER/' : '/',
  build: {
    outDir: 'dist',
  }
})