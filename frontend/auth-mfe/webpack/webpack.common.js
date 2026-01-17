const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
require("dotenv").config({ path: path.resolve(__dirname, "../../../.env") });

const requiredEnvVars = [
  "AUTH_APP_PUBLIC_PATH",
];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});

const PUBLIC_PATH = process.env.AUTH_APP_PUBLIC_PATH;

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
      name: "auth",
      filename: "remoteEntry.js",
      exposes:{
        "./App" : "./src/App.jsx"
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
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    ],
  },
};
