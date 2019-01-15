module.exports = {
    apps: [{
        name: process.env.npm_package_name,
        script: 'index.js',
        "log_date_format" : "DD/MM/YY HH:mm:ss",
        instances: "max",
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }],
}