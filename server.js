/*
 * Express server
 */
const express = require('express');
const expressServer = express();


expressServer.use('/dist', express.static('dist'));



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


expressServer.get('/', (req, res) => {

    const context = {
        url: req.url,
        title: 'Context title',
        meta: `<meta name="description" content="Context description of the page">`
    };



    renderer.renderToStream(context)
        .pipe(res)
});

expressServer.listen(8080);