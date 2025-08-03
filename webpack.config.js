const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const webpack = require("webpack");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "tc2",
    projectName: "login",
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  const isProduction = argv.mode === "production" || webpackConfigEnv.NODE_ENV === "production";

  return merge(defaultConfig, {
    plugins: [
      new webpack.DefinePlugin({
        "process.env.API_BASE_URL": JSON.stringify(
          isProduction 
            ? "https://sua-api-prod.com" 
            : "http://localhost:3000"
        ),
      }),
    ],
  });
};