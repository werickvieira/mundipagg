<template lang="pug">
  div(id="app-cart")
    h1 {{ msg }}
</template>

<script>
  export default {
    name: 'app-cart',
    data () {
      return {
        msg: 'Cart Message!!'
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

