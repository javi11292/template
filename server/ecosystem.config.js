module.exports = {
  apps: [{
    name: "server",
    script: "src",
    instances: "max",
    "log_date_format": "DD/MM/YY HH:mm:ss",
  }, {
    name: "wake",
    script: "src/wake",
    instances: "1",
  }],
}