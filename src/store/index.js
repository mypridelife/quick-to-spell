import Vue from 'vue'
import Vuex from 'vuex'

import about from './modules/about'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    about
  },
  getters
})
