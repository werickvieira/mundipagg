<template lang="pug">
  div(id="app-home")
    h1 {{ msg }}
</template>

<script>
  export default {
    name: 'app-home',
    data () {
      return {
        msg: 'Home Message!!'
      }
    }
  }
</script>

<style lang="scss">
  #app-home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: green;
    margin-top: 60px;
  }
</style>

