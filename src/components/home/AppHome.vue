<template lang="pug">
  section(id="app-home")
    app-home-item(
      v-for="item in books",
      v-bind:item="item"
      v-bind:idbook="item.id"
      v-bind:key="item.id"
    )
</template>

<script>
import AppHomeItem from '../home/AppHomeItem.vue';

export default {
  name: 'AppHome',
  components: {
    'app-home-item': AppHomeItem,
  },
  // props: ["books"],
  props: {
    books: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
    };
  },

  created() {
    console.log('CREATED NA HOME');
    console.log(this);
  },

  methods: {},
};
</script>

<style lang="scss">
  #app-home{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
</style>

