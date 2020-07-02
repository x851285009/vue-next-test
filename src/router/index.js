import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('../views/Home.vue')
const About = () => import('../views/Home.vue')
const Test = () => import('../views/test.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/test',
    name: 'Test',
    component:Test
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
