<template lang="pug">
  div(id="app-header")
    h1 Livraria Flip
    nav
      ul.nav
        li.nav__item(v-bind:class="{ active: isActive }")
          router-link(to="/")
        li.nav__item(v-bind:class="{ active: !isActive }")
          router-link(to="/cart")
    //- nav
  //- /.app-header
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isActive: false,
    };
  },
  watch: {
    $route({ name }) {
      this.changeHeader(name);
    },
  },
  created() {
    const { name } = this.$route;
    this.changeHeader(name);
  },
  methods: {
    changeHeader(name) {
      this.isActive = name === 'app-cart';
    },
  },
};
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
    }
    nav{
      display: block;
      .nav{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        .nav__item{
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          a{
            border: 2px solid red;
            display: block;
            width: 40px;
            height: 40px;
          }
          &.active{
            opacity: 1;
            max-height: 100%;
          }
        }
      }
    }
  }
</style>

