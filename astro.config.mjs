// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages部署配置
  site: 'https://clothc55030.github.io',
  // 暫時註解掉base路徑來測試
  // base: '/slowliving-website',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});