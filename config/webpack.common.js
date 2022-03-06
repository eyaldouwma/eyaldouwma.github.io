/* eslint-disable no-undef */
const paths = require("./paths");
const path = require('path');

const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebFontPlugin = require('webfont-webpack-plugin').default;
const dotenv = require('dotenv');

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + "/index.js"],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
  },

  resolve: {
      extensions: ['.js', '.jsx'],
  },

  // Customize the webpack build process
  plugins: [
    // Generates Fonts from svg icons
    new WebFontPlugin({
        files: path.resolve('./src/Components/Icon/svg-icons/**/*.svg'),
        dest: path.resolve('./src/Components/Icon/font'),
        template: 'css',
        fontName: 'icon-webfont',
    }),
    new DefinePlugin({
        'process.env': JSON.stringify(dotenv.config().parsed)
    }),
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.src + "/assets",
          to: "assets",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
        },
      ],
    }),
    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: "National Missing and Unidentified Persons Kenya",
      favicon: paths.src + "/assets/icons/favicon.png",
      template: paths.public + "/index.html", // template file
      filename: "index.html", // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
          
        ],
      },
      {
        loader: "url-loader",
        test: /\.(svg|eot|ttf|woff|woff2)?$/
      },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

      {
          test: /\.(pdf)$/,
          use: [{
            loader: 'file-loader',
            options: {name: '[name].[ext]'},
          }],
      }
    ],
  },
};
