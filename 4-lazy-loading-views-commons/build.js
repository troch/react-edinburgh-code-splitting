const path = require('path');
const webpack = require('webpack');

const { createWebpackConfig } = require('../create-webpack-config');

module.exports = (done) => {
    const webpackConfig = createWebpackConfig({
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                async: 'common',
                minChunks: 3
            })
        ]
    });

    webpack(webpackConfig, (err, stats) => {
        console.log(stats.toString({ chunks: false, colors: true }));

        done();
    });
};
