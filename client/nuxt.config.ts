// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: "/assets/images/favicon/favicon.png",
        },
        {
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800&amp;display=swap",
          rel: "stylesheet",
        },
        { rel: "stylesheet", href: "assets/css/vendor/vendor.min.css" },
        { rel: "stylesheet", href: "assets/css/plugins/plugins.min.css" },
        { rel: "stylesheet", href: "assets/css/style.min.css" },
      ],
      script: [
        {
          src: "assets/js/vendor/vendor.min.js",
        },
        {
          src: "assets/js/plugins/plugins.min.js",
        },
        {
          src: "assets/js/main.js",
        },
      ],
    },
  },
});
