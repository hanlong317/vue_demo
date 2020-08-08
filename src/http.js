// 引入相关配置
import axios from 'axios';


//配置ajax的属性
axios.defaults.timeout = 10000;
axios.defaults.baseURL = '';

//http请求拦截器
axios.interceptors.request.use(config=>{
  console.log("request" , config)

  if(config.method == 'get'){
    config.params ={
      _t :Date.parse(new Date()) /1000,
      ...config.params
    }
    //让ajax携带token值
    //config.headers.common['x-access-token'] = getCookie('token');
    return config;
  }
},error=>{
  store.commit('changSpinShow',false);
  return Promise.reject(error);
})

//http响应拦截器o
axios.interceptors.response.use(data=>{
  console.lg(data);
  store.commit('changeSpinShow',false);
  return data;
},error=>{
  if(error.response){
    switch (error.response.status) {
      case 401:
        store.commit("LOGOUT");
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        })
      default :
        store.commit('changeSpinShow', false);
    }
    return Promise.reject(error.response)
  }
})

export  default  axios
