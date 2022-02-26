import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue'
import Icon from '@/components/icons.vue'
import tagModel from '@/models/tagModel';

Vue.config.productionTip = false

Vue.component('Icon',Icon)
Vue.component('Nav',Nav)
Vue.component('Layout',Layout)

window.tagList = tagModel.fetch();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
