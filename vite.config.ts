import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  base: isGitHubPages ? '/caro-game-tracker/' : '/',

  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})