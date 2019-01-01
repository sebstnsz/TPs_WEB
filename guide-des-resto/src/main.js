import Vue from 'vue';
import { Button, Input, InputNumber, Icon, ButtonGroup, Row, Col, Pagination, Table, TableColumn, Tooltip, Dialog, Tabs, TabPane, Rate, Card } from 'element-ui';
import App from './App.vue';
import 'here-js-api/scripts/mapsjs-core';
import 'here-js-api/scripts/mapsjs-service';
import 'here-js-api/scripts/mapsjs-ui';
import 'here-js-api/scripts/mapsjs-mapevents';
import 'here-js-api/scripts/mapsjs-clustering';

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
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Rate);
Vue.use(Card);

new Vue({
  el: '#app',
  render: h => h(App),
});

