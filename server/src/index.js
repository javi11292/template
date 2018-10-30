import express from "express"
import io from "socket.io"

const PORT = process.env.PORT || 3000

const app = express()

const server = io(app.listen(PORT))