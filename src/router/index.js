import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home'
import Todo from '@/views/Todo'
import AddTodo from "@/views/AddTodo";
import Modify from "../views/Modify";

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
      path: '/todo/:id',
      name: 'todo',
      component: Todo,
    },
    {
      path: '/modify/:id',
      name: 'modify',
      component: Modify,
    },
    {
      path: '/add',
      name: 'add',
      component: AddTodo,
    },
  ],
});
