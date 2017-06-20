<template>
    <div>

        <h1>Header <em>{{timer}}</em></h1>

    </div>

</template>


<script>
    export default {

        created(){
            console.log('Created component Home');
            const self = this;

            setInterval(function(){
                self.timer +=1;
            }, 1000)
        },

        data(){
            return {
                timer: 0
            }
        }
    }
</script>