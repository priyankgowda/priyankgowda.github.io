import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

// Custom plugin to copy CNAME after build
function copyCNAME() {
  return {
    name: 'copy-cname',
    closeBundle() {
      try {
        copyFileSync(resolve(__dirname, 'CNAME'), resolve(__dirname, 'dist', 'CNAME'))
        console.log('✅ CNAME file copied to dist/')
      } catch (err) {
        console.warn('⚠️ No CNAME file found. Skipping copy step.')
      }
    }
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), copyCNAME()],
})
