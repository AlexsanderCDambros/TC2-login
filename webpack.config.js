const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const Dotenv = require('dotenv-webpack');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "tc2",
    projectName: "login",
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
   plugins: [
      new Dotenv({
        path: `.env.${webpackConfigEnv.NODE_ENV || 'development'}`,
        systemvars: true,
        safe: true,
        silent: true
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(webpackConfigEnv.NODE_ENV || 'development'),
        'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL)
      })
    ],
  });
};
