import Vue from 'vue';
import Vuex from 'vuex';
import {getDateString} from "../utils/date";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        id: 0,
        todos: [
            {
                id: 0,
                title: 'title',
                content: 'This is an example1.',
                type: 'type1',
                createDate: getDateString(new Date(Date.now())),
                endDate: '2018-12-31',
                adaptable: true,
                visible: true,
                done: false
            },
            {
                id: 1,
                title: 'title',
                content: 'This is an example2.',
                type: 'type2',
                createDate: getDateString(new Date(Date.now())),
                endDate: '2018-12-31',
                adaptable: true,
                visible: true,
                done: false
            },
            {
                id: 2,
                title: 'title',
                content: 'This is an example3.',
                type: 'type1',
                createDate: getDateString(new Date(Date.now())),
                endDate: '2018-12-31',
                adaptable: true,
                visible: true,
                done: false
            }
        ],
    },
    getters: {
        visibleTodos: state => state.todos.filter(todo => todo.visible),
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
        filterType(state, type) {
            state.todos.map(todo => {
                todo.visible = true;
            })
          state.todos.filter(todo => todo.type !== type).map(todo => {
              todo.visible = false;
          })
        },
        filterDoneStatus(state, done) {
            state.todos.map(todo => {
                todo.visible = true;
            })
            state.todos.filter(todo => todo.done !== done).map(todo => {
                todo.visible = false;
            })
        },
        filterText(state, text) {
            state.todos.map(todo => {
                todo.visible = true;
            })
            state.todos.filter(todo => todo.title.find(text) === -1 && todo.content.find(text) === -1).map(todo => {
                todo.visible = false;
            })
        },
        increaseId(state) {
            state.id++;
        }
    },
    actions: {},
});
