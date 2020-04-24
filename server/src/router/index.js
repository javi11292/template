const express = require("express")
const { createElement } = require("react")
const ReactDOM = require("react-dom/server")
const App = require("/client/lib")

const router = express.Router()

router.use(express.static("/client/build", { redirect: false, maxAge: 1000 * 60 * 60 * 24 * 365 }))
router.use((req, res) => {
  res.send(ReactDOM.renderToString(createElement()))
})

module.exports = router