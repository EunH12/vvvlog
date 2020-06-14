module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/sass/layout.scss";`
      }
    }
  },
}
