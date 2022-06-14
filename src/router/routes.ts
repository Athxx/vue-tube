import { RouteRecordRaw } from 'vue-router'

export const baseRoutes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: () => import('~/views/main/index.vue'),
    meta: { title: '首页' },
  },
  {
    name: 'LOGIN',
    path: '/login',
    component: () => import('~/views/sign/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    name: 'test',
    path: '/test',
    component: () => import('~/views/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    name: '404',
    path: '/:catchAll(.*)',
    component: () => import('~/views/error/404.vue'),
    meta: { title: 'Page not found' },
  },
]
