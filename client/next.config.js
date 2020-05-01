const withPWA = require("next-offline")

module.exports = withPWA(
  {
    dontAutoRegisterSw: true,
    workboxOpts: {
      swDest: `${__dirname}/public/service-worker.js`,
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: "CacheFirst",
          options: {
            cacheName: "offlineCache",
            expiration: {
              maxEntries: 200
            }
          }
        }
      ]
    }
  }
)