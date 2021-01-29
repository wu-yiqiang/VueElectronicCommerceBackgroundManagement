import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../components/Login.vue"


Vue.use(VueRouter)

const routes = [
 //注册根路由
  {path:"/",redirect:"/login"},
  //注册login路由
  {path:"/login",component:login},

]

const router = new VueRouter({
  routes
})

export default router
