import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/NavCom.vue';
import Layout from '@/components/LayoutCom.vue'


Vue.config.productionTip = false

// eslint-disable-next-line vue/multi-word-component-names
Vue.component('Nav',Nav)
// eslint-disable-next-line vue/multi-word-component-names
Vue.component('Layout',Layout)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
