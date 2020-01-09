const express = require("express")
const compression = require("compression")

const app = express()

app.use(compression())
app.use(express.static("/client", { maxAge: 1000 * 60 * 60 * 24 * 365 }))
app.get("*", (req, res) => res.sendFile("/client/index.html"))

app.listen(3000, () => {
  console.log("Server started")
})

process.on("SIGTERM", () => {
  process.exit()
})