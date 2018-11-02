import express from "express"

const PORT = process.env.PORT || 3000

const app = express()

const onReady = () => console.log(`Worker ${process.pid} listening on port ${PORT}`)

const start = () => {
    app.listen(PORT, onReady)
}

export { start }
