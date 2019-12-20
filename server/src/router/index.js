const express = require("express")
const router = express.Router()

router.use(express.static("build", { maxAge: 1000 * 60 * 60 * 24 * 365 }))

router.get("*", (req, res) => res.sendFile("build/index.html"))

module.exports = router