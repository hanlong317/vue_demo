import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import login from '@/pages/login/login';
import workspace from '@/pages/workspace/workspace';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: login,
    },

    // {
    // path:'/workspace',meta:{title:'工作台',component:resolve =>require([workspace],resolve)}
    // },
    {
      path: '/workspace',
      name: 'HelloWorld',
      component: workspace,
    },
    {
      path: '/login',
      name: 'HelloWorld',
      component: login,
    },

  ],
});
