const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    assetModuleFilename: (pathData) => {
      const ext = path.extname(pathData.filename).slice(1);
      if (['ico', 'jpg', 'jpeg', 'png', 'gif', 'svg'].includes(ext)) {
        return 'images/[hash][ext]';
      } else if (['woff', 'woff2', 'eot', 'ttf', 'otf'].includes(ext)) {
        return 'fonts/[hash][ext]';
      } else if (['mp3', 'mp4'].includes(ext)) {
        return 'audio/[hash][ext]';
      } else {
        return '[hash][ext]';
      }
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // {
      //   test: /\.(ico|jpg|jpeg|png|gif|txt|woff|woff2|eot|ttf|otf|svg|mp3|mp4|)$/,
      //   type: "asset/inline",
      // },
      {
        test: /\.(ico|jpg|jpeg|png|gif|txt|woff|woff2|eot|ttf|otf|svg|mp3|mp4|)$/,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: "./src/icon/rdme-icon/greenvir30.png",
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
