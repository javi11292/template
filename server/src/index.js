"use strict"

const express = require("express")

const router = require("./router")

const PORT = process.env.PORT || 80
const app = express()
const onReady = () => console.log(`Listening on port ${PORT}`)

app.use(router)
app.listen(PORT, onReady)