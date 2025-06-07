// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages部署配置
  site: 'https://clothc55030.github.io',
  base: '/slowliving-website',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});