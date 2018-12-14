import Vue from 'vue'
import Vuex from 'vuex'

import CheckoutModule from '@/store/modules/Checkout'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    'checkout': CheckoutModule
  }
})
