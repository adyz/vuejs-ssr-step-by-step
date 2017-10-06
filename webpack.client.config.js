const webpack = require('webpack')
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(baseConfig, {
    // Point entry to your app's server entry file
    entry: ['./entry-client.js', 'webpack-hot-middleware/client'],

    output: {
        filename: 'bundle.[name].js',
    },

    // For bundle renderer source map support
    devtool: 'source-map',

    plugins: [

        new webpack.HotModuleReplacementPlugin(),

        // Important: this splits the webpack runtime into a leading chunk
        // so that async chunks can be injected right after it.
        // this also enables better caching for your app/vendor code.
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),


        // This plugins generates `vue-ssr-client-manifest.json` in the
        // output directory.
        new VueSSRClientPlugin()
    ],

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
});