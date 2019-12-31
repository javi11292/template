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

function getEnv() {
  const regExp = /(.*)=(.*)/g
  const env = {}
  const envString = fs.readFileSync(".env").toString()

  let match
  while (match = regExp.exec(envString)) {
    env[match[1]] = match[2]
  }

  return { ...env, ...process.env }
}

function run(command) {
  try {
    fs.accessSync(".env")
  } catch {
    fs.copyFileSync("examples/.env", ".env")
  }

  const env = getEnv()

  spawn(command, {
    shell: true,
    stdio: "inherit",
    env: {
      ENTRYPOINT: env.NODE_ENV === "production" ? "node" : "npx nodemon",
      ...env,
    }
  })
}

process.on("SIGINT", () => { })