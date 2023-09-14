import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["picsum.photos"]
  },
  integrations: [tailwind(), mdx(), preact()],
  markdown: {
    syntaxHighlight: false
  },
  output: 'hybrid',
  adapter: vercel()
});