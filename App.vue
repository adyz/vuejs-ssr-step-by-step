<template>
    <div id="app">

        <h2>Name: {{name}}</h2>
        <p>Abstracted the new Vue in a template</p>
        <p>The visited URL is: {{ url }} <input v-model="url"></p>


        <ul>
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/item/2">Item 3</router-link></li>
        </ul>
        <router-view class="view"></router-view>

    </div>
</template>


<script>

    export default {
        data() {
            return {
                url: 'Component data overwrite, time to use redux or something'
            }
        },
        created(){
            console.log('Created component app');
        },
        computed: {
            // display the item from store state.

            name: function(){
                return this.$store.state.name;
            }
        },
    }


</script>
