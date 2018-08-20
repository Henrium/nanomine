// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import Header from '@/components/PageHeader'
import SubHeader from '@/components/PageSubHeader'
import Footer from '@/components/PageFooter'
import LeftMenu from '@/components/LeftMenu'
import Waiting from '@/components/Waiting'

import store from './store'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Vuetify, {
  theme: {
    secondary: '#B3E5FC',
    primary: '#03A9F4',
    accent: '#3D5AFE',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#82B1FF',
    success: '#4caf50'
  }
})

Vue.component('page-header', Header)
Vue.component('page-subheader', SubHeader)
Vue.component('page-footer', Footer)
Vue.component('LeftMenu', LeftMenu)
Vue.component('waiting', Waiting)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
