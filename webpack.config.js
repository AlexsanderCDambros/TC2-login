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
        path: `.env.${process.env.NODE_ENV || 'development'}`, // Carrega o .env correto
        systemvars: true, // Permite usar variáveis de sistema
        safe: true, // Não quebra se o arquivo .env não existir
        silent: true // Suprime avisos
      })
    ],
  });
};
