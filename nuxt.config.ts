// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Careox || NUXT Template For Non Profit Charity",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },

        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap",
        },

        {
          rel: "stylesheet",
          href: "//cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css",
        },
      ],
      script: [
        {
          src: "//cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js", // External CDN script
          defer: true, // Defer loading for better performance
        },
      ],
      // script: [
      //    {
      //       src: ["//cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js", "@/assets/vendors/bootstrap-select/bootstrap-select.min.js"],
      //    },
      // ],
    },
  },

  css: ["jarallax/dist/jarallax.css", "@/assets/vendors/bootstrap/css/bootstrap.min.css", "@/assets/vendors/animate/animate.min.css", "@/assets/vendors/fontawesome/css/all.min.css", "@/assets/vendors/icofont/icofont.min.css", "@/assets/vendors/careox-icons/style.css", "@/assets/css/custom.css"],
  plugins: ["~/plugins/jarallax.client.ts", "~/plugins/tiny-slider.client.ts", "~/plugins/vue-observe-visibility.ts", "~/plugins/vue-select.client.ts", "~/plugins/loadStyles.client.ts"],
  modules: ["@pinia/nuxt", "nuxt-swiper", "nuxt-splide", "@formkit/auto-animate/nuxt"],

  build: {
    transpile: ["vue-countup-v3"],
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "http://localhost:3000", // Define this in your environment variables
    },
  },
});
