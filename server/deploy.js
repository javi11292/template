"use strict"

const { spawnSync } = require("child_process")

const name = process.env.npm_package_name

spawnSync(`heroku container:push web -a javiscript-${name}`, { stdio: "inherit" })
spawnSync(`heroku container:release web -a javiscript-${name}`, { stdio: "inherit" })
