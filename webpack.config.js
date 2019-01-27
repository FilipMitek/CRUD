const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
    entry: './index.ts',
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    externals: nodeExternals(),
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
    },
    target: "node",
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.ts?$/
            },
            {
                test: /\.node$/,
                use: 'node-loader'
            }
        ]
    },

};
