// https://nuxt.com/docs/api/configuration/nuxt-config
const meta = {
  description: 'Mert Certel is a frontend developer based in Turkey.',
}

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Mert Certel',
      meta: [
        {
          name: 'description',
          content: meta.description,
        },
        {
          property: 'og:title',
          content: 'Mert Certel',
        },
        {
          property: 'og:description',
          content: meta.description,
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
          content: meta.description,
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
          content: meta.description,
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
