const createApp = require('./app');

// client-specific bootstrapping logic...

const app = createApp({
    empty: true,
    url: 'Empty url client'
});

// this assumes App.vue template root element has id="app"
app.$mount('#app');