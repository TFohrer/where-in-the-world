import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/country/:isoCode',
    name: 'country-detail',
    component: () => import(/* webpackChunkName: "country-detail" */ '../views/CountryDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
