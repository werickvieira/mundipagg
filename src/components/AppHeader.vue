<template lang="pug">
  div(id="app-header")
    h1(v-bind:class="{ active: isActive }") Venda Nova  
</template>

<script>
  export default {
    name: 'app-header',
    data () {
      return {
        isActive: false
      }
    },    
    created() {
      const { name } = this.$route;
      this.changeHeader(name);
    },
    methods:{
      changeHeader(name) {
        this.isActive = name === 'app-cart';
      }
    },
    watch: {
      $route({ name }){
        this.changeHeader(name);
      }
    },
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
    h1{
      display: block;
      &.active {
        display: none;
      }
    }
  }
</style>

