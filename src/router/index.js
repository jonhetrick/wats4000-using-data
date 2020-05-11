import Vue from 'vue'
import VueRouter from 'vue-router'
import Rhymesaurus from '@/views/rhymesaurus.vue'
import Soundmachine from '@/views/soundmachine.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/rhymesaurus',
    name: 'rhymesaurus',
    component: Rhymesaurus
  },
  {
    path: '/soundmachine',
    name: 'soundmachine',
    component: Soundmachine
  }
]

const router = new VueRouter({
  routes
})

export default router
