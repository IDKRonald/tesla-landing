import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],


  //Remove Astro-dev-toolbar

  devToolbar:{
    enabled: true
  }
});