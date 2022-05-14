import { createRouter, createWebHistory } from 'vue-router'

// 开启历史模式
// vue2中使用 mode: history 实现
const routerHistory = createWebHistory()

//console.log('11', import('../views/Home.vue'))

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('/@/views/Home.vue'),
      meta: { title: 'home' }
    },
    {
      path: '/contact',
      component: () => import('/@/views/Contact.vue'),
      meta: { title: 'Contact' }
    }
  ]
})

export default router
