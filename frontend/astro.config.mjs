import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["picsum.photos"]
  },
  integrations: [tailwind(), mdx()],
  markdown: {
    syntaxHighlight: false
  }
});