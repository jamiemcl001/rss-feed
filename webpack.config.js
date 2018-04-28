const {resolve} = require('path');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = [
    {
        entry: resolve(__dirname, 'src', 'entry.js'),
        output: {
            path: resolve(__dirname, 'dist'),
            publicPath: 'dist',
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.scss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin()
        ]
    }
];
