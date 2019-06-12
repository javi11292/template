module.exports = {
    apps: [{
        name: "node",
        script: 'index.js',
        "log_date_format" : "DD/MM/YY HH:mm:ss",
        instances: "max",
        watch_options: {
            usePolling: true,
        }
    }],
}