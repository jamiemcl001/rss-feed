const {resolve} = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    {
        entry: resolve(__dirname, 'src', 'scripts', 'entry.js'),
        mode: 'none',
        context: resolve(__dirname, 'src'),
        output: {
            path: resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@components': resolve(__dirname, 'src/scripts/components'),
                '@constants': resolve(__dirname, 'src/scripts/constants'),
                '@helpers': resolve(__dirname, 'src/scripts/helpers'),
                '@store': resolve(__dirname, 'src/scripts/store'),
                '@utilities': resolve(__dirname, 'src/scripts/utilities'),
                'scss': resolve(__dirname, 'src/assets/scss')
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ]
                },
                {
                    test: /\.svg$/,
                    use: {
                        loader: 'svg-url-loader',
                        options: {}
                    }
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: resolve(__dirname, 'src', 'assets',
                    'partials', 'index.html')
            }),
            new MiniCssExtractPlugin({
                filename: 'bundle.css'
            })
        ]
    }
];
