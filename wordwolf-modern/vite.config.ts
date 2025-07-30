import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'icon-*.png'],
      manifest: {
        name: 'ワードウルフ',
        short_name: 'WordWolf',
        description: 'ブラウザで遊べる軽量ワードウルフ。収録ワードは400以上。',
        theme_color: '#68d391',
        background_color: '#f7fafc',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          },
          {
            src: 'icon-192.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'any maskable'
          },
          {
            src: 'icon-256.png',
            type: 'image/png',
            sizes: '256x256'
          },
          {
            src: 'icon-512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})