// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://test.com", // ADD SITE
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [partytown(), sitemap(), icon(), react()],
});
