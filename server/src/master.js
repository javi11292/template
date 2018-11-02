import cluster from "cluster"
import os from "os"

const cpus = os.cpus()

const fork = () => {
    cluster.fork()
}

class Master {
    static start = () => {
        cpus.forEach(fork)
        cluster.on("exit", fork)
    }
}

export default Master
