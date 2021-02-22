const withPWA = require("next-offline")

const VERSION = process.env.npm_package_version

const options = {
  env: { VERSION },
  generateBuildId: () => VERSION,
  dontAutoRegisterSw: true,
  workboxOpts: {
    swDest: `${__dirname}/public/service-worker.js`,
    runtimeCaching: [
      {
        urlPattern: /^http/,
        handler: "CacheFirst",
        options: {
          cacheName: `cache-${VERSION}`,
        }
      }
    ]
  }
}

module.exports = withPWA(options)