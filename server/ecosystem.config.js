module.exports = {
  apps: [{
    name: "server",
    script: "index.js",
    "log_date_format": "DD/MM/YY HH:mm:ss",
    instances: "max",
    node_args: "-r dotenv/config",
  }, {
    name: "wake",
    script: "wake.js",
    instances: "1",
  }],
}