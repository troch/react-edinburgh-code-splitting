const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const yargs = require('yargs');
const { exampleDir } = require('./env');

const baseWebackConfig = {
    entry: {
        app: path.join(__dirname, exampleDir, 'index.js')
    },

    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: '/',
        path: path.join(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.resolve(path.join(__dirname, exampleDir))
        }]
    },

    plugins: [
        new HtmlWebpackPlugin(),
        // new webpack.LoaderOptionsPlugin({
        //     minimize: true,
        //     debug: false
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     compress: {
        //         warnings: false
        //     },
        //     output: {
        //         comments: false
        //     }
        // }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': '"production"'
        // }),
        // new webpack.HashedModuleIdsPlugin(),
        // new BundleAnalyzerPlugin()
    ]
};

module.exports.createWebpackConfig = (webpackConfig, extractManifest = true) => Object.assign(
    {},
    baseWebackConfig,
    webpackConfig,
    {
        plugins: [
            ...baseWebackConfig.plugins,
            ...webpackConfig.plugins,
            extractManifest ? new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' }) : false
        ].filter(Boolean)
    }
);

const dllReference = (dllName) => new webpack.DllReferencePlugin({
    // name: dllName,
    context: __dirname,
    manifest: require(`./dist/${dllName}.manifest.json`)
});

module.exports.dllReference = dllReference;

module.exports.createDllWebpackConfig = ({ name, vendors, references = [] }) => ({
    entry: {
        [ name ]: vendors
    },

    output: {
        filename: '[name].js',
        library: '[name]_[hash]',
        path: path.join(__dirname, 'dist')
    },

    plugins: [
        ...baseWebackConfig.plugins.slice(0, -1),
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist', '[name].manifest.json'),
            name: '[name]_[hash]'
        }),

        ...references.map(dllReference)
    ]
});
