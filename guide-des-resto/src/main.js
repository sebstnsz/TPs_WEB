import Vue from 'vue';
import { Button, Select, Input, Icon } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Icon.name, Icon);

new Vue({
  el: '#app',
  render: h => h(App)
});