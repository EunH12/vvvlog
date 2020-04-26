module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/sass/layout.scss";`
      }
    }
  },
}
