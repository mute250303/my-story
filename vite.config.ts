import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
   resolve: {
    alias: {
      // 경로 별칭 설정: @를 치면 src 폴더로 연결
      '@': path.resolve(__dirname, './src'),
    },
  },
})
