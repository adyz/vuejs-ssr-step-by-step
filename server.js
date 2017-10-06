var path = require('path');



/*
 * Express server
 */
const express = require('express');
const expressServer = express();


/*
 * Only for dev
 */
var webpack = require('webpack');
var webpackConfig = require('./webpack.client.config');
var compiler = webpack(webpackConfig);
expressServer.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
expressServer.use(require("webpack-hot-middleware")(compiler));



//Static assets
expressServer.use(express.static(path.join(__dirname, 'dist')));



/*
 * Vue
 */


const { createBundleRenderer } = require('vue-server-renderer');

var layout = require('fs').readFileSync('./index.html', 'utf-8');

const serverManifest = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');
const renderer = createBundleRenderer(serverManifest, {
    template: layout,
    clientManifest: clientManifest
});


expressServer.get('*', (req, res) => {

    const context = {
        url: req.url,
        title: 'Context title',
        meta: `
                <meta name="description" content="Context description of the page">
                <meta name="viewport" content="width=device-width, user-scalable=no">
              `
    };


    const errorHandler = err => {
        if (err && err.code === 404) {
            res.status(404).end('404 | Page Not Found')
        } else {
            // Render Error Page or Redirect
            res.status(500).end('500 | Internal Server Error');
            console.error(`error during render : ${req.url}`);
            console.error(err)
        }
    };


    renderer.renderToStream(context)
        .on('error', errorHandler)
        .on('end', () => console.log(`whole request: end`))
        .pipe(res)
});

expressServer.listen(8080);