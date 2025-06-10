import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.js',
      name: 'Counter',
      fileName: 'counter',
    },
  },
  plugins: [
    tailwindcss(),
  ],
})
