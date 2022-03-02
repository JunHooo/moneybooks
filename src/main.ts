import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue'
import Icon from '@/components/icons.vue'


Vue.config.productionTip = false

Vue.component('Icon',Icon)
Vue.component('Nav',Nav)
Vue.component('Layout',Layout)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//用手机打开页面时，页面下滑到底部，防止某些浏览器中底部导航栏看不见
window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 200);
  }, 0);
};
