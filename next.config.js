const path = require('path');

module.exports = {
  trailingSlash: true,
  assetPrefix: './',
  target: "serverless",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
