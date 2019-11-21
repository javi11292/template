const { spawnSync } = require("child_process")

const name = process.env.npm_package_name

spawnSync(`heroku container:push web -a ${name}`, { stdio: "inherit", shell: true })
spawnSync(`heroku container:release web -a ${name}`, { stdio: "inherit", shell: true })
