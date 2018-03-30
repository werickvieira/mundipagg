<template lang="pug">
  div(id="app__header")
    h1 Livraria Flip
    nav
      ul.nav
        li.nav__item(v-bind:class="{ active: isActive }")
          router-link(to="/") #[i(class="fa fa-arrow-left fa-2x")]
        li.nav__item(v-bind:class="{ active: !isActive }")
          router-link(to="/cart") #[i(class="fa fa-shopping-cart fa-2x")]
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
  #app__header {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    margin-top: 60px;
    @media(max-width:767px){
      padding-left: 10px;
      padding-right: 10px;
    }
    h1{
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 45px;
      color: #2c3e50;
    }
    nav{
      display: block;
      max-width: 1280px;
      margin-right: auto;
      margin-left: auto;
      .nav{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        @media(max-width:767px){
          margin-top:25px;
        }
        .nav__item{
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          a{
            display: block;
            width: 40px;
            height: 40px;
            color: #000;
            &:hover,
            &:active{
              color: rgba(0,0,0,.6);
            }
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

