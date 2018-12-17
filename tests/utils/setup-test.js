import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import vueBemCn from 'vue-bem-cn/dist/vue-bem-cn.umd.min'
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'

export function setupTest () {
  const localVue = createLocalVue()

  localVue.use(vueBemCn)
  localVue.use(Router)
  localVue.use(Vuex)
  localVue.use(Vuelidate)
  Vue.use(Vuetify)

  return {
    shallow (cmp, options = {}) {
      return shallowMount(cmp, {
        ...options,
        localVue
      })
    },

    mount (cmp, options = {}) {
      return mount(cmp, {
        ...options,
        localVue
      })
    }
  }
}

export function generateStore (modules = {}) {
  return new Vuex.Store({ modules })
}
