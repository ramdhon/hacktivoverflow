import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    loginLogout(state, payload) {
      state.isLoggedIn = payload;
    }
  },
  actions: {
    loginLogout({ commit }, payload) {
      commit('loginLogout', payload);
    } 
  },
});
