import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {
                id: "1",
                text: 'todo1',
                done: false,
                readOnly: "true",
                createDate: "11111",
            }
        ],
    },
    getters: {
        doneTodos: state => state.todos.filter(todo => todo.done),
        undoneTodos: state => state.todos.filter(todo => todo.done)
    },
    mutations: {},
    actions: {},
});
