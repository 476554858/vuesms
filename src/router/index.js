import Vue from 'vue'
import Router from 'vue-router'
/*import login from '@/components/login'
import index from '@/components/index'*/

const login = () => import('@/components/login')
const index = () => import('@/components/index')
const userlist = () => import('@/components/userlist')
const useradd = () => import('@/components/useradd')
const home = () => import('@/components/home')
const passwordedit = () => import('@/components/passwordedit')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '',
          name: 'home',
          component: home
        },
        {
          path: '/userlist',
          name: 'userlist',
          component: userlist
        },
        {
          path: '/useradd',
          name: 'useradd',
          component: useradd
        },
        {
          path: '/passwordedit',
          name: 'passwordedit',
          component: passwordedit
        }
      ]
    }
  ]
})
