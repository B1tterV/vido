import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainPage',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "catalog" */ '@/views/MainPage')
  },
  {
    path: '/catalog',
    name: 'catalog',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "catalog" */ '@/views/Catalog')
  },
  {
    path: '/event',
    name: 'event',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "catalog" */ '@/views/Event')
  },
  {
    path: '/favorites',
    name: 'favorites',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "favorites" */ '@/views/Favorites')
  },
  {
    path: '/basket',
    name: 'basket',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "favorites" */ '@/views/Basket')
  },
  {
    path: '/payment-data',
    name: 'payment-data',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "favorites" */ '@/views/PaymentData')
  },
  {
    path: '/payment-details',
    name: 'payment-details',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "favorites" */ '@/views/PaymentDetails')
  },
  {
    path: '/successful-checkout',
    name: 'successful-checkout',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "favorites" */ '@/views/SuccessfulCheckout')
  },
  {
    path: '/booking-info',
    name: 'booking-info',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "favorites" */ '@/views/BookingInfo')
  },
  {
    path: '/orders',
    name: 'orders',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "favorites" */ '@/views/Orders')
  },
  {
    path: '/profile',
    name: 'profile',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "favorites" */ '@/views/Profile')
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "favorites" */ '@/views/ResetPassword')
  },
  {
    path: '*',
    name: 'page404',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "favorites" */ '@/views/page404')
  },
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
