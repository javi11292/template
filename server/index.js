const express = require("express")
const router = require("./src/router")

const PORT = process.env.PORT
const app = express()

function onReady() {
  console.log(`Listening on port ${PORT}`)
}

app.use(router)
app.listen(PORT, onReady)