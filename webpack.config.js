const { merge } = require('webpack-merge');
const common = require('./tools/webpack_config/webpack.common.js')

module.exports = ({ env }) => {
  console.log(env + 'mode');
  const enviro = require(`./tools/webpack_config/webpack.${env}.js`);
  return merge(common, enviro);
};