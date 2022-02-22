import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import money from '@/views/MoneyView.vue'
import tip from '@/views/TipView.vue'
import count from '@/views/CountView.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:'/money'
  },
  {
    path: '/money',
    name: 'money',
    component: money
  },
  {
    path: '/tip',
    name: 'tip',
    component: tip
  },
  {
    path: '/count',
    name: 'count',
    component: count
  }
]

const router = new VueRouter({
  routes
})

export default router
