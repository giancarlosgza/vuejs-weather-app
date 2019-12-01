import Vue from 'vue'
import App from './App.vue'
import router from "./router"; // Router config
import store from "./store"; // Store config


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
