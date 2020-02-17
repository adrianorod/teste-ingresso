module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api-content.ingresso.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
