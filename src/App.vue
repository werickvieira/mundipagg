<template lang="pug">
  div(id="app", appId=100000)
    h1 {{ msg }}
    img(src="./assets/img/vader.jpg")
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Teste mensagem!!!'
    }
  }
}
</script>

<style lang="scss">
  body{
    background-color: #2c3e50;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    margin-top: 60px;
  }
</style>
