<template lang="pug">
  div(id="app-container")
    router-view(:books="books")
</template>

<script>
import get from '../js/request';

export default {
  name: 'AppContainer',
  data() {
    return {
      books: [],
    };
  },
  watch: {
    $route(to, from) {
      console.log('to', to);
      console.log('from', from);
    },
  },
  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      get('./livros.json').then((e) => { this.books = e; });
    },
  },
};
</script>

<style lang="scss">
  #app-container{
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
    margin-bottom: 60px;
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

