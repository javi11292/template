const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.NODE_ENV === 'production' });
const { GenerateSW } = require('workbox-webpack-plugin');

const additionalManifestEntries = [];

function createPlugin(revision) {
  return {
    async apply(compiler) {
      compiler.hooks.emit.tap('Plugin', (compilation) => {
        const paths = Object.keys(JSON.parse(compilation.assets['pages-manifest.json'].source()));

        paths.forEach((url) => {
          if (!url.match(/^\/_/)) {
            additionalManifestEntries.push({ url, revision });
          }
        });
      });
    },
  };
}

const options = {
  webpack(config, { isServer, buildId, dev }) {
    if (dev) return config;

    if (isServer) {
      config.plugins.push(createPlugin(buildId));
    } else {
      config.plugins.push(new GenerateSW({
        additionalManifestEntries,
        clientsClaim: true,
        inlineWorkboxRuntime: true,
        swDest: `${__dirname}/public/service-worker.js`,
        exclude: ['build-manifest.json', 'react-loadable-manifest.json'],
        modifyURLPrefix: {
          static: '_next/static',
        },
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com/,
            handler: 'StaleWhileRevalidate',
          },
          {
            urlPattern: new RegExp(`^${process.env.NEXT_PUBLIC_HOST}`),
            handler: 'NetworkFirst',
          },
          {
            urlPattern: /^https/,
            handler: 'CacheFirst',
          },
        ],
      }));
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(options);
