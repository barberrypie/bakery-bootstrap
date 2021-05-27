import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Delivery from "../views/Delivery";
import About from "../views/About";
import Confectionery from "../views/Сonfectionery";

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/confectionery',
    name: 'Confectionery',
    component: Confectionery
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
