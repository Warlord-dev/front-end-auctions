const {
  CLIENT_URL, BACKEND_API, STATIC_DOMAIN,
  IS_PROD, ENVIRONMENT, SENTRY_DSN, NETWORKS,
  API_URLS, DEFAULT_NETWORK, RATE_API_KEY,
} = require('config');
const withImages = require('next-images');

module.exports = withImages({
  publicRuntimeConfig: {
    BACKEND_API,
    STATIC_DOMAIN,
    CLIENT_URL,
    IS_PROD,
    ENVIRONMENT,
    SENTRY_DSN,
    NETWORKS,
    API_URLS,
    DEFAULT_NETWORK,
    RATE_API_KEY,
  },
  trailingSlash: true,
  assetPrefix: './',
  webpack(cfg, { isServer }) {
    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();
      if (
        entries['main.js']
        && !entries['main.js'].includes('./polyfills.js')
      ) {
        entries['main.js'].unshift('./polyfills.js');
      }
      return entries;
    };

    if (!isServer) {
      cfg.node = {
        ws: 'empty',
      };
    }

    return cfg;
  },
});
