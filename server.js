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
const renderer = createBundleRenderer(require('./vue-ssr-server-bundle.json'), {
    template: require('fs').readFileSync('./index.html', 'utf-8')
});


expressServer.get('/*', (req, res) => {

    const context = {
        url: req.url,
        title: 'Context title',
        meta: `<meta name="description" content="Context description of the page">`
    };



    renderer.renderToStream(context)
        .pipe(res)
});

expressServer.listen(8080);