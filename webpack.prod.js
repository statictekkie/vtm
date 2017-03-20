const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: ['./src/index'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                include: __dirname
            },
            { test: /\.json$/, loader: 'json' },
            { test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/, loader : 'url?prefix=font/&limit=100000' },
            { test: /\.s?css$/, loader: 'style!css' },
            { test: /\.png/, loader: 'file-loader' },
            { test: /\.jpg/, loader: 'file-loader' }
        ]
    },
    eslint: { failOnWarning: false, failOnError: true },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    debug: true
};