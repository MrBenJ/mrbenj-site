const webpack = require('webpack');
const path = require('path');
const DotenvPlugin = require('dotenv-webpack');

module.exports = {
	mode: 'development',
  entry: {
      index: ['./app/index.js']
  },

  devServer: {
      port: 3000,
      hot: true
  },
  output: {
      path: __dirname,
      filename: 'bundle.js',
      publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.js'],
      alias: {
          '@app': path.resolve(__dirname, 'app')
      }
  },
  plugins: [
    new DotenvPlugin({
        path: '.env/development'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader', 'eslint-loader'],
        include: [
            path.join(__dirname, 'app')
        ]
      },
      {
      	test: /\.ya?ml$/,
      	loaders: ['json-loader', 'yaml-loader']
      },
      {
      	test: /\.scss$/,
      	use: [
      		'style-loader',
      		{
      			loader: 'css-loader',
      			options: {
      				modules: true
      			}
      		},
      		{
      			loader: 'postcss-loader'
      		},
      		{
      			loader: 'sass-loader'
      		}
      	]
      },
      {
      	test: /\.svg$/,
      	use: ['file-loader']
      },
      {
      	test: /\.flow$/,
      	loader: 'ignore-loader'
      }
    ]
  }
};
