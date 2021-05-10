module.exports = {
  pluginOptions: {
    eslint: {
      config: 'airbnb',
    },
  },
  configureWebpack: {
    resolve: {
      symlinks: false,
    },
  },
};
