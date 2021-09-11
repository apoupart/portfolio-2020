const path = require('path');
const { i18n } = require('./next-i18next.config');

module.exports = {
  trailingSlash: true,
  target: 'experimental-serverless-trace',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n,
};
