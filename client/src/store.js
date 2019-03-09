import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import LunchService from '@/services/LunchService'

export default new Vuex.Store({
  state: {
    lunches: null,
    groups: []
  },
  getters: {
    lunches: state => {
      return state.lunches
    },
    groups: state => {
      return state.groups
    }
  },
  mutations: {
    loadLunches (state,lunches){
      state.lunches = lunches
    },
    addGroup (state,group){
      console.log("addGroup " + JSON.stringify(group, null, 3))
      state.groups.push(group)
    }
  },
  actions: {
    async actionA ({ commit }) {
      commit('gotData', await getData())
    },
    async loadLunches ({ commit }) {
     // var lunches = (await LunchService.index()).data
     // console.log(` got all lunches cnt=${this.lunches.length}`)
      commit('loadLunches',  (await LunchService.index()).data)
    },
    addGroup ({ commit}, group) {
     // var lunches = (await LunchService.index()).data
     
      commit('addGroup',  group)
    }
  }
})
