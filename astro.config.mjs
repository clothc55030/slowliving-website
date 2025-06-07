// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// 根據環境決定是否使用base路徑
const isProduction = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages部署配置
  site: 'https://clothc55030.github.io',
  // 只在GitHub Pages部署時使用base路徑
  base: isGitHubPages ? '/slowliving-website' : undefined,
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});