<template lang="pug">
  div(id="app__container")
    router-view
</template>

<script>
export default {
  name: 'AppContainer',
  data() {
    return {};
  },
  watch: {
    $route() {
      this.getItensSession();
    },
  },
  beforeCreate() {
    this.$store.dispatch('fetchList');
  },
  created() {
    this.getItensSession();
  },
  methods: {
    getItensSession() {
      const itens = sessionStorage.getItem('books');
      const parse = JSON.parse(itens);
      if (parse && parse.length > 0) {
        this.$store.dispatch('setBooksCart', parse);
      }
    },
  },
};
</script>

<style lang="scss">
  #app__container{
    margin: 60px auto;
    max-width: 1280px;
    padding-top: 20px;
    border-top: 1px solid gray;
    text-align: center;
    @media(max-width:767px){
      padding-right: 10px;
      padding-left: 10px;
    }
  }
</style>
