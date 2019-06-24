import Vue from 'vue'
import Router from 'vue-router'
import Mobile from './views/Mobile.vue'
import Desktop from './views/Desktop.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      get component() {
        if (window.innerWidth <= 500) {
          return Mobile 
        } else {
          return Desktop   
        }
      }
    }
  ],
})
