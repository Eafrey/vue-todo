import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {
                id: "1",
                content: 'todo1',
                complete: "false",
                readOnly: "true",
                date: "11111",
            }
        ],
    },
    mutations: {},
    actions: {},
});
