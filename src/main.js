import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Main from './js/main';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

new Main();
