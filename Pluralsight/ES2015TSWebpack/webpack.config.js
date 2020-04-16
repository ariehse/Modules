const path = require('path');

module.exports = {
    entry: './src/index',
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {

        filename: "cars.js",
        path: path.resolve(__dirname, "Build")

    }
};
