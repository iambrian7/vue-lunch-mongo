const configureAPI = require('../server/src/configure');

module.exports = {
  devServer: {
    before: configureAPI
  }
}