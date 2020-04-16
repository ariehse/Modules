const path = require('path');

module.exports = {
    entry: './src/app1',
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

        filename: "app1.js",
        path: path.resolve(__dirname, "./build")

    }
};
