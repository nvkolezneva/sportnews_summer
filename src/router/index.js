import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import { authGuard } from "../auth/authGuard";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../components/EventsList.vue')
    },
    {
      path: '/event/:id',
      name: 'eventSingle',
      component: () => import('../views/EventSingle.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/news_item/:id',
      name: 'newsSingle',
      component: () => import('../views/NewsSingle.vue'),
      beforeEnter: authGuard
    }
    ,
    {
      path: '/event_form',
      name: 'EventForm',
      component: () => import('../components/forms/EventForm.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/teams',
      name: 'Teams',
      component: () => import('../components/coach/Teams.vue'),
      beforeEnter: authGuard
    }
  ]
})