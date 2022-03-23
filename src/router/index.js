import {createRouter, createWebHistory} from 'vue-router'

// 开启历史模式
// vue2中使用 mode: history 实现
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/Home'),
      meta: {title: 'home'}
    },
    {
      path: '/contact',
      component: () => import('../views/Contact'),
      meta: {title: 'Contact'}
    }
  ]
})

export default router
