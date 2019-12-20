const express = require("express")
const compression = require("compression")
const router = require("./router")

const app = express()

app.use(compression())
app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})

process.on("SIGTERM", () => {
  process.exit()
})