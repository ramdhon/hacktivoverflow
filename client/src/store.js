import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    login(state, payload) {
      state.token = payload;
    }
  },
  actions: {
    login({ commit }, payload) {
      commit('login', payload);
    } 
  },
});
