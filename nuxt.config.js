export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "david-rodriguez",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/scss/reset.scss",
    "@/assets/scss/resources.scss",
    "@/assets/scss/default.scss",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/color-mode",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources",
    "@nuxtjs/sitemap",
  ],
  styleResources: {
    scss: [
      "./assets/scss/abstracts/_functions.scss",
      "./assets/scss/vars/*.scss",
      "./assets/scss/abstracts/_animations.scss",
      "./assets/scss/abstracts/_mixins.scss",
    ],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
