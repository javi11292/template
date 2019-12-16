require("./env")
const express = require("express")
const router = require("./router")

const PORT = process.env.PORT
const app = express()

app.use(router)

app.listen(PORT)