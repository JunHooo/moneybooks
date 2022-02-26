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
window.createTag = (name: string) => {
  const names = tagModel.data.map(item => item.name);
  if (names && name && name !== '') {
    if (names.indexOf(name) >= 0) {
      window.alert('标签名不能重复！');
      return;
    } else {
      tagModel.create(name);
      window.alert('创建成功！');
    }
  }
};
window.findTag = (id: string) => {
  return window.tagList.filter(t => t.id === id)[0];
};
window.removeTag = (id: string) => {
  return tagModel.remove(id);
};
window.updateTag = (id: string, name: string) => {
  return tagModel.update(id, name);
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
