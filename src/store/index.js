import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
  },
  mutations: {
    updateWindowDimensions(state) {
      state.windowHeight = window.innerHeight;
      state.windowWidth = window.innerWidth;
    },
  },
  actions: {
    updateWindowDimensions(store) {
      store.commit("updateWindowDimensions");
    },
  },
  modules: {},
});
