var webpack = require('webpack');

module.exports = {
  // Entry point for static analyzer:
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    'main'
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
                { test: /\.jsx$/, loaders: ['react-hot', 'jsx']},
                { test: /\.css$/, loader: 'style!css' },
                { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
                { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
                { test: /\.ttf$/,    loader: "file-loader" },
                { test: /\.eot$/,    loader: "file-loader" },
                { test: /\.svg$/,    loader: "file-loader" },
                { test: /\.png$/,    loader: "file-loader" },
                { test: /\.gif$/,    loader: "file-loader" }
             ]
  },

  externals: {
    // Showdown is not is node_modules,
    // so we tell Webpack to resolve it to a global
    'showdown': 'window.Showdown'
  },

};
