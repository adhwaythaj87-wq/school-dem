import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const configUrl = fs.existsSync(fileURLToPath(new URL('./school.config.json', import.meta.url)))
  ? new URL('./school.config.json', import.meta.url)
  : new URL('./src/site.config.json', import.meta.url);

const siteConfig = JSON.parse(fs.readFileSync(fileURLToPath(configUrl), 'utf-8'));
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
