// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入element-ui的组件和样式
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue';
import App from './App';
import router from './router';
import axios from './http'

Vue.use(ElementUi)

Vue.config.productionTip = false;
Vue.prototype.$ajax=axios

let env=require('./env/'+process.env.NODE_ENV+'.env.js');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
