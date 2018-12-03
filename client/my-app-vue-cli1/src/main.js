import Vue from 'vue'
import VueRouter from 'vue-router';


import App from './App.vue'
import User from './components/User.vue';
import Blog from './components/Blog.vue';
import Compte from './components/Compte.vue';

Vue.use(VueRouter);
Vue.component("app-user", User);



const routes = [
 
  {path:'/blog', component: Blog},

  {path:'/compte', component: Compte},

  {path:'/', component: User},

]


const router = new VueRouter({

  routes: routes,

  mode:'history'

})


new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
