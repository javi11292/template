const fs = require("fs")
const { spawn } = require("child_process")

switch (process.argv[2]) {
  case "sh": {
    run("docker-compose exec server sh")
    break
  }

  case "build": {
    run("docker-compose down -v && docker-compose build")
    break
  }

  default: {
    run("docker-compose up")
  }
}

function run(command) {
  try {
    fs.accessSync(".env")
  } catch {
    fs.copyFileSync("examples/.env", ".env")
  }

  const NODE_ENV = fs.readFileSync(".env").toString().match(/NODE_ENV=(.*)/)[1]

  spawn(command, {
    shell: true,
    stdio: "inherit",
    env: {
      ENTRYPOINT: NODE_ENV === "production" ? "node" : "npx nodemon",
      ...process.env,
    }
  })
}

process.on("SIGINT", () => { })