import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const env = process.env.NODE_ENV || 'development';

const config = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js?[hash]',
    path: path.resolve(__dirname, 'public'),
    publicPath: '',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: [
                'css-loader',
                'sass-loader',
              ],
            }),
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        include: [path.resolve(__dirname, './src/assets/img')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]?[hash]',
              context: path.resolve(__dirname, './src/'),
              emitFile: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('style.css?[hash]'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      minify: {
        removeComments: true,
      },
      inject: true,
    }),
  ],

  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 8000,
    host: '0.0.0.0',
    // inline: true
    // open: true
  },
};

if (env === 'production') {
  config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
  ]);
}

export default config;

