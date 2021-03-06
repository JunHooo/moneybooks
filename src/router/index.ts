import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import money from '@/views/Money.vue'
import tip from '@/views/Tip.vue'
import count from '@/views/Count.vue'
import notFound from '@/views/NotFound.vue'
import EditLabel from '@/views/EditLabel.vue';

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
  },
  {
    //$router
    path:'/labels/edit/:id',
    component:EditLabel
  },
  //从上到下依次匹配，上面那些都不匹配后，所有的path都指向404
  {
    path:'*',
    name:'notFound',
    component:notFound
  }
]

const router = new VueRouter({
  routes
})

export default router
