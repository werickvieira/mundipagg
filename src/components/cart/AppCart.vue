<template lang="pug">
  div(id="app__cart")
    h2 Carrinho
    app-cart-table(
      v-bind:columns="columns"
      v-bind:books="books"
    )
</template>

<script>
import { mapGetters } from 'vuex';
import AppCartTable from './AppCartTable.vue';

export default {
  name: 'AppCart',
  components: {
    'app-cart-table': AppCartTable,
  },
  data() {
    return {
      columns: [
        'Descrição',
        'Quantidade',
        'Subtotal',
        '',
      ],
    };
  },
  computed: {
    ...mapGetters({
      books: 'getBooksCart',
    }),
  },
};
</script>

<style lang="scss">
  #app__cart {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
</style>

