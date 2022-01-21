const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'lib'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": {
                                        "node": "12.9.1"
                                    },
                                    "useBuiltIns": "usage",
                                    "corejs": "3.6.5"
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
};