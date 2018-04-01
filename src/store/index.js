import Vue from 'vue';
import Vuex from 'vuex';
import {
  state,
  getters,
  mutations,
  actions,
} from './books';

import subscribe from './subscribe';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [subscribe],
});

export default store;
