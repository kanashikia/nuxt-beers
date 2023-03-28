// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        class: "dark",
      },
    },
  },
  modules: ["@element-plus/nuxt"],
  css: ["~/styles/main.scss", "~/styles/dark/css-vars.scss"],
});
