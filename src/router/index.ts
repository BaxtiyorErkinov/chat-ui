import { chatRoute } from '@/modules/chat/chat.route'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...chatRoute]
})

export default router
