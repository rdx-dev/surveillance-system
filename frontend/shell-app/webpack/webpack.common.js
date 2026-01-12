const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
require("dotenv").config({ path: path.resolve(__dirname, "../../../.env") });

const requiredEnvVars = [
  "SHELL_APP_PORT",
  "SHELL_APP_PUBLIC_PATH",
  "AUTH_APP_PUBLIC_PATH",
  "LIVE_FEED_APP_PUBLIC_PATH",
  "ALERT_APP_PUBLIC_PATH",
  "DASHBOARD_APP_PUBLIC_PATH",
  "SETTINGS_APP_PUBLIC_PATH",
];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});

const PUBLIC_PATH = process.env.SHELL_APP_PUBLIC_PATH;

module.exports = {
  entry: { bundle: path.resolve(__dirname, "../src/index.tsx") },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/main-[name]-[contenthash].js",
    clean: true,
    assetModuleFilename: "[name]-[ext]",
    publicPath: PUBLIC_PATH,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/, // ts tsx js jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // i -> case insensitive
        type: "asset/resource",
        generator: {
          filename: "images/[name]-[ext]",
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        auth: `auth@${process.env.AUTH_APP_PUBLIC_PATH}remoteEntry.js`,
        liveFeed: `liveFeed@${process.env.LIVE_FEED_APP_PUBLIC_PATH}remoteEntry.js`,
        alert: `alert@${process.env.ALERT_APP_PUBLIC_PATH}remoteEntry.js`,
        dashboard: `dashboard@${process.env.DASHBOARD_APP_PUBLIC_PATH}remoteEntry.js`,
        settings: `settings@${process.env.SETTINGS_APP_PUBLIC_PATH}remoteEntry.js`,
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.2.0",
          eager: false,
          strictVersion: process.env.NODE_ENV === "production",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.2.0",
          eager: false,
          strictVersion: process.env.NODE_ENV === "production",
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: "^6.20.0",
          eager: false,
          strictVersion: process.env.NODE_ENV === "production",
        },
      },
    }),
    new HtmlWebpackPlugin({
      title: "Typescript",
      filename: "index.html",
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  resolve: { extensions: [".ts", ".js", ".tsx"] }, // we don't need to write App.tsx while importing
};
