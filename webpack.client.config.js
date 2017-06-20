const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
    // Point entry to your app's server entry file
    entry: './entry-client.js',

    // For bundle renderer source map support
    devtool: 'source-map',

    // This tells the server bundle to use Node-style exports
    output: {
        filename: 'dist/bundle.client.js',
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
});