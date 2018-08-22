<template>
    <div>
        <ul v-for="user in users">
            <li>{{user.fullName}}</li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'List',
    props: {
      users: Array,
    },
    mounted() {
      console.log(this);
    },
  };
</script>

<style scoped>

</style>