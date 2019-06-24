import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSocketIO from 'vue-socket.io'
import './registerServiceWorker'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://otium-project.herokuapp.com',
  options: { transports: ['websocket'], upgrade: false } //Optional options
}))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
