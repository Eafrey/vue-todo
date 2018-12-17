import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
    },
    getters: {
        doneTodos: state => state.todos.filter(todo => todo.done),
        undoneTodos: state => state.todos.filter(todo => todo.done)
    },
    mutations: {
        addTodo(state, todo) {
            state.todos.push(todo)
            console.log('todos store', state.todos)
        }
    },
    actions: {},
});
