const withPWA = require("next-offline")

module.exports = withPWA(
  {
    dontAutoRegisterSw: true,
    generateBuildId: async () => "current",
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