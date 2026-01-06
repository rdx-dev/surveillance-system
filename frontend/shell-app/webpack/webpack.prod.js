const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  // Use 'hidden-source-map' for security (keeps source maps for error tracking but hides from browser)
  devtool: "hidden-source-map",

  // OPTIMIZATION SECTION - This is what you're missing!
  optimization: {
    minimize: true,

    // JavaScript minification
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.log statements in production
            drop_debugger: true, // Remove debugger statements
            pure_funcs: ["console.log", "console.info"], // Remove specific functions
          },
          format: {
            comments: false, // Remove all comments
          },
        },
        extractComments: false, // Don't extract comments to separate file
      }),

      // CSS minification
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true }, // Remove CSS comments
            },
          ],
        },
      }),
    ],

    // Code splitting strategy
    splitChunks: {
      chunks: "all", // Split both sync and async chunks
      cacheGroups: {
        // Vendor chunk - separate node_modules
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: 10, // Higher priority
          reuseExistingChunk: true,
        },
        // React and React-DOM separately (large libraries)
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "react",
          priority: 20, // Highest priority
          reuseExistingChunk: true,
        },
        // Common code shared across chunks
        common: {
          minChunks: 2, // Code used in at least 2 chunks
          priority: 5,
          reuseExistingChunk: true,
        },
      },
    },

    // Separate runtime chunk for better caching
    runtimeChunk: "single",
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name][contenthash].css",
      chunkFilename: "styles/[id][contenthash].css", // Enable for code-split CSS
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      reportFilename: "bundle-report.html",
    }),
  ],
};
