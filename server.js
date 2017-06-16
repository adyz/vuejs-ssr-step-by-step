const Vue = require('vue');
const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.html', 'utf-8')
});



//Abstract creation of the app
const createApp = require('./app');




server.get('*', (req, res) => {


    const context = {
        url: req.url,
        title: 'Context title',
        meta: `<meta name="description" content="Context description of the page">`
    };

    const app = createApp(context);

    renderer.renderToString(app, context, (err, html) => {

        //Handle error
        if (err) {
            res.status(500).end('Internal Server Error');
            return
        }

        //If no error, render the html
        res.end(html)
    })
});

server.listen(8080);