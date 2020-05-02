const withPWA = require("next-offline")

module.exports = withPWA(
  {
    dontAutoRegisterSw: true,
    workboxOpts: {
      swDest: `${__dirname}/public/service-worker.js`,
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: "CacheFirst",
        }
      ]
    }
  }
)