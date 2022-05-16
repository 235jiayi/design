import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home')
  },
  {
    path: '/exhibition/:id/:length',
    name:'Exhibition',
    component: () => import(/* webpackChunkName: "exhibition" */ '../views/exhibition/Exhibition')
  },
  {
    path: '/souvenir',
    name: 'Souvenir',
    component: () => import(/* webpackChunkName: "souvenir" */ '../views/souvenir/Souvenir')
  }, {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login')
  },
  {
    path: '/souvenirItem/:id',
    name: 'SouvenirItem',
    component: () => import(/* webpackChunkName: "souvenirItem" */ '../views/souvenirItem/SouvenirItem')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
