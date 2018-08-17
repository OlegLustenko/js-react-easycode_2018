const path = require('path');

module.exports = {
  entry: './app/main.js', // точка входа
  output: {
    // path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    publicPath: '/',
    contentBase: path.resolve('./app'),
    port: 8080,
    inline: true,
  },
  module: [
    {
      test: /.js$/,
    },
  ],
};