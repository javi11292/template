"use strict"

const express = require("express")

const PORT = process.env.PORT || 80
const app = express()
const onReady = () => console.log(`Listening on port ${PORT}`)

app.listen(PORT, onReady)