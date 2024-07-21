// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Rozer – Electronics eCommerce HTML Template",
      meta: [
        {
          name: "description",
          content: "zcxz",
        },
        {
          name: "robots",
          content: "noindex, follow",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
        {
          "http-equiv": "x-ua-compatible",
          content: "ie=edge",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [
        {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: "assets/images/favicon/favicon.png",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800&amp;display=swap",
        },

        {
          rel: "stylesheet",
          href: "assets/css/vendor/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "assets/css/vendor/ionicons.min.css",
        },
        {
          rel: "stylesheet",
          href: "assets/css/vendor/simple-line-icons.css",
        },
        {
          rel: "stylesheet",
          href: "assets/css/vendor/font-awesome.min.css",
        },
        {
          rel: "stylesheet",
          href: "assets/css/plugins/animate.css",
        },
        {
          rel: "stylesheet",
          href: "assets/css/plugins/jquery-ui.min.css",
        },
        {
          rel: "stylesheet",
          href: "assets/css/vendor/vendor.min.css",
        },
        {
          rel: "stylesheet",
          href: "assets/css/plugins/plugins.min.css",
        },
        {
          rel: "stylesheet",
          href: "assets/css/plugins/swiper.css",
        },
        {
          rel: "stylesheet",
          href: "assets/css/style.min.css",
        },
        {
          rel: "stylesheet",
          href: "assets/css/style.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.jsjquery-3.6.0.min.js",
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.jsbootstrap.bundle.min.js",
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.2/jquery-migrate.min.js",
          defer: true,
        },

        // {
        //   src: "assets/js/vendor/modernizr-3.11.2.min.js",
        //   defer: true,
        // },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.3/jquery-ui.min.js",
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/swipejs/2.3.1/swipe.min.js",
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/countdown/2.6.0/countdown.min.js",
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/scrollup/2.4.1/jquery.scrollUp.min.js",
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/elevatezoom/2.2.3/jquery.elevatezoom.min.js",
          defer: true,
        },
        {
          src: "assets/js/vendor/vendor.min.js",
          defer: true,
        },
        {
          src: "assets/js/plugins/plugins.min.js",
          defer: true,
        },
        {
          src: "assets/js/main.js",
          defer: true,
        },
      ],
    },
  },
});
