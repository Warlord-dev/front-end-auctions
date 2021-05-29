const {
  CLIENT_URL,
  BACKEND_API,
  STATIC_DOMAIN,
  IS_PROD,
  ENVIRONMENT,
  SENTRY_DSN,
  NETWORKS,
  EXPLORER_URLS,
  API_URLS,
  DEFAULT_NETWORK,
  EXCHANGE_API,
  IMGIX_URL,
  REWARD_CONTRACT_ADDRESSES,
  DEFAULT_WEB3_URL,
  WEB3_URLS,
  MONA_TOKEN_ADDRESSES,
  DTX_ADDRESSES,
  DTXV1_ADDRESSES,
  DIGI_MATERIALS_V2,
  UPGRADER_ADDRESSES,
  DIGITAL_MARKETPLACE_ADDRESSES,
  ROOT_TUNNEL_ADDRESS,
  TIME_INTERVAL,
  USDT_ADDRESS,
  QUICKSWAP_ROUTER,
  CHILD_TUNNEL_V2_ADDRESS,
  ROOT_TUNNEL_V2_ADDRESS,
} = require('config');
const withImages = require('next-images');

module.exports = withImages({
  images: {
    domains: ['digitalax.imgix.net', 'digitalax.mypinata.cloud']
  },
  publicRuntimeConfig: {
    BACKEND_API,
    STATIC_DOMAIN,
    CLIENT_URL,
    IS_PROD,
    ENVIRONMENT,
    SENTRY_DSN,
    NETWORKS,
    EXPLORER_URLS,
    API_URLS,
    DEFAULT_NETWORK,
    EXCHANGE_API,
    IMGIX_URL,
    REWARD_CONTRACT_ADDRESSES,
    DEFAULT_WEB3_URL,
    WEB3_URLS,
    MONA_TOKEN_ADDRESSES,
    DTX_ADDRESSES,
    DTXV1_ADDRESSES,
    DIGI_MATERIALS_V2,
    UPGRADER_ADDRESSES,
    DIGITAL_MARKETPLACE_ADDRESSES,
    ROOT_TUNNEL_ADDRESS,
    TIME_INTERVAL,
    USDT_ADDRESS,
    QUICKSWAP_ROUTER,
    CHILD_TUNNEL_V2_ADDRESS,
    ROOT_TUNNEL_V2_ADDRESS,
  },
  trailingSlash: true,
  assetPrefix: './',
  webpack(cfg, { isServer }) {
    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
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
