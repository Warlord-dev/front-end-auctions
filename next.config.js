const {
  CLIENT_URL, BACKEND_API, STATIC_DOMAIN,
  IS_PROD, ENVIRONMENT, SENTRY_DSN,
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
  },
  trailingSlash: true,
  webpack(cfg) {
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

    return cfg;
  },
});
