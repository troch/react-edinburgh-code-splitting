const path = require('path');
const webpack = require('webpack');

const { createWebpackConfig } = require('../create-webpack-config');

module.exports = (done) => {
    const webpackConfig = createWebpackConfig({
        plugins: []
    });

    webpack(webpackConfig, (err, stats) => {
        console.log(stats.toString({ chunks: false, colors: true }));

        done();
    });
};
