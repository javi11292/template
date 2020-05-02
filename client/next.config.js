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
        }
      ]
    }
  }
)