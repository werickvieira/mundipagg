import Vue from 'vue';
import Vuex from 'vuex';
import {
  states,
  getters,
  mutations,
  actions,
} from './books';

Vue.use(Vuex);

const store = new Vuex.Store({
  states,
  getters,
  mutations,
  actions,
});

export default store;
