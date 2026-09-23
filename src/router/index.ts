import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ClassifiedDashboard from '../views/ClassifiedDashboard.vue'
import Submarines from '../views/Submarines.vue'
import GroundOps from '../views/GroundOps.vue'
import SatRecon from '../views/SatRecon.vue'
import DoomsdayMachine from '../views/DoomsdayMachine.vue'
import SituationRoom from '../views/SituationRoom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/classified',
      name: 'classified',
      component: ClassifiedDashboard
    },
    {
      path: '/classified/submarines',
      name: 'submarines',
      component: Submarines
    },
    {
      path: '/classified/ground-ops',
      name: 'ground-ops',
      component: GroundOps
    },
    {
      path: '/classified/sat-recon',
      name: 'sat-recon',
      component: SatRecon
    },
    {
      path: '/classified/doomsday',
      name: 'doomsday',
      component: DoomsdayMachine
    },
    {
      path: '/classified/briefing',
      name: 'briefing',
      component: SituationRoom
    }
  ]
})

export default router
