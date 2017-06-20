<template>
    <div id="app">

        <p>Abstracted the new Vue in a template</p>
        <p>The visited URL is: {{ url }} <input v-model="url"></p>


        <ul>
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/item">Item</router-link></li>
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
        }
    }


</script>
