import Vue from 'vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import './plugins/font-awesome'
import './directives'
import App from './App.vue'
import router from './router'
import store from './store'


import './assets/css/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init() {
      store.dispatch('oauth/getToken')
    }
  },
  created() {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
