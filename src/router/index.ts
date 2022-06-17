import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PaymentsHistoryIndex from '../views/PaymentsHistoryIndex.vue'
import BettingsHistoryIndex from '../views/BettingsHistoryIndex.vue'
import MyProfileIndex from '../views/MyProfileIndex.vue'
import WithdrawIndex from '../views/WithdrawIndex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MyProfileIndex',
    component: MyProfileIndex,
  },
  {
    path: '/payments-history',
    name: 'PaymentsHistoryIndex',
    component: PaymentsHistoryIndex,
  },
  {
    path: '/withdraw',
    name: 'WithdrawIndex',
    component: WithdrawIndex,
  },
  {
    path: '/betting-history',
    name: 'BettingsHistoryIndex',
    component: BettingsHistoryIndex,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
