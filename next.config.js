const path = require('path');

module.exports = {
  trailingSlash: true,
  target: 'serverless',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
  },
};
