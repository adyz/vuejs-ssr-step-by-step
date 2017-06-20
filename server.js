var path = require('path');

/*
 * Express server
 */
const express = require('express');
const expressServer = express();


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
        meta: `<meta name="description" content="Context description of the page">`
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