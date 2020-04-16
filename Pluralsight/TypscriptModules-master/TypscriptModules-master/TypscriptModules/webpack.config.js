const path = require('path');

module.exports = {
    entry: { app1: "./Client/App1/app1.js", app2: "./Client/App2/app2.js"},
    mode: 'development',
    output: {
        path: path.resolve(__dirname,"./Client/Bundles/"),
        filename: "[name].bundle.js"
    }
}