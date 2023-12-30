// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Mert Certel',
      meta: [
        {
          property: 'og:title',
          content: 'Mert Certel',
        },
        {
          property: 'og:description',
          content: 'Mert Certel is a frontend developer based in Turkey.',
        },
        {
          property: 'og:image',
          content: 'https://mertcertel.com/images/og.png',
        },
        {
          property: 'og:url',
          content: 'https://mertcertel.com',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:locale',
          content: 'en_US',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: '@mertcertel',
        },
        {
          name: 'twitter:creator',
          content: '@mertcertel',
        },
        {
          name: 'twitter:title',
          content: 'Mert Certel',
        },
        {
          name: 'twitter:description',
          content: 'Mert Certel is a frontend developer based in Turkey.',
        },
        {
          name: 'twitter:image',
          content: 'https://mertcertel.com/images/og.png',
        },
        {
          name: 'twitter:image:alt',
          content: 'Mert Certel',
        },
        {
          name: 'twitter:url',
          content: 'https://mertcertel.com',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: '@mertcertel',
        },
        {
          name: 'twitter:creator',
          content: '@yulafezmem',
        },
        {
          name: 'twitter:title',
          content: 'Mert Certel',
        },
        {
          name: 'twitter:description',
          content: 'Mert Certel is a frontend developer based in Turkey.',
        },
        {
          name: 'twitter:image',
          content: 'https://mertcertel.com/images/og.png',
        },
        {
          name: 'twitter:image:alt',
          content: 'Mert Certel',
        },
        {
          name: 'twitter:url',
          content: 'https://mertcertel.com',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  features: {
    noScripts: true,
  },
})
