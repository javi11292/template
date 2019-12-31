const express = require("express")
const compression = require("compression")
const router = require("./router")

const app = express()

app.use(compression())
app.use(router)

app.listen(3000, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})

process.on("SIGTERM", () => {
  process.exit()
})