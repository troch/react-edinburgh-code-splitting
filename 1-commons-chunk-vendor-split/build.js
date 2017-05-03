const path = require('path');
const webpack = require('webpack');

const { createWebpackConfig } = require('../create-webpack-config');

module.exports = (done) => {
    const webpackConfig = createWebpackConfig({
        entry: {
            app: path.join(__dirname, 'index.js'),
            vendors: [
                'react',
                'react-dom'
            ]
        },

        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: [ 'vendors', 'manifest' ]
            })
        ]
    }, false);

    webpack(webpackConfig, (err, stats) => {
        console.log(stats.toString({ chunks: false, colors: true }));
        done();
    });
};
