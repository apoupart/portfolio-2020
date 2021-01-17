const path = require('path');

module.exports = {
  trailingSlash: true,
  assetPrefix: './',
  publicRuntimeConfig: {
    basePath: '/',
  },
  target: 'serverless',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
