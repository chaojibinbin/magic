module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://wenku.baiduvvv.com',
          ws: true,
          changeOrigin: true,
          '^/api': ''
        },
      }
    }
  }