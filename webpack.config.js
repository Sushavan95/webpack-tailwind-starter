const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // ENTRY POINT
  entry: './src/js/index.js',

  // OUTPUT
  output: {
    path: path.resolve(process.cwd(), './dist'),
    filename: './js/script.bundle.js',
    clean: true,
  },

  // CSS, JS AND FILE LOADING
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
      },
      {
        // Extract any CSS or SCSS content and minimize
        test: /\.[s]?css$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { importLoaders: 2 } }, { loader: 'postcss-loader' }, { loader: 'sass-loader' }],
      },
    ],
  },

  plugins: [
    // ADDING HTML PAGES FOR INJECTING BUNDLE JS FILE AND GENERATING INTO DIST FILE
    new HtmlWebpackPlugin({ inject: 'body', template: path.resolve(process.cwd(), 'src/index.html') }),

    // EXTRACTS CSS INTO SEPARATE CSS FILE
    new MiniCssExtractPlugin({
      filename: './css/style.css',
    }),

    // COPY IMAGES TO PUBLIC FOLDER
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/images',
          to: 'assets/images',
        },
      ],
    }),

    // FILE LOADER FOR IMAGES
    // {
    //   test: /\.(jpg|jpeg|png|git|svg)$/i,
    //   type: 'asset/resource',
    // },

    // FILE LOADER FOR FONTS
    // {
    //   test: /\.(svg|eot|woff|woff2|ttf)$/,
    //   use: ['file-loader'],
    // },
  ],

  // DEV SERVER
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    watchFiles: [path.resolve(process.cwd(), 'src/index.html')],
    compress: true,
    port: 9000,
    hot: true,
  },

  // EXTERNAL
  externals: {
    jquery: 'jQuery',
  },
};
