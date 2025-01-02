// https://nuxt.com/docs/api/configuration/nuxt-config

import type { NuxtModule } from "nuxt/schema";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

const viteConfig: NuxtModule = (_options, nuxt) => {
  nuxt.hooks.hook("vite:extendConfig", (config) => {
    config.plugins?.push(vuetify({ autoImport: true }));
  });
};

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  modules: [viteConfig, "@nuxt/eslint"],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
