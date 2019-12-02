module.exports = {
  apps: [{
    name: "server",
    script: "index.js",
    instances: "max",
    node_args: "-r dotenv/config",
    "log_date_format": "DD/MM/YY HH:mm:ss",
  }, {
    name: "wake",
    script: "src/wake",
    instances: "1",
  }],
}