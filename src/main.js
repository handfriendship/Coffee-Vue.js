import Vue from 'vue'
import App from './App.vue'
import store from './store';

Vue.prototype.$EventBus = new Vue();

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
