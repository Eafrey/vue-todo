import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        id: 0,
        todos: [
            {
                id: 0,
                title: 'title',
                content: 'content',
                type: 'none',
                createDate: 1,
                endDate: '2018-12-31',
                adaptable: true,
                done: false
            }
        ],
    },
    getters: {
        doneTodos: state => state.todos.filter(todo => todo.done),
        undoneTodos: state => state.todos.filter(todo => todo.done),
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    mutations: {
        modifyTodo(state, newTodo) {
            state.todos.filter(todo => todo.id === newTodo.id).map(() => newTodo);
        },
        addTodo(state, todo){
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
