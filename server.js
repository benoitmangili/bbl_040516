var express = require('express');

var path = require('path');
var webpack = require('webpack');
var app = express();

var static_path = path.join(__dirname, 'public');



app.use(express.static(static_path))
  .get('/', function (req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  });



var config = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats:{ colors: true}

}).listen(3000, 'localhost', function (err, result) {
  if (err) { console.log(err) }
  console.log('Listening at localhost:3000');
});
