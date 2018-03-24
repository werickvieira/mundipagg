<template lang="pug">
  div#app
    header
      app-header
    main
      router-view
</template>

<script>
  import AppHeader from './components/AppHeader.vue';
  export default {
    name: 'app',
    components: { 
      'app-header': AppHeader 
    },
  }
</script>

<style lang="scss">
  body{
    background-color: #2c3e50;
    border: 2px solid red;
  }
</style>
