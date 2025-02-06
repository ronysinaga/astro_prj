// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      theme: 'github-light',
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
    remarkPlugins: [],
    rehypePlugins: [],
  },
  vite: {
    server: {
      fs: {
        // Handle UTF-8 with BOM
        strict: false
      }
    }
  }
});
