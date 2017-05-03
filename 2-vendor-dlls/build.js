const path = require('path');
const webpack = require('webpack');

const { createWebpackConfig, createDllWebpackConfig, dllReference } = require('../create-webpack-config');

module.exports = (done) => {
    const reactDllConfig =  createDllWebpackConfig({
            name: 'react',
            vendors: [ 'react', 'react-dom' ]
        });

    webpack(reactDllConfig, (err, stats) => {
        console.log(stats.toString({ chunks: false, colors: true }));

        const routerDllConfig = createDllWebpackConfig({
            name: 'routing',
            vendors: [ 'router5', 'react-router5' ],
            references: [ 'react' ]
        });

        webpack(routerDllConfig, (err, stats) => {
            console.log(stats.toString({ chunks: false, colors: true }));

            const webpackConfig = createWebpackConfig({
                plugins: [
                    dllReference('react'),
                    dllReference('routing')
                ]
            });

            webpack(webpackConfig, (err, stats) => {
                console.log(stats.toString({ chunks: false, colors: true }));

                done();
            });
        });
    });
};
