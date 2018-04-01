import Vue from 'vue';
import Router from 'vue-router';
import AppCart from '../components/cart/AppCart.vue';
import AppHome from '../components/home/AppHome.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'app-home',
      component: AppHome,
    },
    {
      path: '/cart',
      name: 'app-cart',
      component: AppCart,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

