const path = require("path")
const express = require("express")
const router = express.Router()

const clientPath = path.resolve(__dirname, "../../..", "client/build")

router.use(express.static(clientPath, { maxAge: 1000 * 60 * 60 * 24 * 365 }))

router.get("*", (req, res) => res.sendFile(`${clientPath}/index.html`))

module.exports = router