import Vue from 'vue';
import App from './App.vue';
import router from './route/index';

// Vue.config.productionTip = false;
const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

console.log(vm);
