import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base MUST match the GitHub repo name exactly: https://github.com/hassandevelopment/gulfair
export default defineConfig({
  base: '/gulfair/',
  plugins: [react(), tailwindcss()],
})
