import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    async fetchAllMissions(state) {
      const res = await (await fetch("localhost:3000/mission")).json();
      console.log(res);

      state.count++;
    },
  },
});

export default store;
