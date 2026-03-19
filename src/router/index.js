import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detalle from '../views/Detalle.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/lugar/:id', name: 'Detalle', component: Detalle }
]

export default createRouter({
  history: createWebHistory(),
  routes
})