import "@babel/polyfill"
import cluster from "cluster"

process.on("unhandledRejection", error => { throw error })

const start = async (name) => {
    const module = await import(`./${name}`)
    module.default.start()
}

if (cluster.isMaster) {
    start("master")
} else {
    start("worker")
}