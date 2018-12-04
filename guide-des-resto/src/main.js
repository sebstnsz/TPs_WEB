import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);

new Vue({
  el: '#app',
  render: h => h(App)
});