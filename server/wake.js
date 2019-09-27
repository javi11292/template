"use strict"

const https = require("https")

setInterval(() => {
    https.get(`https://javiscript.herokuapp.com`)
}, 15 * 60 * 1000)