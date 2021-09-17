const { merge } = require("webpack-merge");
const common = require("./webpack.config");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },

  // optimization: {
  //   splitChunks: {
  //     chunks: "async",
  //     minSize: 20000,
  //     maxSize: 10000,
  //     minChunks: 1,
  //   },
  // },

  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   use: ["html-loader"],
      // },

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
});
