const withPWA = require('next-offline');
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.NODE_ENV === 'production' });

const VERSION = process.env.npm_package_version;

const options = {
  env: { VERSION },
  generateBuildId: () => VERSION,
  dontAutoRegisterSw: true,
  workboxOpts: {
    swDest: `${__dirname}/public/service-worker.js`,
    runtimeCaching: [
      {
        urlPattern: /^http/,
        handler: 'CacheFirst',
        options: {
          cacheName: `cache-${VERSION}`,
        },
      },
    ],
  },
};

module.exports = withPWA(withBundleAnalyzer(options));
