const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/js", "index.js"),
  },
  output: {
    filename: "js/[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.html"),
      inject: "body",
    }),

    new HtmlWebpackPlugin({
      filename: "product.html",
      template: path.resolve(__dirname, "src", "products.html"),
      inject: "body",
    }),

    new HtmlWebpackPlugin({
      filename: "checkout.html",
      template: path.resolve(__dirname, "src", "checkout.html"),
      inject: "body",
    }),

    new HtmlWebpackPlugin({
      filename: "productdetail.html",
      template: path.resolve(__dirname, "src", "productdetail.html"),
      inject: "body",
    }),

    new HtmlWebpackPlugin({
      filename: "thankyou.html",
      template: path.resolve(__dirname, "src", "thankyou.html"),
      inject: "body",
    }),

    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true,
      cleanAfterEveryBuildPatterns: ["dist"],
    }),

    new MiniCssExtractPlugin({
      filename: "./css/[contenthash].main.css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          //Extract CSS from JS to Seperate file
          MiniCssExtractPlugin.loader,
          //CSS loader
          "css-loader",
          //POST CSS AUTOPREFIXER
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
          //SASS loader
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/images",
          },
        },
      },
    ],
  },
};
