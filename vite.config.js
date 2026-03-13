import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 5173,
  }
})
=======
  base: '/sneakerstop/', 
})
>>>>>>> 163e2cbc4c5083dc7064502c4fdfb62ea4609e77
