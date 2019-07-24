import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import LunchService from '@/services/LunchService'
import GroupService from '@/services/GroupService'

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
    addLunch (state,lunch){
      console.log(`mutations: addLunch: ${JSON.stringify(lunch, null, 3)}`)
      state.lunches.push(lunch)
    },
    addGroup (state,group){
      console.log("addGroup " + JSON.stringify(group, null, 3))
      state.groups.push(group)
    },
    loadGroups (state,payload){
      state.groups = payload
    },
    updateLunch (state,lunch){
      console.log("mutation: updateLunch " + JSON.stringify(lunch, null, 3))
      //state.groups.push(group)
    }
  },
  actions: {
    async actionA ({ commit }) {
      commit('gotData', await getData())
    },
    async loadLunches ({ commit }) {
      console.log(`loadLunches*********************************************************`)
     // var lunches = (await LunchService.index()).data
     // console.log(` got all lunches cnt=${this.lunches.length}`)
      commit('loadLunches',  (await LunchService.index()).data)
    },
    async addLunch ({ commit },lunch) {
     // var lunches = (await LunchService.index()).data
     // console.log(` got all lunches cnt=${this.lunches.length}`)
      commit('addLunch',  (await LunchService.post(lunch)).data)
    },
    async updateLunch ({ commit },payload) {
     // var lunches = (await LunchService.index()).data
     console.log(` updateLunch (store.js)=${JSON.stringify(payload, null, 3)}`)
      commit('updateLunch',  (await LunchService.put(payload)).data)
    },
    async loadGroups ({ commit }) {
    //  var lunches = (await LunchService.index()).data
      console.log(` loading all groups******************`)
      commit('loadGroups',  (await GroupService.index()).data)
     },
    async addGroup ({ commit}, group) {
      var group = (await GroupService.post(group)).data
     
      commit('addGroup',  group)
    }
  }
})
