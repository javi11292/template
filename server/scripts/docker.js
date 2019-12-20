const fs = require("fs")
const { spawn } = require("child_process")

const commands = {
  build: "docker-compose build",
  ssh: "docker-compose run --rm server bash || true",
  start: "docker-compose up",
}

fs.access(".env", error => {
  if (error) fs.copyFileSync("examples/.env", ".env")
  const NODE_ENV = fs.readFileSync(".env").toString().match(/NODE_ENV=(.*)/)[1]
  spawn(commands[process.argv[2]], {
    shell: true,
    stdio: "inherit",
    env: {
      CMD: NODE_ENV === "production" ? "node" : "npx nodemon",
      ...process.env,
    }
  })
})

process.on("SIGINT", () => { })