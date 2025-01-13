import { createRouter, createWebHistory } from 'vue-router'
import CarView from '../views/Car.vue'
import OrderView from '../views/Order.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'car',
      component: CarView
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView
    }
  ]
})

export default router