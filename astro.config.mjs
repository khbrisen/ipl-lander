import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ipl-cricket-in.netlify.app',
  integrations: [sitemap()],
  output: 'static',
});
