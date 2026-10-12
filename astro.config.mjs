import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const siteConfig = JSON.parse(
  fs.readFileSync(fileURLToPath(new URL('./src/site.config.json', import.meta.url)), 'utf-8')
);
const activeTheme = siteConfig.theme || 'classic';

export default defineConfig({
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '@theme': fileURLToPath(new URL(`./src/themes/${activeTheme}`, import.meta.url))
      }
    }
  }
});
