import Vue from 'vue';
import Router from 'vue-router';
import Container from '@/components/Container';
import Promotion from '@/components/Promotion';

Vue.use(Router);

const routes = [
  { path: '/', name: 'Home', component: Promotion },
  { path: '/reset-password/:token', name: 'Reset Password', component: Container },
];

export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active',
});

