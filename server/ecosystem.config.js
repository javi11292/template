module.exports = {
    apps: [{
        name: process.env.npm_package_name,
        script: 'index.js',
        instances: "max",
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }],
}