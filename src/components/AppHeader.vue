<template lang="pug">
  div(id="app-header")
    h1 {{ show }}
</template>
<script>
  export default {
    name: 'app-header',
    data () {
      return {
        show: 'Header Mensagem!!'
      }
    }
  }
</script>

<style lang="scss">
  #app-header {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color:red;
    margin-top: 60px;
  }
</style>

