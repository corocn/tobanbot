const config = {
  mode: 'spa',
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  head: {
    title: 'tobanbot',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  generate: {
    dir: '../public'
  },
  router: {
    middleware: ['store-auth']
  },
  axios: {},
  proxy: {}
}

if (process.env.NODE_ENV === 'development') {
  config.axios = {}
  config.proxy = {
    '/api': 'http://localhost:3000'
  }
  config.auth0 = require('./auth0.config.dev')
} else {
  config.auth0 = require('./auth0.config')
}

module.exports = config
