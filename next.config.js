const path = require('path');
const withReactSvg = require('next-react-svg');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = withReactSvg({
  include: [path.join(__dirname, 'public/icons')],
  webpack(config, options) {
    return config;
  },
});

module.exports = {
  images: {
    domains: ['occ-0-1489-1490.1.nflxso.net'],
  },
};
