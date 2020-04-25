const express = require("express")
const compression = require("compression")
const http = require("http")
const router = require("./router")

const app = express()

app.use(compression())
app.use("/api", router)

http.createServer(app).listen(3000, () => console.log("HTTP server started"))

process.on("SIGTERM", process.exit)