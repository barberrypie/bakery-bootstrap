import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Delivery from "@/views/Delivery";
import About from "@/views/About";
import Category from "@/views/Category";
import Products from "@/views/Products";
import NotFound from "@/views/NotFound"
import Coating from "@/views/Coating"

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
    path: '/category/:id',
    name: 'Category',
    component: Category
  },
  {
    path: '/products/:id',
    name: 'Products',
    component: Products
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/coating',
    name: 'Coating',
    component: Coating
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
