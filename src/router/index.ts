import { createRouter, createWebHistory } from 'vue-router'
import { baseRoutes } from './routes'
import type { App } from 'vue'
export const router = createRouter({
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

export function setupRouter(app: App<Element>) {
  app.use(router)
}
