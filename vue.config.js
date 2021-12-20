const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8088/',
        changeOrigin: true
      },
    },
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve('src'))
    config.plugin('html').tap(args => {
      args[0].title = 'MMPIC';
      return args;
    });
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 0 }));
  },
};
