const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseConfig, {
    // Point entry to your app's server entry file
    entry: './entry-server.js',

    output: {
        libraryTarget: 'commonjs2',
        filename: 'dist/bundle.[name].js',
    },

    // This allows webpack to handle dynamic imports in a Node-appropriate
    // fashion, and also tells `vue-loader` to emit server-oriented code when
    // compiling Vue components.
    target: 'node',

    // This tells the server bundle to use Node-style exports


    // For bundle renderer source map support
    devtool: 'source-map',

    externals: nodeExternals({
        // do not externalize dependencies that need to be processed by webpack.
        // you can add more file types here e.g. raw *.vue files
        // you should also whitelist deps that modifies `global` (e.g. polyfills)
        whitelist: /\.css$/
    }),

    plugins: [
        new VueSSRServerPlugin()
    ]
});