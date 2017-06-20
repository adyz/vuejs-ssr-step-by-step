<template>
    <div>
        <app-header></app-header>
        <h2>Item Title: {{name}}</h2>
        <label>
            <p>Update the input bellow to change the layout store</p>
            <input v-on:change="update">
        </label>
        
    </div>

</template>


<script>

    import AppHeader from './partials/Header.vue';

    export default {
        computed: {
            // display the item from store state.

            name: function(){
                return this.$store.state.name;
            }
        },

        methods:{
            update(e){
                const val = e.target.value;
                return this.$store.dispatch('updateName', val)
            }
        },
        components: {
            AppHeader
        }
    }


</script>