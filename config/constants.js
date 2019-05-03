const path = require('path');
const configs = {
  resolve: dir => path.join(__dirname, '..', dir),
  BUILD_DIR: path.join(__dirname, '..', 'public'),
  APP_DIR: path.join(__dirname, '..', 'src'),
};

module.exports = configs;
