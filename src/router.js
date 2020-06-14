import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const loginCheck = Cookies.get('user')
//   if (to.name !== 'Login') {
//     if (loginCheck !== undefined) {
//       next()
//     } else {
//       next({ name: 'Login' })
//     }
//   } else {
//     next()
//   }
// })

export default router
