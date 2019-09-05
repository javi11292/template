module.exports = {
    apps: [{
        name: "node",
        script: 'index.js',
        "log_date_format": "DD/MM/YY HH:mm:ss",
        instances: "max",
        node_args: "-r dotenv/config",
    }],
}