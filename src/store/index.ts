import { createStore } from "vuex"

const helloworld = 'hello world';

const store = createStore({
  state () {
    return {
      name: localStorage.getItem('name'),
    }
  },
  mutations: {
    setName (state) {
      state.name = localStorage.getItem('name')
    },
  }
})

export default store