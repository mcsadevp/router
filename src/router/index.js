// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Productos from '../views/Productos.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
