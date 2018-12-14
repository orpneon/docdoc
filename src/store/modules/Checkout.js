export default {
  namespaced: true,

  state: {
    step: 0,
    common: {},
    address: {}
  },

  getters: {
    step: state => state.step,
    common: state => state.common,
    address: state => state.address
  },

  actions: {},

  mutations: {
    setStep (state, step) {
      state.step = step
    }
  }
}
