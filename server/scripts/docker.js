const fs = require("fs")
const { spawn } = require("child_process")

const commands = {
  build: "docker-compose build",
  bash: "docker-compose exec server bash",
  start: "docker-compose up",
}

fs.access(".env", error => {
  if (error) fs.copyFileSync("examples/.env", ".env")
  const NODE_ENV = fs.readFileSync(".env").toString().match(/NODE_ENV=(.*)/)[1]
  spawn(commands[process.argv[2]], {
    shell: true,
    stdio: "inherit",
    env: {
      ENTRYPOINT: NODE_ENV === "production" ? "node" : "npx nodemon",
      ...process.env,
    }
  })
})

process.on("SIGINT", () => { })