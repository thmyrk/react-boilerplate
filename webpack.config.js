var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'jquery/dist/jquery.min.js',
    'foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      applicationStyles: path.resolve(__dirname, 'app/styles/app.scss'),
      routerHistory: path.resolve(__dirname, 'app/modules/history.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', '@babel/preset-env']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  devtool: 'eval-source-map'
};
