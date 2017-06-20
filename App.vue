<template>
    <div id="app">Abstracted the new Vue in a template - The visited URL is: {{ url }} <input v-model="url"> </div>
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
        }
    }


</script>
