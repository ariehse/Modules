const path = require('path');

module.exports = {
    entry: './src/index',
    mode: 'development',
    output: {

        filename: "hellojs.js",
        path: path.resolve(__dirname, "./build"),
        libraryTarget: 'umd',
        globalObject: 'this',
        // libraryExport: 'default',
        library: 'hellolib'

    }
};
