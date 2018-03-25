<template lang="pug">
  div(id="app-cart")
</template>

<script>
  export default {
    name: 'app-cart',
    props: ["books"],
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="scss">
  #app-cart {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color:red;
    margin-top: 60px;
  }
</style>

