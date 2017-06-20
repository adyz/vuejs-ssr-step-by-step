const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
    // Point entry to your app's server entry file
    entry: './entry-client.js',

    // For bundle renderer source map support
    devtool: 'source-map',

    // This tells the server bundle to use Node-style exports
    output: {
        filename: 'dist/bundle.client.js',
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                            // the "scss" and "sass" values for the lang attribute to the right configs here.
                            // other preprocessors should work out of the box, no loader config like this nessessary.
                            'scss': 'vue-style-loader!css-loader!sass-loader',
                            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                        }
                        // other vue-loader options go here
                    }
                }]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};