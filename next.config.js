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
  env: {
    MONGO_URI:
      'mongodb+srv://dbServer:NuOkfXm6gRGhUBvU@cluster0.yqvos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    jwtSecret: 'tzGSRhFxpwsjnPuJfkKueNvtfeKGenMT',
  },
};
