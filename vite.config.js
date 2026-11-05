import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: { entryFileNames: (chunk) => (chunk.name === 'entry-server' ? '[name].mjs' : 'assets/[name]-[hash].js') },
    },
  },
})
