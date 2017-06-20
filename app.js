var Vue = require('vue');

module.exports = function createApp (context) {
    return new Vue({
        data: {
            url: context.url
        },
        template: `<div id="app">Abstracted the new Vue - The visited URL is: {{ url }} <input v-model="url"> </div>`,
        mounted(){
            console.log('Done...');
        }
    })
};