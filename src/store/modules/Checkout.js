import { request } from '@/utils/api'

export default {
  namespaced: true,

  state: {
    step: 0,
    status: null,
    loading: false,
    common: {
      name: '',
      surname: '',
      phone: '',
      email: ''
    },
    address: {}
  },

  getters: {
    step: state => state.step,
    status: state => state.status,
    loading: state => state.loading,
    common: state => state.common,
    address: state => state.address
  },

  actions: {
    complete ({ commit }) {
      commit('loading', true)
      return request('test', 'get', {}, 'success')
        .then(success => commit('setStatus', success))
        .catch(() => commit('setStatus', false))
        .finally(() => commit('loading', false))
    }
  },

  mutations: {
    setStep (state, step) {
      state.step = step
    },

    setStatus (state, status) {
      state.status = status ? 'success' : 'failure'
    },

    clearStatus (state) {
      state.status = null
    },

    loading (state, status) {
      state.loading = status
    }
  }
}
