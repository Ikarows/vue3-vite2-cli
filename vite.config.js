const path = require('path')
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import styleImport from 'vite-plugin-style-import'

// import.meta.VITE_APP_ENV
export default defineConfig({
  base: './',
  // outputDir: 'dist',
  // assetsDir: 'public',
  productionSourceMap: false,
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: '@/vant',
          esModule: true,
          resolveStyle: name => `vant/es/${name}/style`
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    // 压缩
    minify: 'esbuild',
    assetsDir: 'public',
    outDir: `dist`
  },
  server: {
    // 是否自动在浏览器打开
    open: false,
    // 是否开启 https
    https: false,
    // 服务端渲染
    ssr: false
    /*proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }*/
  }
})
