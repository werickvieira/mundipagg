<template lang="pug">
  div(class="app__cart__table")
    table.app-cart__table-container(v-bind:hidden="isEmpty")
      thead
        tr
          th(scope="col", v-for="item in columns") {{ item }}
      tbody
        tr(v-for="item in books")
          td {{ item.description }}
          td {{ item.counter }}
          td {{ formatPrice(item.counter * item.price) }}
          td
            button.button.button__remove__cart(@click="deleteItemCart(item.id)")
              i(class="fa fa-times-circle fa-2x")
        tr
          td(colspan='2') Total
          td {{ formatPrice(accumulate) }}
          td
    div.app-cart__isEmpty(v-bind:hidden="!isEmpty")
      p Não há itens no carrinho.
</template>

<script>
import mixin from '../../js/mixin';

export default {
  name: 'AppCartTable',
  mixins: [mixin],
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    books: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isEmpty: true,
    };
  },
  computed: {
    accumulate() {
      return this.books.reduce((prev, { counter, price }) => {
        let sum = prev;
        sum += counter * price;
        return sum;
      }, 0);
    },
  },
  watch: {
    accumulate() {
      this.checkEmptyList();
    },
  },
  created() {
    this.checkEmptyList();
  },
  methods: {
    checkEmptyList() {
      this.isEmpty = (this.books.length === 0);
    },
    deleteItemCart(id) {
      this.$store.dispatch('deleteBookCart', id);
    },
  },
};
</script>

<style lang="scss">
  .app__cart__table{
    display: flex;
    margin-top: 45px;
    @media(min-width:768px){
      justify-content: center;
      align-items: center;
    }
    @media(max-width:767px) and (orientation: landscape){
      justify-content: center;
      align-items: center;
    }
    @media(max-width:767px){
      overflow-x: auto;
      display: block;
    }
    table {
      width: 100%;
      max-width: 800px;
      border: 2px solid blue;
      border-radius: 3px;
      background-color: #f9f9f9;
      border-collapse: collapse;
      tr{
        &:last-child{
          td{
            font-weight: 700;
          }
        }
      }
      th, td {
        padding: 12px;
        border: 1px solid #eaeaea;
        vertical-align: middle;
      }
      th {
        background-color: blue;
        color:#fff;
        user-select: none;
        font-weight: 700;
        &:nth-of-type(2n+1){
          padding-left: 50px;
          padding-right: 50px;
        }
        &:nth-of-type(2){
          width: 120px;
        }
      }
    }
    .button__remove__cart{
      color: #000;
      background: transparent;
      min-height: initial;
    }
  }

</style>

