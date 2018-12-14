import { request } from '@/utils/api'
import { cleanObject } from '@/utils/helpers'

const nullState = {
  step: 1,
  status: null,
  loading: false,
  common: {
    name: null,
    surname: null,
    phone: null,
    email: null
  },
  delivery: {
    type: 'courier',
    types: ['courier', 'pickup'],
    country: null,
    city: null,
    index: null,
    address: null,
    date: null,
    description: null
  }
}

export default {
  namespaced: true,

  state: cleanObject(nullState),

  getters: {
    step: state => state.step,
    status: state => state.status,
    loading: state => state.loading,
    common: state => state.common,
    delivery: state => state.delivery
  },

  actions: {
    complete ({ commit, getters }) {
      const params = { ...getters.common, ...getters.delivery }
      commit('loading', true)
      return request('test', 'get', params, 'success')
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

    clearAddress (state) {
      Object.assign(state.delivery, cleanObject(nullState.delivery))
    },

    loading (state, status) {
      state.loading = status
    }
  }
}
