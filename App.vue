<template>

    <div id="app">

        <ul>
          <li><router-link to="/" exact>Home</router-link></li>
          <li><router-link to="/about" exact>About</router-link></li>
          <li><router-link to="/item/2">Item 3</router-link></li>
        </ul>

        <div class="app-body">
            <h1>Welcome to Vue: {{name}}</h1>

            <hr>
            <p>The visited URL is: <em><strong>{{ url }}</strong></em></p>

            <label>
              <p>Change this to modify the local data</p>
              <input v-model="url">
            </label>
            <keep-alive>
              <router-view class="view"></router-view>
            </keep-alive>
        </div>

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


<style>

  html, body {
    padding: 3em 0 0 0;
    margin:0;
  }

  .app-body {
    padding: 0 1em;
  }

  ul {
    padding: 0;
    margin: 0;
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    background: #fff;
    display: block;
    overflow: auto;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, .2);
  }

  ul li {
    list-style: none;
  }

  ul li a {
    display: inline-block;
    float: left;
    padding: 1em;
  }

</style>
