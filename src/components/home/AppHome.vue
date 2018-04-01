<template lang="pug">
  section(id="app__home")
    app-home-item(
      v-for="item in books"
      v-bind:item="item"
      v-bind:idbook="item.id"
      v-bind:key="item.id"
    )
</template>

<script>
import { mapGetters } from 'vuex';
import AppHomeItem from '../home/AppHomeItem.vue';

export default {
  name: 'AppHome',
  components: {
    'app-home-item': AppHomeItem,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      books: 'getBooksList',
    }),
  },
  methods: {},
};
</script>

<style lang="scss">
  #app__home{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
</style>

