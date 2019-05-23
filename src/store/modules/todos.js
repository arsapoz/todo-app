import axios from "axios";

const state = {
    todos: [
        {
            id: 1,
            title: 'Todo1'
        },
        {
            id: 2,
            title: 'todo2'
        }
    ]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

        commit('setTodos', response.data)
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos)
};

export default {
    state,
    getters,
    actions,
    mutations
};