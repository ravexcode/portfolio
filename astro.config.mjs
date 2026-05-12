// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://ravexcode.dev',
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    isr: {
      exclude: [
        '/api',
        '/api/*'
      ]
    }
  })
});