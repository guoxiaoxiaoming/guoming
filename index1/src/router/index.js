import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index1s from '@/components/index'
import Login from '@/components/Login'
import zhuce from '@/components/zhuce'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },  
 		{
      path: '/index1s',
      component: index1s
    },
 		{
      path: '/Login',
      component: Login
    },
 		{
      path: '/zhuce',
      component: zhuce
   },
  ]
})
