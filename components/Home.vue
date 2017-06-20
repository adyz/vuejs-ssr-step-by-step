<template>
    <div>

        <app-header></app-header>


        <h2>Home title</h2>
        <p>Home content</p>


    </div>

</template>


<script>
    import AppHeader from './partials/Header.vue';
    export default {
        created(){
            console.log('Created component Home');
        },

        components: {
            AppHeader
        }
    }
</script>