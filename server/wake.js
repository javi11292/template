const https = require("https")

setInterval(() => {
  https.get(`https://${process.env.npm_package_name}.herokuapp.com`)
}, 15 * 60 * 1000)