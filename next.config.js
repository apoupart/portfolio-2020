const path = require('path');

module.exports = {
  trailingSlash: true,
  target: 'serverless',
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
