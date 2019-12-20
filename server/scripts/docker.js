const fs = require("fs")
const { spawn } = require("child_process")

switch (process.argv[2]) {
  case "bash": {
    run("docker-compose exec server bash")
    break
  }

  case "build": {
    const command = `docker-compose down -v`
      + ` && docker run -it -v ${process.cwd()}/../client:/client -v client:/build`
      + ` -w /client --rm node bash -c "npm i && npm run build && cp -r build /"`
      + ` && docker-compose build`

    run(command)
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