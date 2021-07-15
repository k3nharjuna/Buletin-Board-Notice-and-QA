import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notice: [{
      title: 'first notice',
      email: 'admin@mail.com',
      content: 'Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet'
    }],
    qa: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
