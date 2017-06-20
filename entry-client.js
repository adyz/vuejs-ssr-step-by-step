import Vue from 'vue'
import App from './App.vue'

var app = new Vue({
    // the root instance simply renders the App component.
    render: h => h(App)
});


app.$mount('#app');