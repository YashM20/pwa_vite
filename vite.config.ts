import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        icons: [
    {
      "src": "vite.png",
      "sizes": "16x16",
      "type": "image/png"
    },
    {
      "src": "vite.png", 
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "vite.png",
      "sizes": "48x48", 
      "type": "image/png"
    },
    {
      "src": "vite.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "vite.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "vite.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "vite.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "vite.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "vite.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "vite.png",
      "sizes": "512x512",
      "type": "image/png"
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
})

