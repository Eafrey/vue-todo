import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home'
import Todo from '@/views/Todo'
import Done from "@/views/Done";
import All from "@/views/All";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo,
    },
    {
      path: '/done',
      name: 'done',
      component: Done,
    },
    {
      path: '/all',
      name: 'all',
      component: All,
    },
  ],
});
