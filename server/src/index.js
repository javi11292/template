const express = require("express")
const compression = require("compression")
const https = require("https")
const http = require("http")
const fs = require("fs")
const router = require("./router")

function getOptions() {
  try {
    return {
      key: fs.readFileSync(process.env.KEY),
      cert: fs.readFileSync(process.env.CERT),
    }
  } catch  { }
}

const app = express()
const options = getOptions()

app.use(compression())
app.use(router)

if (options) {
  https.createServer(options, app).listen(3443, () => console.log("HTTPS server started"))
} else {
  http.createServer(app).listen(3080, () => console.log("HTTP server started"))
}

process.on("SIGTERM", process.exit)