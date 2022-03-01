import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    puertos:[]
  },
  mutations: {
    ADD_PUERTOS(state, puertos){
      state.puertos = puertos;
    }
  },
  actions: {
    fetchPuertos({commit}){
      fetch('http://apitest.cargofive.com/api/ports')
      .then(res =>{
        return res.json();
      })
      .then((data)=>{
        console.log(data)
        commit ('ADD_PUERTOS', data)
      })
    }
  },
  modules: {
  }
})
