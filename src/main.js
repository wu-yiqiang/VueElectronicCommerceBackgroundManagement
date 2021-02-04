import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

//导入iconfont
import "../src/assets/fonts/iconfont.css"

//导入登录组件

//导入全局样式
import "./assets/css/global.css"
Vue.config.productionTip = false


//导入axios
import axios from "axios"
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';
Vue.prototype.$http = axios;


//请求拦截器
axios.interceptors.request.use(config=>{
  //设置请求头，将token加入到请求头中
  config.headers.Authorization=window.sessionStorage.getItem("loginToken")
  return config
})


//响应拦截器
axios.interceptors.response.use(res =>{
  if(res.data.meta.msg=="无效token" || res.data.meta.status==401 ){
      location.href="/#/login"
  }
  return res
})




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
