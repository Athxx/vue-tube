import { createRouter, createWebHistory } from 'vue-router'
import { baseRoutes } from './routes'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: baseRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    name && router.hasRoute(name) && router.removeRoute(name)
  })
}

router.beforeEach(async (to) => {
  console.log('----------------', to.meta.title)

  // const token = getToken()
  // // 如果当前页面已经登陆, 跳转
  // if (to.path === '/login' && token !== '') {
  // }
  // // 如果页面需要权限
  // if (to.meta.perm) {
  //   if (getToken() === '') {
  //   }
  // }
})

export default router
