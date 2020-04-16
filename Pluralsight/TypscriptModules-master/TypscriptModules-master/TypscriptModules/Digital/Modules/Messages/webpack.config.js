const path = require('path');

module.exports = {
    entry: './src/message.ts',
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
        filename: 'msg-numbers',
        library: 'msgNumbers',
        libraryTarget: 'umd'
            }
  };