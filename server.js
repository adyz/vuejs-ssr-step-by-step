const Vue = require('vue');
const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.html', 'utf-8')
});




server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>Hello, The visited URL is: {{ url }}</div>`
    });

    const context = {
        title: 'Context title',
        meta: `<meta name="description" content="Context description of the page">`
    };

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