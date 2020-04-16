const path = require('path');

module.exports = {
    entry: {

        Digital: ['./src/Digital'],
        Digital_Messages : ['./src/Digital-Messages'],
        Digital_Validations : ['./src/Digital-Validations']
    }, 
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
        extensions: ['.ts', '.js']
    },
    output: {

        filename: "[name].js",
        path: path.resolve(__dirname, "./build"),
        libraryTarget: 'umd',
        globalObject: 'this',
        // libraryExport: 'default',
        library: 'digitallib'
    }
};
