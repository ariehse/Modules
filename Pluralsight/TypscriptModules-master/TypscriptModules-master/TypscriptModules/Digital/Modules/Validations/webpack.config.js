const path = require('path');

module.exports = {
    entry: './src/Validations.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'validaitons-lib',
        library: 'validaitons-lib',
        libraryTarget: 'umd'
            }
  };