import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _66c40fe5 = () => interopDefault(import('../pages/calculator.vue' /* webpackChunkName: "pages/calculator" */))
const _461ca4a7 = () => interopDefault(import('../pages/todoList.vue' /* webpackChunkName: "pages/todoList" */))
const _15bc8782 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/calculator",
    component: _66c40fe5,
    name: "calculator"
  }, {
    path: "/todoList",
    component: _461ca4a7,
    name: "todoList"
  }, {
    path: "/",
    component: _15bc8782,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
