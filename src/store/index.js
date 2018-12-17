import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        id: 0,
        todos: [],
    },
    getters: {
        doneTodos: state => state.todos.filter(todo => todo.done),
        undoneTodos: state => state.todos.filter(todo => todo.done),
    },
    mutations: {
        addTodo(state, todo) {
            state.todos.push(todo)
        },
        deleteTodo(state, deleteId) {
            state.todos.splice(state.todos.findIndex(todo => todo.id === deleteId), 1)
        },
        increaseId(state) {
            state.id++;
        }
    },
    actions: {},
});
