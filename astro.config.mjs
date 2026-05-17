// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  site: 'https://ravexcode.com',
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },
});