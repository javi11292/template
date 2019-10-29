const express = require("express")
const router = require("./src/router")

const PORT = process.env.PORT
const app = express()

app.use(router)
app.listen(PORT)