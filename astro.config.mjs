// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // site: 'https://', // ADD SITE
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [partytown(), sitemap(), icon()],
});