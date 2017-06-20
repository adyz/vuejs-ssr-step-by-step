<template>
    <div id="app">

        <h1>Welcome to Vue: {{name}}</h1>

        <hr>
        <p>The visited URL is: <em><strong>{{ url }}</strong></em></p>

        <label>
            <p>Change this to modify the local data</p>
            <input v-model="url">
        </label>


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
