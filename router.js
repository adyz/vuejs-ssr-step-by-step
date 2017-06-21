import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import Home from './components/Home.vue';
import About from './components/About.vue';
import Item from './components/Item.vue';


// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior =  (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else if (savedPosition === null) {
        return { x: 0, y: 0 }
    }
};


export function createRouter () {
    return new Router({
        mode: 'history',
        scrollBehavior,
        routes: [
            { path: '', component: Home},
            { path: '/about', component: About},
            { path: '/item/:id', component: Item }
        ]
    })
}