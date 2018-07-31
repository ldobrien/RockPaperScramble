const path = require('path');
const ObjectRestSpreadPlugin = require('@sucrase/webpack-object-rest-spread-plugin');

module.exports = {

  entry: path.join(__dirname, '/client/src/app.jsx'),

 
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  module: {


    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      query: {
        presets: ["react", "es2015"]
      }
    }],
  },


  watch: true
};