module.exports = {
    apps: [{
        name: "testforpm2",
        exec_mode: "cluster",
        instances: "max",
        script: "app.js",
        env: {
            ENV: "dev",
            NODE_PATH: '.',
            PORT: 3000
        }
    }]
}