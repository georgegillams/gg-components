const fs = require('fs');
const path = require('path');

const { ENABLE_CSS_MODULES } = process.env;
const rootDir = path.resolve(__dirname, '../');
const useCssModules = ENABLE_CSS_MODULES !== 'false';

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules\/(?!bpk-).*/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: useCssModules,
              localIdentName: '[local]-[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
