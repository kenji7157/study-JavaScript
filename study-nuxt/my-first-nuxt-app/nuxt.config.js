require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-first-nuxt-app',
    titleTemplate: '%s | Nuxt.js tag items viewer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  // npmのパッケージ名を配列に追加する グローバルに使用できるモジュールとなる
  //  -> 各コンポーネントでimportが不要となる
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  axios: {

  },
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/logger.js'
  ],
  // 環境変数は.envファイルから参照
  // 参考記事： https://qiita.com/fj_yohei/items/c77bff6f0177b4ff219e
  env: {
    QIITA_TOKEN: process.env.QIITA_TOKEN
  },
  // ミドルウェアの登録
  router: {
    // auth.jsをグローバルフックとして登録
    middleware: [
      'auth'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

