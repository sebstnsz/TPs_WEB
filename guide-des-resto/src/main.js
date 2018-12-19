import Vue from 'vue';
import { Button, Input, InputNumber, Icon, ButtonGroup, Row, Col, Pagination, Table, TableColumn, Tooltip,Dialog } from 'element-ui';
import App from './App.vue';

Vue.use(Button);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Icon);
Vue.use(ButtonGroup);
Vue.use(Row);
Vue.use(Col);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tooltip);
Vue.use(Dialog);


new Vue({
  el: '#app',
  render: h => h(App),
});

