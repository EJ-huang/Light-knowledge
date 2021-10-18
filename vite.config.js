import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Light-knowledge/',
  plugins: [vue()],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
        alias: {
             '/images': 'src/assets/images',
        },
    },
    // hmr: { overlay: false }
})
