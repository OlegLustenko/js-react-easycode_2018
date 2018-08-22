<template>
    <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js Easy code"/>
        <List v-bind:users="users"></List>
    </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';
  import List from './components/List';
  import {requestUsers} from './shared/api';

  export default {
    name: 'app',
    components: {
      List,
      HelloWorld,
    },
    data() {
      return {
        users: [],
      };
    },
    created() {
      requestUsers.getUsers().then(response => {
        this.users = response.users;
      });
    },
  };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
