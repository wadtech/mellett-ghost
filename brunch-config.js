// See http://brunch.io/#documentation for docs.
exports.config = {
  modules: {
    wrapper: false
  },
  conventions: {
    assets: /^assets/
  },
  paths: {
    public: 'assets',
    watched: ['src/']
  },
  files: {
    javascripts: {
      joinTo: 'js/index.js'
    },
    stylesheets: {
      joinTo: 'css/screen.css',
      order: {
        before: ['normalize.styl']
      }
    }
  }
}
