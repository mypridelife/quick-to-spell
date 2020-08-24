const state = {
  theme: localStorage.getItem('app_theme')
    ? localStorage.getItem('app_theme')
    : 'white'
}
const mutations = {
  setTheme(state, payload) {
    state.theme = payload.theme
    localStorage.setItem('app_theme', state.theme)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
