const fs = require('fs');
const path = require('path');

const { ENABLE_CSS_MODULES } = process.env;
const rootDir = path.resolve(__dirname, '../');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.jsx?$/,
    use: ['babel-loader'],
    exclude: /node_modules/,
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: '[local]-[hash:base64:5]',
          },
        },
      },
      {
        loader: 'postcss-loader',
      },
      {
        loader: 'sass-loader',
      },
    ],
  });
  config.module.rules.push({
    test: /\.(jpg|png|gif)$/,
    use: [
      'file-loader',
      {
        loader: 'image-webpack-loader',
        options: {
          query: {
            gifsicle: {
              interlaced: true,
            },
            mozjpeg: {
              progressive: true,
            },
            optipng: {
              optimizationLevel: 7,
            },
            pngquant: {
              quality: '65-90',
              speed: 4,
            },
          },
        },
      },
    ],
  });

  return config;
};
