// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
    },
});
