<template lang="pug">
  div(class="app-home__item")
    h3.app-home__item-title {{ item.name }}
    div.app-home__item-group
      div.app-home__item-group__thumb
        img(v-bind:src="item.thumb")
      div.app-home__item-group__info
        p.item-group__info__description {{ item. description }}
        small.item-group__info__price {{ formatPrice(item.price) }}
    button(@click="addBookCart(item)").button.button__add-cart Adicionar ao carrinho
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
  .app-home__item{
    // border: 1px solid gray;
    box-shadow: 0px 1px 10px rgba(0,0,0,.5);
    flex: 1 1 auto;
    margin-bottom: 30px;
    @media(min-width:768px){
      // padding-right: 10px;
      // padding-left: 10px;
      // min-height: 260px;
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
    .app-home__item-title{
      margin-top: 20px;
      margin-bottom: 30px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 30px;
      color: #2c3e50;
    }
    .button__add-cart{
      background-color: green;
      box-shadow: inset 0px -4px 0px rgba(0,0,0,.5);
      &:active{
        box-shadow: none;
        transform:translateY(4px);
      }
    }
    .app-home__item-group{
      display: flex;
      padding-right: 5px;
      padding-left: 5px;
      padding-bottom: 15px;
      justify-content: center;
      .app-home__item-group__thumb{
        //border: 2px solid red;
        padding: 10px;
      }
      .app-home__item-group__info{
        //border: 2px solid forestgreen;
        color: #2c3e50;
        .item-group__info__description{
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 18px;
          color:#2c3e50;
          margin-bottom: 20px;
        }
        .item-group__info__price{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 15px;
            color:#2c3e50;
            font-weight: bold;
        }
      }
    }
  }
</style>
