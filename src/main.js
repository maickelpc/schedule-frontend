/*!

 =========================================================
 * Vue Light Bootstrap Dashboard - v2.0.0 (Bootstrap 4)
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Schedule from 'vue-schedule'
import vuetify from '@/plugins/vuetify'

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'

// store
import store from './store/store'

import './registerServiceWorker'
// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.use(Schedule)
// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

Vue.filter('time', function (value) {
  if (!value) return ''
  value = value.format('HH:mm:ss')
  return value
})

Vue.filter('datetime', function (value) {
  if (!value) return ''
  value = value.format('DD/MM/YYYY HH:mm:ss')
  return value
})

/* eslint-disable no-new */
new Vue({
  vuetify,
  el: '#app',
  render: h => h(App),
  router,
  store
})
