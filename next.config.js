const path = require('path');

module.exports = {
  trailingSlash: true,
  swcMinify: true,
  compress: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        port: '',
      },
    ],
  },
};
