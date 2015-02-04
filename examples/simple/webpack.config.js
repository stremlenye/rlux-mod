var webpack = require('webpack');

module.exports = {
  // Entry point for static analyzer:
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './app/App'
  ],

  output: {
    // Where to put build results when doing production builds:
    // (Server doesn't write to the disk, but this is required.)
    path: __dirname + '/bundle',

    // JS filename you're going to use in HTML
    filename: 'bundle.js',
    publicPath: '/bundle/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    root: __dirname,
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
                { test: /\.jsx$/, loaders: ['react-hot', 'jsx']}
             ]
  },

  externals: {
    // Showdown is not is node_modules,
    // so we tell Webpack to resolve it to a global
    'showdown': 'window.Showdown'
  },

};
