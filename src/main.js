// polyfills
import '@babel/polyfill'
import 'dom-shims/shim/HTMLDocument'
import 'dom-shims/shim/Element.matches'
import 'dom-shims/shim/Element.closest'
import 'dom-shims/shim/Element.mutation'

// libraries
import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import vueBemCn from 'vue-bem-cn/dist/vue-bem-cn.umd.min'
import Vuetify from 'vuetify'

// style
import 'vuejs-noty/dist/vuejs-noty.css'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/fonts/material-icons.css'

Vue.config.productionTip = false
Vue.use(vueBemCn)
Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
