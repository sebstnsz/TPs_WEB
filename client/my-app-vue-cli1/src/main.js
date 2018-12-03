import Vue from 'vue'
import App from './App.vue'
import User from './components/User.vue';
import Info from './components/Info.vue';

Vue.component("app-user", User);

new Vue({
  el: '#app',
  render: h => h(App)
})
