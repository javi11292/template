require("./env")

const express = require("express")
const compression = require("compression")
const router = require("./router")

const app = express()

app.use(compression())
app.use(router)

app.listen(process.env.PORT)