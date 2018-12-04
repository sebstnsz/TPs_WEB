import Vue from 'vue';
import { Button, Input, InputNumber, Icon, ButtonGroup, Row, Col, Pagination } from 'element-ui';
import App from './App.vue';

Vue.use(Button);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Icon);
Vue.use(ButtonGroup);
Vue.use(Row);
Vue.use(Col);
Vue.use(Pagination);

new Vue({
  el: '#app',
  render: h => h(App)
});