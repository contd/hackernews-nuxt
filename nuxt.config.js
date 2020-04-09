export default {
  head: {
    titleTemplate: 'hnews | %s',
    meta: [
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@jasonpkumpf' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://api.hackerwebapp.com' },
      { rel: 'preconnect', href: 'https://api.hackerwebapp.com' }
    ]
  },

  loading: {
    color: '#00C48D'
  },

  manifest: {
    name: 'Hacker News Nuxt',
    short_name: 'HN Nuxt',
    description: 'HackerNews with Nuxt.js',
    theme_color: '#2F495E',
    start_url: '/news'
  },

  devModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://api.hackerwebapp.com'
  },

  plugins: [
    '~/plugins/filters'
  ],

  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: '1y',
      setHeaders (res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=${15 * 60}`)
        }
      }
    }
  }
}
