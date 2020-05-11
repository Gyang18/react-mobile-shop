
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.jsx', '.json', 'ts', 'tsx'],
    alias: {
      '@': path.resolve('src'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'comp': path.resolve(__dirname, 'src/components'),
      'api': path.resolve(__dirname, 'src/api'),
      'plug': path.resolve(__dirname, 'src/plugins'),
      'helper': path.resolve(__dirname, 'src/helper'),
      'store': path.resolve(__dirname, 'src/store'),
    },
  },
};
