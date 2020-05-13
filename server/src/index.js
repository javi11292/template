const express = require("express")
const http = require("http")
const router = require("./router")

const app = express()

app.use(router)

http.createServer(app).listen(3000, () => console.log("HTTP server started"))

process.on("SIGTERM", process.exit)