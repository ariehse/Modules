const path = require('path');

module.exports = {
    entry: './src/app',
    mode: 'development',
    output: {

        filename: "game.js",
        path: path.resolve(__dirname, "./build"),
        libraryTarget: 'umd',
        globalObject: 'this',
        // libraryExport: 'default',
        library: 'gamelib'

    }
};
