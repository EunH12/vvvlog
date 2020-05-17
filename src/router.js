import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "Portfolio" */ '@/views/Portfolio/Index.vue'),
    redirect: 'portfolio/publishing/list',
    children: [
      {
        path: 'publishing',
        name: 'Publishing',
        component: () => import(/* webpackChunkName: "Portfolio" */ '@/views/Portfolio/Index.vue'),
        redirect: 'publishing/list',
        children: [
          {
            path: 'list',
            name: 'Publishing_List',
            component: () => import(/* webpackChunkName: "Portfolio" */ '@/views/Portfolio/Publishing/list.vue')
          },
          {
            path: ':id',
            name: 'Publishing_Detail',
            component: () => import(/* webpackChunkName: "Portfolio" */ '@/views/Portfolio/Publishing/detail.vue')
          }
        ]
      },
      {
        path: 'front',
        name: 'Front',
        component: () => import(/* webpackChunkName: "Portfolio" */ '@/views/Portfolio/Index.vue'),
        redirect: 'front/2019',
        children: [
          {
            path: '2019',
            name: 'Front_2019',
            component: () => import(/* webpackChunkName: "Portfolio" */ '@/views/Portfolio/Front/2019.vue')
          },
          {
            path: '2020',
            name: 'Front_2020',
            component: () => import(/* webpackChunkName: "Portfolio" */ '@/views/Portfolio/Front/2020.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/poke',
    name: 'Poke',
    component: () => import(/* webpackChunkName: "Poke" */ '@/views/Portfolio/Index.vue'),
    redirect: 'poke/list',
    children: [
      {
        path: 'list',
        name: 'Poke_list',
        component: () => import(/* webpackChunkName: "Poke" */ '@/views/Poke/list.vue')
      },
      {
        path: ':id',
        name: 'Poke_detail',
        component: () => import(/* webpackChunkName: "Poke" */ '@/views/Poke/detail.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loginCheck = Cookies.get('user')
  if (to.name !== 'Login') {
    if (loginCheck !== undefined) {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
