import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import actions from "@/store/actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: '',
    username: 'Real',
    firstName: 'Andddy',
    lastName: 'Yoon',
    dogs: [
      { name: "lucky", breed: "poodle", age: 1 },
      { name: "pochy", breed: "dalmatian", age: 2 },
      { name: "blackie", breed: "poodle", age: 4 }
    ]
  },
  getters,
  mutations,
  actions,
  modules: {
  },
});
