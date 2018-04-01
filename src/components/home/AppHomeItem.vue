<template lang="pug">
  div(class="app__home__item")
    h3.app__home__item__title {{ item.name }}
    div.app__home__item__group
      div.group__thumb
        img(v-bind:src="item.thumb")
      div.group__info
        p.group__info__description {{ item. description }}
        small.group__info__price {{ formatPrice(item.price) }}
    button(@click="addBookCart(item)").button.button__add__cart Adicionar ao carrinho
</template>

<script>
import mixin from '../../js/mixin';

export default {
  name: 'AppHomeItem',
  mixins: [mixin],
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
    };
  },
  methods: {
    addBookCart(item) {
      this.$store.dispatch('addBookCart', item);
    },
  },
};
</script>

<style lang="scss">
  .app__home__item{
    box-shadow: 0px 1px 10px rgba(0,0,0,.5);
    flex: 1 1 auto;
    margin-bottom: 30px;
    @media(min-width:768px){
      &:nth-of-type(3n+2){
        margin-right: 20px;
        margin-left: 20px;
      }
      flex-basis: 30%;
    }
    @media(min-width: 480px) and (max-width: 767px){
      margin-right: 10px;
      margin-left: 10px;
    }
    &__title{
      margin-top: 20px;
      margin-bottom: 30px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 30px;
      color: #2c3e50;
    }
    &__group{
      display: flex;
      padding-right: 5px;
      padding-left: 5px;
      padding-bottom: 15px;
      justify-content: center;
      .group__thumb{
        padding: 10px;
      }
      .group__info{
        color: #2c3e50;
        &__description{
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 18px;
          color:#2c3e50;
          margin-bottom: 20px;
        }
        &__price{
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 15px;
          color:#2c3e50;
          font-weight: bold;
        }
      }
    }
    .button__add__cart{
      background-color: green;
      box-shadow: inset 0px -4px 0px rgba(0,0,0,.5);
      &:active{
        box-shadow: none;
        transform:translateY(4px);
      }
    }
  }
</style>
