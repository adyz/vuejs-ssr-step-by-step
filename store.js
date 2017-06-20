// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);



export function createStore () {
    return new Vuex.Store({
        state: {
            name: 'Inti state'
        },

        mutations: {

            setName(state, name) {
                state.name = name
            }
        },

        actions: {

            updateName: function(context, name){
                context.commit('setName', name);
            }
        }
    })
}