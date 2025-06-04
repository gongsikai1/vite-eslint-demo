// vite.config.ts
import  { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

import eslintPlugin from 'vite-plugin-eslint';

import tsconfig from './tsconfig.eslint.json'

export default defineConfig({
  json: {
    stringify: false,
  },
  plugins: [
    vue(),
    // eslintPlugin({
    //   cache: false,
    //   include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.vue'],
    //   // overrideConfigFile: './tsconfig.eslint.json' // 添加类型声明参数
    //   // overrideConfigFile: tsconfig // 添加类型声明参数
    // }),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
  },
  server: {
    proxy: {
      '/ws-chat': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ws-chat/, '')
      }
    }
  }
})
