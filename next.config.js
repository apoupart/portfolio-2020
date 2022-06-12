const path = require('path');

module.exports = {
  trailingSlash: true,
  target: 'serverless',
  swcMinify: true,
  compress: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
