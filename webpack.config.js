var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'eval',
  
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/main'
  ],
  
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};
