import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login.vue"
import Home from "../components/Home.vue"





Vue.use(VueRouter)

const routes = [
 //注册根路由
  {path:"/",redirect:"/login"},
  //注册login路由
  {path:"/login",component:Login},
  //home路由
  { path: "/home", component:Home}
]


const router = new VueRouter({
  routes
})



// 挂载路由导航守卫，to 表示将要访问的路径，from 表示从哪里来，next 是下一个要做的操作
router.beforeEach((to, from, next) => {
  // 直接放行
  if (to.path === '/login') return next();
  // 获取 token
  const tokenStr = window.sessionStorage.getItem('loginToken');
  // token 不存在，跳转登录界面
  if (!tokenStr) return next('/login');
  // token 存在，放行
  next();
});

export default router