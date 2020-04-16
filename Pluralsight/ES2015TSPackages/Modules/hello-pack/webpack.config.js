const path = require('path');

module.exports = {
    entry: './src/systempack',
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

        filename: "hello-world.js",
        path: path.resolve(__dirname, "./build"),
        library :"helloworld"

    }
};
