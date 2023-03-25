import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogged: false,
    user1:"jeevan"
  },
  mutations: {
    // increment(state) {
    //   state.count++;
    // },
    // decrement(state) {
    //   state.count--;
    // }
  },
  actions: {
    // increment(context) {
    //   context.commit('increment');
    // },
    // decrement(context) {
    //   context.commit('decrement');
    // }
  },
  getters: {
    // getCount(state) {
    //   return state.count;
    // }
  }
});

export default store;
