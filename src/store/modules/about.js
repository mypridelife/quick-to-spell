const state = {
  count: 0,
  person: {
    name: 'gyh',
    sex: '0'
  }
}
const mutations = {
  plusOne(state, payload) {
    state.count += payload.count
  },
  setPerson(state, payload) {
    state.person = { ...state.person, ...payload }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
