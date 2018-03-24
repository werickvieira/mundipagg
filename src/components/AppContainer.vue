<template lang="pug">
  div(id="app-container")
    h1 {{ msg }}
    img(src='../assets/img/vader.jpg')
</template>

<script>
  export default {
    name: 'app-container',
    data () {
      return {
        msg: 'Teste mensagem!!!'
      }
    }
  }
</script>

<style lang="scss">
  #app-container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    margin-top: 60px;
  }
</style>

