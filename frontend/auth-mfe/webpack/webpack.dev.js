const path = require("path");
const PORT = process.env.AUTH_MFE_PORT || 3001;

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map", // recommended by CRA,
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    port: PORT,
    open: true,
    hot: true, //hot reloading
    compress: true, // enable Z-zip compression
    historyApiFallback: true /*ensures that the server serves the entry
                                point of the SPA for all URLs, allowing the client-side
                                routing to manage the navigation within the application.
                              */,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  // webpack.dev.js - Better approach
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        default: false,
        defaultVendors: false,
        vendors: {
          test: /[\\/]node_modules[\\/](?!react|react-dom|react-router-dom)/,
          name: "vendors",
          priority: 20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
};
