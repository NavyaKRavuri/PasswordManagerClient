import Vue from 'vue';
import App from './App.vue';
import axios from './axios'
import { router } from '../src/router';
import store from './store/index.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './index.css';
import "tailwindcss/tailwind.css";

Vue.use(ElementUI);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
