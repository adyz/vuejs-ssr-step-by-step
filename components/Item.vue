<template>
    <div>

        <h1>Item:</h1>
        <h2>Name: {{name}}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur eligendi illo inventore laudantium minima minus nam neque non numquam odit omnis quae quaerat, qui reiciendis repudiandae unde, velit, voluptates.</p>
        <input type="text" v-on:change="update">
        
    </div>

</template>


<script>

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
        }
    }


</script>