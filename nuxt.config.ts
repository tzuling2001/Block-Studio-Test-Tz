export default defineNuxtConfig({
  ssr: false, // 設置為靜態生成
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/tailwind.css", "@/assets/scss/main.scss"],
  modules: ["@nuxtjs/tailwindcss"],
  components: [{ path: "~/components", pathPrefix: false }],
  app: {
    baseURL: "/Block-Studio-Test-Tz/",
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap",
        },
        {
          rel: "stylesheet",
          // href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap",
          href: "https://fonts.googleapis.com/css2?family=Merriweather:opsz,wght@18..144,300&display=swap",
        },
      ],
    },
  },
});
