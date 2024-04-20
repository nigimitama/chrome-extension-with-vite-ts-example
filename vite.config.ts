import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: outDir,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup/index.html'),
        option: resolve(__dirname, 'src/options/index.html'),
        background: resolve(__dirname, 'src/background.ts')
      },
      output: {
        entryFileNames: '[name].js',
      }
    },
  },
})
