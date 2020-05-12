// 项目自定义运行设置
const {
  override, overrideDevServer, addLessLoader, addWebpackAlias, addPostcssPlugins, fixBabelImports,
} = require('customize-cra');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const path = require('path');
// 打包配置
const addCustomize = () => (config) => {
  if (process.env.NODE_ENV === 'production') {
    // 关闭sourceMap
    config.devtool = false;
    // 配置打包后的文件位置
    config.output.path = `${__dirname}../dist/`;
    config.output.publicPath = './';
    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024,
      }),
    );
  }
  return config;
};
// 跨域配置
const devServerConfig = () => (config) => ({
  ...config,
  // 服务开启gzip
  compress: true,
  proxy: {
    '/api': {
      target: 'xxx',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
    },
  },
});
module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css',
    }),
    // addLessLoader({
    //   lessOptions: {
    //     strictMath: true,
    //     noIeCompat: true,
    //     modifyVars: {},
    //     localIdentName: "[local]--[hash:base64:5]" // if you use CSS Modules,
    //     and custom `localIdentName`,
    //     default is '[local]--[hash:base64:5]'.
    //   }
    // }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
      localIdentName: '[local]--[hash:base64:5]', // 自定义 CSS Modules 的 localIdentName
    }),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src/'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'comp': path.resolve(__dirname, 'src/components'),
      'api': path.resolve(__dirname, 'src/api'),
      'plug': path.resolve(__dirname, 'src/plugins'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'store': path.resolve(__dirname, 'src/store'),
    }),
    addPostcssPlugins([require('postcss-pxtorem')({
      rootValue: 16,
      propList: ['*'],
      minPixelValue: 2,
      selectorBlackList: ['am-', 'layout'],
    })]),
    addCustomize(),
  ),
  devServer: overrideDevServer(
    devServerConfig(),
  ),
};
